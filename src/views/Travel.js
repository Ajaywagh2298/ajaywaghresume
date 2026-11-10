import React from 'react';
import { PageHero, Reveal, SectionHead, Tags, EmptyState, Arrow } from '../components/ui';
import { Lightbox } from './Gallery';
import { travelEntries, formatMonth, socialUrl } from '../content';

export default function Travel() {
  const instagram = socialUrl('Instagram');
  return (
    <div className="page">
      <PageHero eyebrow="Travel diaries" title="Every place" accent="teaches something new.">
        <p>Notes, photographs and memories from the roads I’ve taken.</p>
      </PageHero>
      <section className="section">
        <SectionHead eyebrow="Destinations" title="From the travel journal." />
        {travelEntries.length ? (
          <div className="travel-list">
            {travelEntries.map(t => (
              <Reveal as="article" key={t.slug} className="travel-entry">
                <header>
                  <p className="eyebrow gold">{[t.country, t.date && formatMonth(t.date)].filter(Boolean).join(' · ')}</p>
                  <h3>{t.place}</h3>
                </header>
                {t.story && <p className="lead">{t.story}</p>}
                <Tags items={t.highlights} />
                <Lightbox images={t.images.map((url, i) => ({ url, alt: `${t.place}, photo ${i + 1}` }))} label={`${t.place} photo`} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title="The first pages are still blank" action={instagram && <a className="btn btn-ghost" href={instagram} target="_blank" rel="noreferrer">Follow along on Instagram <Arrow /></a>}>
            Travel stories and photographs will appear here as I add them.
          </EmptyState>
        )}
      </section>
    </div>
  );
}
