import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero, Reveal, SectionHead, Tags, Arrow, External, EmptyState } from '../components/ui';
import { writing, profile, formatMonth } from '../content';

const tabs = [['All', null], ['Poetry', 'Poem'], ['Stories', 'Story']];

export default function Writing() {
  const [tab, setTab] = useState('All');
  const kind = tabs.find(([label]) => label === tab)[1];
  const shown = writing.filter(w => !kind || w.kind === kind);
  const featured = writing.find(w => w.featured) || writing[0];
  const more = <External className="btn btn-gold" href={profile.writingProfile}>Read my writing on Pratilipi <Arrow /></External>;
  return (
    <div className="page page-journal">
      <PageHero eyebrow="Poetry & stories" title="Words from" accent="the journal.">
        <p>Thoughts I couldn’t write in code — poems, stories and small reflections.</p>
      </PageHero>
      {featured && (
        <section className="section">
          <Reveal><Link className="featured-writing" to={`/writing/${featured.slug}`}>
            <p className="eyebrow gold">Featured {featured.kind.toLowerCase()} · {featured.minutes} min read</p>
            <h2>{featured.title}</h2>
            {featured.excerpt && <p className="lead handwritten-quote">{featured.excerpt}</p>}
            <span className="identity-link">Read now <Arrow /></span>
          </Link></Reveal>
        </section>
      )}
      <section className="section">
        <SectionHead eyebrow="The library" title="Everything I’ve written.">{writing.length > 0 && more}</SectionHead>
        {writing.length > 0 && (
          <div className="filters" role="group" aria-label="Filter writing">
            {tabs.map(([label]) => <button key={label} type="button" aria-pressed={tab === label} onClick={() => setTab(label)}>{label}</button>)}
          </div>
        )}
        {shown.length ? (
          <ul className="writing-list">
            {shown.map(w => (
              <Reveal as="li" key={w.slug}>
                <Link to={`/writing/${w.slug}`} className="writing-row">
                  <span className="eyebrow">{w.kind}{w.date ? ` · ${formatMonth(w.date)}` : ''} · {w.minutes} min</span>
                  <h3>{w.title}</h3>
                  {w.excerpt && <p>{w.excerpt}</p>}
                  <Tags items={w.tags} />
                </Link>
              </Reveal>
            ))}
          </ul>
        ) : (
          <EmptyState title="The journal is being written" action={more}>
            New poems and stories will appear here. Until then, you can read my published writing on Pratilipi.
          </EmptyState>
        )}
      </section>
    </div>
  );
}

export function Reader() {
  const { slug } = useParams();
  const [night, setNight] = useState(() => { try { return localStorage.getItem('reading-theme') === 'night'; } catch { return false; } });
  const piece = writing.find(w => w.slug === slug);
  function toggle() { setNight(!night); try { localStorage.setItem('reading-theme', night ? 'paper' : 'night'); } catch {} }
  if (!piece) return <div className="page"><PageHero eyebrow="404" title="This page is missing from the journal." /><section className="section"><Link className="btn btn-gold" to="/writing">Back to the journal</Link></section></div>;
  const paragraphs = String(piece.body || piece.excerpt || '').split(/\n\s*\n/).filter(Boolean);
  return (
    <article className={`reader ${night ? 'reader-night' : ''} ${piece.kind === 'Poem' ? 'reader-poem' : ''}`}>
      <div className="reader-bar">
        <Link to="/writing">← The journal</Link>
        <button type="button" onClick={toggle} aria-pressed={night}>{night ? 'Paper theme' : 'Night reading'}</button>
      </div>
      <header>
        <p className="eyebrow">{piece.kind}{piece.date ? ` · ${formatMonth(piece.date)}` : ''} · {piece.minutes} min read</p>
        <h1>{piece.title}</h1>
      </header>
      <div className="reader-body">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
      <Tags items={piece.tags} />
      {piece.link && <External className="text-link" href={piece.link}>Read where it was published <Arrow /></External>}
    </article>
  );
}
