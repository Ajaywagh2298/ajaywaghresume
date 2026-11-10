import React from 'react';
import { Link } from 'react-router-dom';
import StudyRoom from '../components/StudyRoom';
import { Reveal, SectionHead, Tags, Arrow, ContactBanner } from '../components/ui';
import { identities, projects, experience, profile } from '../content';

const icons = { developer: '⌘', writer: '¶', music: '♫', explorer: '✈' };

export default function Home() {
  const current = experience[0];
  const featured = projects[0];
  return (
    <>
      <StudyRoom />
      <section id="my-world" className="section">
        <SectionHead eyebrow="One person, four rooms" title="Welcome to my world." />
        <div className="identity-grid">
          {identities.map((t, i) => (
            <Reveal key={t.key} style={{ '--delay': `${i * 80}ms` }}>
              <Link className="identity" to={t.path}>
                <span className="identity-icon" aria-hidden="true">{icons[t.key] || '✦'}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="identity-link">Step inside <Arrow /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {current && (
        <section className="section">
          <SectionHead eyebrow="Where I am now" title={`${profile.experienceYears ? `${profile.experienceYears} years` : 'Years'} of building software.`}>
            <Link className="text-link" to="/about#journey">The full journey <Arrow /></Link>
          </SectionHead>
          <Reveal className="now-card">
            {current.companyLogo && <img src={current.companyLogo} alt="" />}
            <div>
              <p className="eyebrow">{current.period}</p>
              <h3>{current.designation}</h3>
              <p>{current.companyName}</p>
              <Tags items={current.skills} />
            </div>
          </Reveal>
        </section>
      )}

      {featured && (
        <section className="section">
          <SectionHead eyebrow="From the laptop" title="Featured work.">
            <Link className="text-link" to="/projects">All projects <Arrow /></Link>
          </SectionHead>
          <Reveal>
            <Link className="feature-card" to={`/projects/${featured.slug}`}>
              <div className="feature-art" aria-hidden="true"><span>{featured.name.charAt(0)}</span></div>
              <div className="feature-body">
                <p className="eyebrow">{featured.period}</p>
                <h3>{featured.name}</h3>
                <p>{featured.summary}</p>
                <Tags items={featured.techStack} />
                <span className="identity-link">Read the case study <Arrow /></span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}
      <ContactBanner />
    </>
  );
}
