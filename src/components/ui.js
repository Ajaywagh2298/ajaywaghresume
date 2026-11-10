import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Arrow = () => <span aria-hidden="true" className="arrow">→</span>;

export const External = ({ href, children, ...props }) =>
  href ? <a href={href} target="_blank" rel="noreferrer" {...props}>{children}<span className="sr-only"> (opens in a new tab)</span></a> : null;

// Fades content in once it scrolls into view. Without IntersectionObserver it simply shows.
export function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(typeof IntersectionObserver === 'undefined');
  useEffect(() => {
    if (shown || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(true); observer.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shown]);
  return <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} {...props}>{children}</Tag>;
}

export function PageHero({ eyebrow, title, accent, children, image }) {
  return (
    <header className={`page-hero ${image ? 'has-image' : ''}`} style={image ? { '--hero-image': `url(${image})` } : undefined}>
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        {children && <div className="page-hero-text">{children}</div>}
      </div>
    </header>
  );
}

export function SectionHead({ eyebrow, title, children }) {
  return <div className="section-head"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</div>;
}

export const Tags = ({ items = [] }) => items.length ? <ul className="tags" aria-label="Tags">{items.map(t => <li key={t}>{t}</li>)}</ul> : null;

export function EmptyState({ title, children, action }) {
  return <div className="empty-state"><span className="empty-mark" aria-hidden="true">✦</span><h3>{title}</h3><p>{children}</p>{action}</div>;
}

export function ContactBanner() {
  return (
    <Reveal as="section" className="contact-banner">
      <div><p className="eyebrow">Have something in mind?</p><h2>Let’s make it <em>happen.</em></h2></div>
      <Link className="btn btn-gold" to="/contact">Start a conversation <Arrow /></Link>
    </Reveal>
  );
}
