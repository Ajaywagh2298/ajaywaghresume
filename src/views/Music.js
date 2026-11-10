import React from 'react';
import { PageHero, Reveal, SectionHead, EmptyState, External, Arrow } from '../components/ui';
import { musicContent } from '../content';
import { useMusic } from '../components/MusicPlayer';

// Only Spotify embed links are rendered as players; anything else is shown as a link.
const isSpotifyEmbed = url => /^https:\/\/open\.spotify\.com\/embed\//.test(url || '');

export default function Music() {
  const { genres, artists, playlists, notes, tracks } = musicContent;
  const player = useMusic();
  const empty = !genres.length && !artists.length && !playlists.length && !notes.length && !tracks.length;
  return (
    <div className="page">
      <PageHero eyebrow="Music" title="The soundtrack" accent="behind the work.">
        <p>Music is part of my personal world — the quiet company behind long coding sessions and late-night writing.</p>
      </PageHero>
      <section className="section music-layout">
        <div className={`vinyl ${player?.playing ? 'is-playing' : ''}`} aria-hidden="true"><span /></div>
        <div>
          {empty && <EmptyState title="The record is warming up">Favourite artists, genres and playlists will appear here soon. Nothing plays automatically.</EmptyState>}
          {tracks.length > 0 && (
            <Reveal>
              <p className="eyebrow">On the record player</p>
              <ol className="track-list">
                {tracks.map((t, i) => {
                  const active = player.started && player.index === i;
                  const isPlaying = active && player.playing;
                  return (
                    <li key={t.src} className={active ? 'is-active' : ''}>
                      <button type="button" onClick={() => (active ? player.toggle() : player.playTrack(i))} aria-label={`${isPlaying ? 'Pause' : 'Play'} ${t.title}`}>
                        <span className="track-icon" aria-hidden="true">{isPlaying ? '❚❚' : '▶'}</span>
                        <span className="track-meta"><b>{t.title}</b>{t.artist && <span>{t.artist}</span>}</span>
                        {isPlaying && <span className="eq" aria-hidden="true"><i /><i /><i /></span>}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          )}
          {(genres.length > 0 || artists.length > 0) && (
            <Reveal>
              {genres.length > 0 && <><p className="eyebrow">Genres I return to</p><ul className="chips">{genres.map(g => <li key={g}>{g}</li>)}</ul></>}
              {artists.length > 0 && <><p className="eyebrow">Artists on repeat</p><ul className="chips">{artists.map(a => <li key={a}>{a}</li>)}</ul></>}
            </Reveal>
          )}
          {notes.map(n => <Reveal key={n}><p className="lead handwritten-quote">“{n}”</p></Reveal>)}
        </div>
      </section>
      {playlists.length > 0 && (
        <section className="section">
          <SectionHead eyebrow="Playlists" title="Press play when you’re ready." />
          <div className="card-grid">
            {playlists.map(p => (
              <Reveal key={p.title} className="card">
                <h3>{p.title}</h3>
                {p.description && <p>{p.description}</p>}
                {isSpotifyEmbed(p.embedUrl) && <iframe title={`${p.title} on Spotify`} src={p.embedUrl} width="100%" height="152" loading="lazy" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" />}
                <External className="text-link" href={p.url}>Open playlist <Arrow /></External>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
