import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { userData, experienceData, skillsData, resumeList, imagesList, achievementsData } from '../data';

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; } });
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme); } catch {} }, [theme]);
  return <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Change color theme">{theme === 'dark' ? '☼' : '☾'}</button>;
}
const roles = ['Full Stack Developer', 'Node.js Engineer', 'API & Database Builder', 'Cloud Explorer'];
function TypedRole() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = roles[index];
    if (!deleting && length === word.length) { const t = setTimeout(() => setDeleting(true), 1800); return () => clearTimeout(t); }
    if (deleting && length === 0) { setDeleting(false); setIndex(i => (i + 1) % roles.length); return; }
    const t = setTimeout(() => setLength(l => l + (deleting ? -1 : 1)), deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [index, length, deleting]);
  return <p className="typed-role"><span className="sr-only">{roles.join(', ')}</span><span aria-hidden="true">&gt; {roles[index].slice(0, length)}<span className="terminal-cursor">▌</span></span></p>;
}
export function Hero() {
  const [flipped, setFlipped] = useState(false);
  return <section className="portfolio-hero">
    <div className="hero-kicker"><span><i /> SOFTWARE ENGINEER & CREATIVE BUILDER</span><span>PUNE, INDIA / IST</span></div>
    <div className="hero-grid"><div className="hero-intro"><p className="hello">Hey there, I’m</p><h1>Ajay Wagh<span aria-hidden="true">.</span></h1><TypedRole /><h2>I connect the dots.<br />From <em>interface</em> to infrastructure.</h2><p className="hero-description">A full stack developer turning complex problems into thoughtful, reliable web experiences. Built with curiosity. Finished with care.</p><div className="hero-actions"><Link className="button dark" to="/projects">Explore my work <span>↗</span></Link><a className="button outline" href={resumeList[0].link} download>Download résumé <span>↓</span></a></div><div className="hero-socials"><a href={userData.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={userData.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`mailto:${userData.email}`}>Email ↗</a></div></div>
    <div className="identity-scene"><div className="identity-orbit" aria-hidden="true"/><span className="floating-tag tag-react">✳ React</span><span className="floating-tag tag-node">&lt;/&gt; Node.js</span><button className={`identity-card ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(!flipped)} aria-pressed={flipped} aria-label={flipped ? 'Show portrait' : 'Flip card for contact links'}><div className="identity-face identity-front"><div className="identity-top"><span>THE PERSON BEHIND THE PIXELS</span><span>TAP TO FLIP ↻</span></div><div className="identity-portrait"><img src={userData.image} alt="Ajay Wagh" /><span className="portrait-code">01 / THE BUILDER</span></div><div className="identity-caption"><div><strong>Ajay R. Wagh</strong><span>Full Stack Developer</span></div><span className="identity-spark">✳</span></div></div><div className="identity-face identity-back" aria-hidden={!flipped}><span className="eyebrow">FIND ME ONLINE</span><strong>Ajay R. Wagh</strong><span>MCA · Vishwakarma Institute of Technology</span><span>{userData.location}</span><span className="identity-back-hint">TAP TO FLIP BACK ↻</span></div></button>{flipped && <div className="identity-links"><a href={`mailto:${userData.email}`}>Email ↗</a><a href={userData.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={userData.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={userData.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>}<div className="terminal-note"><span className="terminal-dot"/><code><span>const</span> mindset = <b>"keep building"</b>;</code><span className="terminal-cursor">▌</span></div></div></div>
    <div className="hero-bottom"><a href="#selected-work">SCROLL TO DISCOVER <span>↓</span></a><span>THOUGHTFUL CODE. MEANINGFUL EXPERIENCES.</span></div>
  </section>;
}
const skillGroups = { All: null, Frontend: ['React JS','React Native','HTML','CSS','JavaScript','Boostrap','Ploymer JS'], Backend: ['Node JS','PHP','Python','GrapghQL','Sequelize','C','C++'], 'Data & cloud': ['MySQL','Postgres SQL','AWS'] };
const skillNames = { GrapghQL: 'GraphQL', Boostrap: 'Bootstrap', 'Ploymer JS': 'Polymer', 'Postgres SQL': 'PostgreSQL', 'Node JS': 'Node.js', 'React JS': 'React' };
export function Toolkit() {
  const [category,setCategory] = useState('All');
  const items=skillsData.filter(Boolean).filter(s=>!skillGroups[category] || skillGroups[category].includes(s.name));
  return <section className="section toolkit-section"><div className="section-heading"><div><span className="eyebrow">03 / THE TOOLKIT</span><h2>Tools of the trade<span className="accent">.</span></h2></div><p>The right tools. The right reasons.</p></div><div className="filter-bar" role="group" aria-label="Filter technologies">{Object.keys(skillGroups).map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="toolkit-grid" aria-live="polite">{items.map(s=><div className="toolkit-item" key={s.name}><img src={s.icon} alt=""/><span>{skillNames[s.name]||s.name}</span><span className="toolkit-arrow">↗</span></div>)}</div></section>;
}
export function JourneyPreview() { return <section className="section"><div className="section-heading"><div><span className="eyebrow">02 / EXPERIENCE</span><h2>Built along the way<span className="accent">.</span></h2></div><Link className="text-link" to="/exp">The full journey ↗</Link></div><div className="career-preview">{experienceData.map((e,i)=><Link to="/exp" className="career-item" key={e.companyName}><span className="career-index">0{i+1}</span><img src={e.companyLogo} alt=""/><div><h3>{e.designation}</h3><p>{e.companyName}</p></div><span className="career-period">{e.startDate.slice(0,4)} — {e.endDate ? e.endDate.slice(0,4) : 'Present'}</span><span>↗</span></Link>)}</div></section>; }
export function PersonalBento() {
  const [lit,setLit]=useState(false);
  const [time,setTime]=useState('');
  useEffect(()=>{const update=()=>setTime(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'}).format(new Date()));update();const timer=setInterval(update,60000);return()=>clearInterval(timer);},[]);
  return <section className="section"><div className="section-heading"><div><span className="eyebrow">04 / BEYOND THE CODE</span><h2>A little more human<span className="accent">.</span></h2></div><Link className="text-link" to="/resume">Get to know me ↗</Link></div><div className="personal-bento"><article className="bento-story"><span className="eyebrow">CURIOUS BY DEFAULT</span><h3>Good software starts<br />with good questions.</h3><p>I enjoy connecting the pieces: interfaces, APIs, databases, and the people using them. My work spans enterprise software and cloud-based applications.</p><Link to="/resume">My background & education <span>↗</span></Link></article><article className="bento-location"><div className="location-orbits" aria-hidden="true"><i/><i/><i/><b>✳</b></div><span className="eyebrow">MY CORNER OF THE WORLD</span><h3>Pune, India</h3><p><span className="signal-dot" />{time} IST <span>UTC +05:30</span></p></article><article className={`bento-studio ${lit?'is-lit':''}`}><img src={`${process.env.PUBLIC_URL}/images/office-studio.webp`} alt="A creative workspace with a wooden desk and plants"/><div className="bento-studio-content"><span className="eyebrow">A SPACE FOR IDEAS</span><h3>{lit?'Lights on. Ideas flowing.':'Every idea starts with a spark.'}</h3><button className="studio-switch" onClick={()=>setLit(!lit)} aria-pressed={lit} aria-label={lit?'Turn desk lamp off':'Turn desk lamp on'}><span>☼</span> Studio light <span className="switch-track"><i/></span></button></div></article></div></section>;
}
export function FAQ() { return <section className="section faq-section"><div><span className="eyebrow">A FEW GOOD QUESTIONS</span><h2>Before we<br /><em>say hello.</em></h2></div><div className="faq-list">{[['What kind of work do you do?','I work across the full stack: web interfaces, Node.js services, relational databases, and cloud integrations. My professional experience includes enterprise platforms and API-centric systems.'],['What technologies do you work with?','My toolkit includes JavaScript, React, Node.js, MySQL, GraphQL, Sequelize, and AWS. Explore the toolkit above for the full collection.'],['Where can I see your work and résumé?','The Work page links to my Nirbhaya project repository, and the About page includes my experience, education, certifications, and downloadable résumé.'],['How can we get in touch?','Email ajaywagh2298@gmail.com or use the Contact page to prepare an email. You can also find my GitHub and LinkedIn links throughout the site.']].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>; }
export function GalleryViewer() {
  const dialogRef=useRef(null);const [selected,setSelected]=useState(0);const opener=useRef(null);
  function open(i,e){opener.current=e.currentTarget;setSelected(i);dialogRef.current.showModal();}
  function close(){dialogRef.current.close();opener.current?.focus();}
  function step(direction){setSelected(i=>(i+direction+imagesList.length)%imagesList.length);}
  return <><div className="gallery">{imagesList.map((im,i)=><button key={im.url} onClick={e=>open(i,e)} aria-label={`Open gallery item ${i+1}`}><img src={im.url} alt={`From my collection, item ${i+1}`} loading="lazy"/><span>View image <span>↗</span></span></button>)}</div><dialog ref={dialogRef} className="gallery-dialog" onCancel={()=>opener.current?.focus()} onClick={e=>{if(e.target===dialogRef.current)close();}} onKeyDown={e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1);}} aria-label="Gallery image viewer"><div className="viewer-toolbar"><span>{selected+1} / {imagesList.length}</span><button onClick={close} aria-label="Close image viewer">Close ×</button></div><img src={imagesList[selected].url} alt={`From my collection, item ${selected+1}`}/><div className="viewer-navigation"><button onClick={()=>step(-1)} aria-label="Previous image">← Previous</button><a href={imagesList[selected].url} target="_blank" rel="noreferrer">Open original ↗</a><button onClick={()=>step(1)} aria-label="Next image">Next →</button></div></dialog></>;
}

const months = (from, to) => { const a = new Date(from), b = to ? new Date(to) : new Date(); return (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth(); };
export function Stats() {
  const first = experienceData.reduce((min, e) => e.startDate < min ? e.startDate : min, experienceData[0].startDate);
  const years = Math.floor(months(first) / 12);
  const items = [[`${years}+`, 'Years building software'], [experienceData.length, 'Companies'], [achievementsData.length, 'Awards & recognitions'], [skillsData.filter(Boolean).length, 'Technologies used']];
  return <section className="stats-strip" aria-label="At a glance">{items.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>;
}
const workflow = [['Understand', 'Ask questions until the real problem is clear.'], ['Plan', 'Design data models, APIs and the shape of the interface.'], ['Build', 'Write modular, readable code in small steps.'], ['Review', 'Test edge cases and refine with feedback.'], ['Ship', 'Deploy, monitor and keep improving.']];
export function Workflow() {
  return <section className="section"><div className="section-heading"><div><span className="eyebrow">HOW I WORK</span><h2>From idea to release<span className="accent">.</span></h2></div><p>A simple loop, repeated with care.</p></div><ol className="workflow">{workflow.map(([step, text], i) => <li key={step}><span className="eyebrow">0{i + 1}</span><h3>{step}</h3><p>{text}</p></li>)}</ol></section>;
}
