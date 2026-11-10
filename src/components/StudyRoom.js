import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../content';
import { useMusic } from './MusicPlayer';

const asset = name => `${process.env.PUBLIC_URL}/images/${name}`;

// Positions are percentages of the 1672×941 study-room image, so they stay
// aligned with the drawn objects at any viewport size.
export const deskObjects = [
  { key: 'laptop', label: 'Laptop', hint: 'Development & projects', to: '/projects', x: 40, y: 55.5 },
  { key: 'journal', label: 'Journal', hint: 'Poetry & stories', to: '/writing', x: 50, y: 60.6 },
  { key: 'camera', label: 'Camera', hint: 'Travel diaries', to: '/travel', x: 66.5, y: 57.6 },
  { key: 'record', label: 'Record player', hint: 'Play music', music: true, to: '/music', x: 81, y: 56.6 },
  { key: 'shelf', label: 'Bookshelf', hint: 'About me & experience', to: '/about', x: 15.5, y: 28 }
];
const LAMP = { x: 53.5, y: 48.5 };
const RECORD = deskObjects.find(o => o.key === 'record');

function readLamp() {
  try { return sessionStorage.getItem('study-lamp') === 'on'; } catch { return false; }
}

export default function StudyRoom() {
  const music = useMusic();
  // Without tracks in data.js the record player falls back to a link to the music page.
  const canPlay = o => o.music && music?.tracks.length > 0;
  const hintFor = o => (canPlay(o) ? (music.playing ? 'Pause music' : 'Play music') : o.hint);
  const [lit, setLit] = useState(readLamp);
  useEffect(() => { try { sessionStorage.setItem('study-lamp', lit ? 'on' : 'off'); } catch {} }, [lit]);

  return (
    <section className={`room ${lit ? 'is-lit' : ''}`} aria-label={`${profile.shortName}'s study room`}>
      <div className="room-stage">
        <img
          className="room-image"
          src={asset('study-room.jpg')}
          srcSet={`${asset('study-room-960.jpg')} 960w, ${asset('study-room.jpg')} 1672w`}
          sizes="(max-width: 760px) 230vw, max(100vw, 178svh)"
          width="1672" height="941"
          alt="A walnut study with a long desk, a desk lamp, laptop, open journal, camera and record player, in front of a wide window onto an autumn forest."
          fetchpriority="high"
        />
        <div className="room-glow" style={{ '--x': `${LAMP.x}%`, '--y': `${LAMP.y}%` }} aria-hidden="true" />
        <button
          className="lamp-switch"
          style={{ left: `${LAMP.x}%`, top: `${LAMP.y}%` }}
          onClick={() => setLit(!lit)}
          aria-pressed={lit}
          aria-label={lit ? 'Turn the desk lamp off' : 'Turn the desk lamp on'}
        >
          <span className="lamp-ring" aria-hidden="true" />
          <span className="lamp-hint" aria-hidden="true">{lit ? 'Lights off?' : 'Turn on the light'}</span>
        </button>
        {deskObjects.map(o => {
          const style = { left: `${o.x}%`, top: `${o.y}%` };
          const inner = <><span className="hotspot-dot" aria-hidden="true" /><span className="hotspot-tip" aria-hidden="true"><b>{o.label}</b>{hintFor(o)}</span></>;
          return canPlay(o)
            ? <button key={o.key} type="button" className={`hotspot hotspot-${o.key} ${music.playing ? 'is-playing' : ''}`} style={style} onClick={music.toggle} aria-pressed={music.playing} aria-label={`${o.label}: ${hintFor(o)}`}>{inner}</button>
            : <Link key={o.key} to={o.to} className={`hotspot hotspot-${o.key}`} style={style} aria-label={`${o.label}: ${o.hint}`}>{inner}</Link>;
        })}
        {music.playing && <span className="music-notes" style={{ left: `${RECORD.x}%`, top: `${RECORD.y}%` }} aria-hidden="true"><i>♪</i><i>♫</i><i>♪</i></span>}
      </div>

      <div className="room-intro">
        <p className="room-kicker">{profile.position}{profile.location ? ` · ${profile.location.split(',')[0]}` : ''}</p>
        <h1>{profile.shortName}</h1>
        <p className="room-tagline">{profile.tagline}</p>
        <div className="room-actions">
          <a className="btn btn-gold" href="#my-world">Explore my world</a>
          <Link className="btn btn-ghost" to="/projects">View my work</Link>
        </div>
      </div>

      <nav className="desk-objects" aria-label="Objects on the desk">
        <p>On the desk</p>
        <ul>{deskObjects.map(o => (
          <li key={o.key}>
            {canPlay(o)
              ? <button type="button" onClick={music.toggle} aria-pressed={music.playing} className={music.playing ? 'is-playing' : ''}><b>{o.label}</b><span>{hintFor(o)}</span></button>
              : <Link to={o.to}><b>{o.label}</b><span>{o.hint}</span></Link>}
          </li>
        ))}</ul>
      </nav>
    </section>
  );
}
