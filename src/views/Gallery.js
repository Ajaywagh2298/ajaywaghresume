import React, { useRef, useState } from 'react';
import { PageHero } from '../components/ui';
import { gallery } from '../content';

// Accessible image grid + dialog viewer, used by the gallery and travel pages.
export function Lightbox({ images, label = 'image' }) {
  const dialog = useRef(null);
  const opener = useRef(null);
  const [index, setIndex] = useState(0);
  if (!images.length) return null;
  const open = (i, e) => { opener.current = e.currentTarget; setIndex(i); dialog.current?.showModal?.(); };
  const close = () => { dialog.current?.close?.(); opener.current?.focus(); };
  const step = d => setIndex(i => (i + d + images.length) % images.length);
  const current = images[index];
  return (
    <>
      <div className="gallery">
        {images.map((im, i) => (
          <button key={`${im.url}-${i}`} type="button" onClick={e => open(i, e)} aria-label={`Open ${label} ${i + 1} of ${images.length}`}>
            <img src={im.url} alt={im.alt || ''} loading="lazy" />
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="lightbox" aria-label={`${label} viewer`} onClick={e => { if (e.target === dialog.current) close(); }}
        onKeyDown={e => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); }} onCancel={() => opener.current?.focus()}>
        <div className="lightbox-bar"><span>{index + 1} / {images.length}</span><button type="button" onClick={close}>Close ×</button></div>
        <img src={current.url} alt={current.alt || `${label} ${index + 1}`} />
        <div className="lightbox-bar">
          <button type="button" onClick={() => step(-1)}>← Previous</button>
          <a href={current.url} target="_blank" rel="noreferrer">Open original</a>
          <button type="button" onClick={() => step(1)}>Next →</button>
        </div>
      </dialog>
    </>
  );
}

export default function Gallery() {
  const images = gallery.map((g, i) => ({ url: g.url, alt: g.title && !g.title.startsWith('Title') ? g.title : `Milestone ${i + 1}` }));
  return (
    <div className="page">
      <PageHero eyebrow="Gallery" title="Along the journey." accent="Milestones in frames.">
        <p>Certificates, achievements, and moments from my journey.</p>
      </PageHero>
      <section className="section"><Lightbox images={images} label="milestone" /></section>
    </div>
  );
}
