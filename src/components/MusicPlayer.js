import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { musicContent } from '../content';

const MusicContext = createContext(null);
export const useMusic = () => useContext(MusicContext);

// One <audio> element for the whole site, so music keeps playing between pages.
// Nothing plays until a visitor presses play, and files load only at that point.
export function MusicProvider({ children }) {
  const { tracks } = musicContent;
  const audio = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState('');

  const play = useCallback(async () => {
    const el = audio.current;
    if (!el) return;
    setStarted(true);
    setError('');
    try { await el.play(); } catch { setPlaying(false); setError('This track could not be played.'); }
  }, []);

  const pause = useCallback(() => audio.current?.pause(), []);
  const toggle = useCallback(() => (audio.current && !audio.current.paused ? pause() : play()), [play, pause]);
  // Same index → the effect below would not fire, so play directly.
  const playTrack = useCallback(i => { if (i === index) play(); else setIndex(i); }, [index, play]);
  const step = useCallback(d => {
    if (tracks.length < 2) { if (audio.current) audio.current.currentTime = 0; play(); return; }
    setIndex(i => (i + d + tracks.length) % tracks.length);
  }, [tracks.length, play]);
  const close = useCallback(() => { pause(); setStarted(false); }, [pause]);

  // When the track changes after playback has started, play the new one.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    play();
  }, [index, play]);

  const value = useMemo(() => ({ tracks, index, current: tracks[index], playing, started, error, toggle, play, pause, playTrack, step, close }),
    [tracks, index, playing, started, error, toggle, play, pause, playTrack, step, close]);

  return (
    <MusicContext.Provider value={value}>
      {children}
      {tracks.length > 0 && (
        <audio ref={audio} src={tracks[index].src} preload="none"
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
          onEnded={() => step(1)} onError={() => { if (started) setError('This track could not be loaded.'); }} />
      )}
      <MiniPlayer />
    </MusicContext.Provider>
  );
}

function MiniPlayer() {
  const { current, playing, started, error, toggle, step, close, tracks } = useMusic();
  if (!started || !current) return null;
  return (
    <div className={`mini-player ${playing ? 'is-playing' : ''}`} role="region" aria-label="Music player">
      <span className="mini-disc" aria-hidden="true" />
      <div className="mini-meta">
        <strong>{current.title}</strong>
        <span>{error || current.artist || (playing ? 'Now playing' : 'Paused')}</span>
      </div>
      <div className="mini-controls">
        {tracks.length > 1 && <button type="button" onClick={() => step(-1)} aria-label="Previous track">⏮</button>}
        <button type="button" className="mini-play" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>{playing ? '❚❚' : '▶'}</button>
        {tracks.length > 1 && <button type="button" onClick={() => step(1)} aria-label="Next track">⏭</button>}
        <button type="button" onClick={close} aria-label="Stop and close the music player">×</button>
      </div>
    </div>
  );
}
