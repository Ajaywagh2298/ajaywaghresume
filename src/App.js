import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import { PageHero, External } from './components/ui';
import { MusicProvider } from './components/MusicPlayer';
import { profile, socials } from './content';

const About = lazy(() => import('./views/About'));
const Work = lazy(() => import('./views/Work'));
const ProjectDetail = lazy(() => import('./views/Work').then(m => ({ default: m.ProjectDetail })));
const Writing = lazy(() => import('./views/Writing'));
const Reader = lazy(() => import('./views/Writing').then(m => ({ default: m.Reader })));
const Travel = lazy(() => import('./views/Travel'));
const Music = lazy(() => import('./views/Music'));
const Contact = lazy(() => import('./views/Contact'));
const Gallery = lazy(() => import('./views/Gallery'));
const Study = lazy(() => import('./pages/Study'));

const navigation = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Work'], ['/writing', 'Writing'], ['/travel', 'Travel'], ['/music', 'Music']];

const pageMeta = {
  '/': ['Portfolio', `${profile.shortName} — ${profile.position}. ${profile.tagline}`],
  '/about': ['About', `About ${profile.shortName}: developer, writer, music lover and explorer.`],
  '/projects': ['Work', `Projects and experience by ${profile.shortName}.`],
  '/writing': ['Poetry & stories', `Poetry and stories by ${profile.shortName}.`],
  '/travel': ['Travel diaries', `Travel diaries by ${profile.shortName}.`],
  '/music': ['Music', `The music behind ${profile.shortName}'s work.`],
  '/contact': ['Contact', `Get in touch with ${profile.shortName}.`],
  '/images': ['Gallery', `Milestones and certificates of ${profile.shortName}.`]
};

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || pageMeta['/' + pathname.split('/')[1]] || pageMeta['/'];
    document.title = `${title} — ${profile.shortName}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    if (hash) {
      // Wait a frame so lazily loaded pages can render the target first.
      const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 120);
      return () => clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; } });
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme); } catch {} }, [theme]);
  const next = theme === 'dark' ? 'light' : 'dark';
  return <button type="button" className="theme-toggle" onClick={() => setTheme(next)} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>{theme === 'dark' ? '☼' : '☾'}</button>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={`site-header ${pathname === '/' ? 'is-overlay' : ''}`}>
      <Link className="brand" to="/" aria-label={`${profile.shortName}, home`}>{profile.shortName}<span aria-hidden="true">.</span></Link>
      <ThemeToggle />
      <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">{open ? 'Close' : 'Menu'}</button>
      <nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        <NavLink to="/contact" className="nav-cta">Let’s talk</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/">{profile.shortName}<span aria-hidden="true">.</span></Link>
        <p className="handwritten">{profile.tagline}</p>
      </div>
      <ul>{socials.map(s => <li key={s.name}><External href={s.url}>{s.name}</External></li>)}<li><Link to="/images">Gallery</Link></li></ul>
      <p className="footer-copy">© {new Date().getFullYear()} {profile.shortName}</p>
    </footer>
  );
}

const Loading = () => <div className="page-loading" role="status">Opening the next room…</div>;

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
      <RouteEffects />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Work />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<Reader />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/images" element={<Gallery />} />
            <Route path="/resume" element={<Navigate to="/about" replace />} />
            <Route path="/exp" element={<Navigate to="/about#journey" replace />} />
            <Route path="/admin" element={<Navigate to="/contact" replace />} />
            <Route path="/study" element={<div className="page legacy-study"><Study /></div>} />
            <Route path="*" element={<div className="page"><PageHero eyebrow="404" title="A little off the path." accent="Let’s head home." /><section className="section"><Link className="btn btn-gold" to="/">Back to the study</Link></section></div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
