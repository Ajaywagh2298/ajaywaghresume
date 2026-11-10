import React, { useEffect, useRef, useState } from 'react';

// Canvas-based 3D globe using custom WebGL
function GlobeCanvas({ points = [], title, color = '#b8e986', description }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef({ rotation: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Canvas not supported (e.g., in test environment)

    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;
    const radius = Math.min(w, h) / 2 - 20;

    // Get computed styles for dark/light theme
    const isDark = document.documentElement.dataset.theme !== 'light';
    const bgColor = isDark ? '#13161b' : '#fff';
    const gridColor = isDark ? 'rgba(136, 136, 136, 0.1)' : 'rgba(136, 136, 136, 0.15)';

    let animationFrameId = null;

    function drawGlobe() {
      // Clear
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, w, h);

      // Save state
      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotate
      sceneRef.current.rotation += 0.3;
      ctx.rotate(sceneRef.current.rotation * Math.PI / 180);

      // Draw grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let lat = -90; lat <= 90; lat += 30) {
        const y = (lat / 90) * radius;
        ctx.beginPath();
        ctx.ellipse(0, y, Math.sqrt(radius * radius - y * y), Math.abs(y) * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        const angle = (lon * Math.PI / 180);
        for (let lat = -90; lat <= 90; lat += 5) {
          const rad = lat * Math.PI / 180;
          const x = radius * Math.cos(rad) * Math.cos(angle);
          const y = radius * Math.sin(rad);
          if (lat === -90) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw globe outline
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw points
      points.forEach(point => {
        const lat = point.lat * Math.PI / 180;
        const lon = point.lon * Math.PI / 180;

        // 3D perspective
        const rotatedLon = lon + sceneRef.current.rotation * Math.PI / 180;
        const x = radius * Math.cos(lat) * Math.cos(rotatedLon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.sin(rotatedLon);

        // Only draw if visible
        if (z > 0) {
          const scale = (radius + z) / (2 * radius);
          const size = point.size || 8;

          ctx.fillStyle = point.color || color;
          ctx.globalAlpha = 0.7 + 0.3 * scale;
          ctx.beginPath();
          ctx.arc(x, y, size * scale, 0, Math.PI * 2);
          ctx.fill();

          // Glow
          ctx.strokeStyle = point.color || color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3 * scale;
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      ctx.restore();

      animationFrameId = requestAnimationFrame(drawGlobe);
    }

    drawGlobe();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [points, color]);

  return (
    <article className="globe-card">
      <div className="globe-header">
        <span className="eyebrow">{title}</span>
        <p className="globe-desc">{description}</p>
      </div>
      <canvas ref={canvasRef} width={280} height={280} className="globe-canvas" />
    </article>
  );
}

// Experience Globe - Company locations
export function ExperienceGlobe() {
  const points = [
    { lat: 18.5, lon: 73.85, label: 'Pune', size: 10, color: '#b8e986' }, // Eazy ERP, Recibo
    { lat: 19.08, lon: 72.88, label: 'Mumbai', size: 8, color: '#a0c6ea' }, // Konfhub (if near)
    // Add more locations as experience grows
  ];

  return (
    <GlobeCanvas
      points={points}
      title="WHERE I'VE WORKED"
      color="#b8e986"
      description="Companies and locations across India"
    />
  );
}

// GitHub Globe - Contribution hotspots
export function GitHubGlobe() {
  const points = [
    { lat: 18.5, lon: 73.85, label: 'Home', size: 12, color: '#4eca3f' }, // Pune - home base
    { lat: 28.7, lon: 77.1, label: 'Delhi', size: 5, color: '#6ae74f' }, // Random contrib
    { lat: 13.0, lon: 80.27, label: 'Chennai', size: 4, color: '#8eef6f' },
    { lat: 34.05, lon: -118.24, label: 'Open Source', size: 6, color: '#a8f789' }, // Global OSS
    { lat: -33.87, lon: 151.21, label: 'Dev Community', size: 5, color: '#6ae74f' },
  ];

  return (
    <GlobeCanvas
      points={points}
      title="GITHUB ACTIVITY"
      color="#4eca3f"
      description="Open source contributions mapped globally"
    />
  );
}

// Availability Globe - Time zones
export function AvailabilityGlobe() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  const isSleeping = hour < 6 || hour > 23;

  const points = [
    { lat: 18.5, lon: 73.85, label: 'Pune (IST)', size: isSleeping ? 6 : 12, color: isSleeping ? '#888' : '#ffd700' }, // Current
    { lat: 51.5, lon: -0.1, label: 'London', size: 6, color: '#b8e986' }, // Work hours
    { lat: 37.77, lon: -122.41, label: 'San Francisco', size: 6, color: '#b8e986' },
    { lat: 35.68, lon: 139.69, label: 'Tokyo', size: 6, color: '#b8e986' },
  ];

  return (
    <GlobeCanvas
      points={points}
      title="WHEN I'M AWAKE"
      color={isSleeping ? '#999' : '#ffd700'}
      description={isSleeping ? 'Currently sleeping – message anytime 📧' : 'Currently working – reach out! 🚀'}
    />
  );
}

// Container for all three globes
export function GlobalPerspective() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">GLOBAL REACH</span>
          <h2>A world of experience<span className="accent">.</span></h2>
        </div>
        <p>Across companies, open source, and time zones.</p>
      </div>
      <div className="globes-grid">
        <ExperienceGlobe />
        <GitHubGlobe />
        <AvailabilityGlobe />
      </div>
    </section>
  );
}
