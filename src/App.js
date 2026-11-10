import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { userData, projectsData, experienceData, skillsData, educationData, certificationsData, achievementsData, resumeList } from './data';
import './App.css';
import { Hero, ThemeToggle, Toolkit, JourneyPreview, PersonalBento, FAQ, GalleryViewer, Stats, Workflow } from './components/PortfolioSections';
import { GlobalPerspective } from './components/Globes';
const Study = lazy(() => import('./pages/Study'));
const Arrow = () => <span aria-hidden="true">↗</span>;
const External = ({
  href,
  children,
  ...props
}) => <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
function RouteEffects() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${{
      '/': 'Portfolio',
      '/projects': 'Selected work',
      '/exp': 'Experience',
      '/resume': 'About & résumé',
      '/contact': 'Contact',
      '/images': 'Milestones in frames',
      '/study': 'Study'
    }[pathname] || 'Portfolio'} — Ajay Wagh`;
  }, [pathname]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  const {
    pathname
  } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="header"><Link className="brand" to="/" aria-label="Ajay Wagh home">aw<span>.</span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open ? 'Close −' : 'Menu +'}</button><ThemeToggle /><nav id="navigation" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{[['/', 'Home'], ['/projects', 'Work'], ['/exp', 'Experience'], ['/resume', 'About'], ['/images', 'Gallery']].map(([to, label]) => <NavLink key={to} to={to} end>{label}</NavLink>)}<NavLink to="/contact" className="nav-contact">Let’s talk <Arrow /></NavLink></nav></header>;
}
function Skills({
  full = false
}) {
  return <div className={full ? 'skill-grid' : 'skill-strip'}>{skillsData.filter(Boolean).slice(0, full ? undefined : 8).map(s => <div className="skill" key={s.name}><img src={s.icon} alt="" /><span>{{
          GrapghQL: 'GraphQL',
          Boostrap: 'Bootstrap',
          'Ploymer JS': 'Polymer JS'
        }[s.name] || s.name}</span></div>)}</div>;
}
function ProjectFeature() {
  const p = projectsData[0];
  return <article className="project-feature"><div className="project-art" aria-label="Concept illustration for the Nirbhaya safety project"><div className="map-grid" /><span className="art-caption">SAFETY, CONNECTED.</span><div className="map-ring ring-one" /><div className="map-ring ring-two" /><div className="map-pin">⌖</div><div className="safety-note"><span className="signal-dot" /> A little closer. A little safer.</div><span className="art-index">01 / NIRBHAYA</span></div><div className="project-info"><span className="eyebrow">FEATURED PROJECT · {p.startDate} — {p.endDate}</span><h3>{p.name}<span>↗</span></h3><p>{p.details.join(' ')}</p><div className="tags">{p.techStack.map(s => <span key={s}>{s}</span>)}</div><details className="project-disclosure"><summary>Inside the project <span>+</span></summary><div><h4>The problem</h4><p>Commuters need a way to raise safety alerts that security agencies can track and manage.</p><h4>The approach</h4><p>A PHP and MySQL application using Bootstrap for the interface, Ajax for requests, and the Google Maps API for location context.</p><h4>Project scope</h4><p>A commuter-safety application developed between August 2019 and April 2020. The repository is available below.</p></div></details><External className="text-link" href={p.githubLink}>Explore the code <Arrow /></External></div></article>;
}
function Home() {
 return <><Hero /><Stats /><div className="company-strip"><span>EXPERIENCE ACROSS</span>{experienceData.map(e=><span key={e.companyName}>{e.companyName.replace(' Technologies Pvt Ltd','').replace(' Technologies pvt ltd','').replace(' Technology Pvt Ltd','')}</span>)}</div><section id="selected-work" className="section"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Made to make a difference<span className="accent">.</span></h2></div><Link className="text-link" to="/projects">Explore the project <Arrow /></Link></div><ProjectFeature /></section><JourneyPreview /><Workflow /><GlobalPerspective /><Toolkit /><PersonalBento /><FAQ /><ContactBanner /></>;
}
function PageIntro({
  number,
  title,
  italic,
  description
}) {
  return <div className="page-intro"><span className="eyebrow">{number} / AJAY WAGH</span><h1>{title}<br /><em>{italic}</em></h1><p>{description}</p></div>;
}
function Work() {
  return <div className="page"><PageIntro number="01" title="Ideas into" italic="real experiences." description="A closer look at the things I build, the problems they solve, and the technology behind them." /><ProjectFeature /><div className="work-end"><span>MORE FROM MY WORKBENCH</span><External href={userData.github}>Explore my GitHub <Arrow /></External></div><ContactBanner /></div>;
}
const date = value => new Date(`${value}T12:00:00`).toLocaleDateString('en-US', {
  month: 'short',
  year: 'numeric'
});
function Experience() {
  return <div className="page"><PageIntro number="02" title="Always building." italic="Always growing." description="My journey through software engineering, from cloud-powered applications to enterprise systems." /><div className="timeline">{experienceData.map((e, i) => <article className="experience-row" key={e.companyName}><div className="experience-date"><span className="eyebrow">0{i + 1}</span><p>{date(e.startDate)} — {e.endDate ? date(e.endDate) : 'Present'}</p></div><div><div className="company"><img src={e.companyLogo} alt="" /><span>{e.companyName}</span></div><h2>{e.designation}</h2><p>{e.details}</p><div className="tags">{e.skill.split(',').map(s => <span key={s}>{s.trim()}</span>)}</div></div></article>)}</div><section className="section"><span className="eyebrow">MILESTONES ALONG THE WAY</span><h2>Work worth celebrating.</h2><div className="milestones">{achievementsData.map((a, i) => <div key={i}><span>{a.year}</span><h3>{a.achievements}</h3><p>{a.org}</p></div>)}</div></section><ContactBanner /></div>;
}
function About() {
  return <div className="page"><PageIntro number="03" title="Behind the code," italic="a curious human." description="Full stack developer. Problem solver. Lifelong learner." /><section className="about-detail"><div className="portrait-wrap"><img src={userData.image} alt="Portrait of Ajay Wagh" /><span className="portrait-label">AJAY RAJENDRA WAGH · PUNE, INDIA</span></div><div><span className="eyebrow">NICE TO MEET YOU</span><h2>I’m Ajay<span className="accent">.</span></h2><p>I’m a software engineer working across the full stack, with experience in Node.js, databases, cloud infrastructure, and web interfaces.</p><p>I care about software that is useful, maintainable, and a pleasure to use. My work has taken me through enterprise platforms at Eazy ERP and Recibo, and cloud-based applications at Konfhub.</p><a className="button dark" href={resumeList[0].link} download>Download résumé <span>↓</span></a><Link className="text-link inline-link" to="/images">Milestones in frames <Arrow /></Link></div></section><section className="section"><span className="eyebrow">MY TOOLKIT</span><h2>The tools behind the craft.</h2><Skills full /></section><section className="section"><span className="eyebrow">THE FOUNDATIONS</span><h2>Learning never stops.</h2>{educationData.map(e => <article className="education" key={e.degree}><span>{e.period}</span><div><h3>{e.degree}</h3><p>{e.institution}</p></div>{e.imageURL && <img src={e.imageURL} alt="" />}</article>)}</section><section className="section"><span className="eyebrow">CONTINUING THE JOURNEY</span><h2>Courses & certifications.</h2><div className="certificates">{certificationsData.map(c => <article key={c.title}><span>{c.companyName}</span><h3>{c.title}</h3><div className="tags">{c.skill.map(s => <span key={s}>{s}</span>)}</div></article>)}</div></section><ContactBanner /></div>;
}
function ContactBanner() {
  return <section className="contact-banner"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make it <em>happen.</em></h2></div><Link className="round-link" to="/contact" aria-label="Contact Ajay"><Arrow /></Link></section>;
}
function Contact() {
  const [ready, setReady] = useState(false);
  function submit(e) {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    window.location.href = `mailto:${userData.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${values.get('name')}`)}&body=${encodeURIComponent(`${values.get('message')}\n\nFrom: ${values.get('name')}\nEmail: ${values.get('email')}`)}`;
    setReady(true);
  }
  return <div className="page"><PageIntro number="04" title="Great things start" italic="with a conversation." description="Have a project, an opportunity, or just a good idea? I’d love to hear from you." /><div className="contact-layout"><div className="contact-details"><div className="mini-profile"><img src={userData.image} alt="Ajay Wagh" /><div><h3>Ajay Wagh</h3><span>Full Stack Developer</span></div></div><span className="eyebrow">DROP ME A LINE</span><a className="email-link" href={`mailto:${userData.email}`}>{userData.email} <Arrow /></a><p>{userData.location}</p><div className="social-links"><External href={userData.github}>GitHub <Arrow /></External><External href={userData.linkedin}>LinkedIn <Arrow /></External><External href={userData.instagram}>Instagram <Arrow /></External></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input name="name" required autoComplete="name" placeholder="What should I call you?" /></label><label>Email address<input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label><label>What’s on your mind?<textarea name="message" required rows="5" placeholder="Tell me a little about your idea…" /></label><button className="button dark" type="submit">Let’s connect <Arrow /></button><p className="form-note" role="status">{ready ? 'Your email draft is ready in your email app. Send it there to get in touch, or use the email link alongside.' : 'This opens your email app with your message ready to send.'}</p></form></div></div>;
}
function Gallery() {
  return <div className="page"><PageIntro number="05" title="Along the journey." italic="Milestones in frames." description="Certificates, achievements, and moments from my journey." /><GalleryViewer /></div>;
}
function Footer() {
  return <footer className="footer"><Link className="brand" to="/">aw<span>.</span></Link><span>Thoughtfully built, from Pune.</span><div><External href={userData.github}>GitHub <Arrow /></External><External href={userData.linkedin}>LinkedIn <Arrow /></External><span>© {new Date().getFullYear()} Ajay Wagh</span></div></footer>;
}
function App() {
  return <BrowserRouter><RouteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<Work />} /><Route path="/exp" element={<Experience />} /><Route path="/resume" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/images" element={<Gallery />} /><Route path="/admin" element={<Contact />} /><Route path="/study" element={<div className="page legacy-study"><Suspense fallback={<p>Opening study workspace…</p>}><Study /></Suspense></div>} /><Route path="*" element={<div className="page"><PageIntro number="404" title="A little off the path." italic="Let’s head home." /><Link className="button dark" to="/">Back to the studio <Arrow /></Link></div>} /></Routes></main><Footer /></BrowserRouter>;
}
export default App;
