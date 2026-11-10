import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, Reveal, SectionHead, Tags, Arrow, ContactBanner } from '../components/ui';
import { profile, identities, experience, education, skills, skillCategories, certifications, achievements } from '../content';

const asset = name => `${process.env.PUBLIC_URL}/images/${name}`;

export function SkillGrid() {
  const [category, setCategory] = useState('All');
  const shown = skills.filter(s => category === 'All' || s.group === category);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter technologies">
        {skillCategories.map(c => <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}
      </div>
      <ul className="skill-grid" aria-live="polite">
        {shown.map(s => <li key={s.name} className="skill">{s.icon && <img src={s.icon} alt="" loading="lazy" />}<span>{s.label}</span></li>)}
      </ul>
    </>
  );
}

export function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map(e => (
        <Reveal as="li" key={`${e.companyName}-${e.startDate}`} className={e.isCurrent ? 'is-current' : ''}>
          <p className="timeline-date">{e.period}{e.isCurrent && <span className="badge">Now</span>}</p>
          <div className="timeline-body">
            <div className="company">{e.companyLogo && <img src={e.companyLogo} alt="" loading="lazy" />}<span>{e.companyName}</span></div>
            <h3>{e.designation}</h3>
            {e.details && <p>{e.details}</p>}
            <Tags items={e.skills} />
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function About() {
  return (
    <div className="page">
      <PageHero eyebrow="About me" title="Behind the code," accent="a curious human." image={asset('about-room.jpg')}>
        <p>{profile.position}. Writer. Music lover. Explorer.</p>
      </PageHero>

      <section className="section about-intro">
        <Reveal className="portrait">
          {profile.image && <img src={profile.image} alt={`Portrait of ${profile.shortName}`} />}
          <span className="handwritten">{profile.location}</span>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Nice to meet you</p>
          <h2>I’m {profile.shortName.split(' ')[0]}.</h2>
          {profile.bio.map(p => <p key={p} className="lead">{p}</p>)}
          <div className="row-actions">
            {profile.resume && <a className="btn btn-gold" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>}
            <Link className="text-link" to="/images">Milestones in frames <Arrow /></Link>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <SectionHead eyebrow="Four sides of me" title="What fills my days." />
        <div className="theme-list">
          {identities.map(t => <Reveal key={t.key}><Link to={t.path} className="theme-row"><h3>{t.title}</h3><p>{t.text}</p><Arrow /></Link></Reveal>)}
        </div>
      </section>

      <section className="section" id="journey">
        <SectionHead eyebrow="Professional journey" title="Always building. Always growing." />
        <Timeline items={experience} />
      </section>

      <section className="section">
        <SectionHead eyebrow="The toolkit" title="Skills & technologies." />
        <SkillGrid />
      </section>

      <section className="section">
        <SectionHead eyebrow="The foundations" title="Education." />
        <ul className="education-list">
          {education.map(e => (
            <Reveal as="li" key={e.degree}>
              <span className="timeline-date">{e.period}</span>
              <div><h3>{e.degree}</h3><p>{e.institution}</p></div>
              {e.imageURL && <img src={e.imageURL} alt="" loading="lazy" />}
            </Reveal>
          ))}
        </ul>
      </section>

      {achievements.length > 0 && (
        <section className="section">
          <SectionHead eyebrow="Milestones" title="Work worth celebrating." />
          <div className="card-grid">
            {achievements.map(a => <Reveal key={`${a.achievements}-${a.year}`} className="card"><p className="eyebrow gold">{a.year}</p><h3>{a.achievements}</h3><p>{a.org}</p></Reveal>)}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="section">
          <SectionHead eyebrow="Continuing the journey" title="Courses & certifications." />
          <div className="card-grid">
            {certifications.map(c => <Reveal key={c.title} className="card"><p className="eyebrow gold">{c.companyName}</p><h3>{c.title}</h3><Tags items={c.skill} /></Reveal>)}
          </div>
        </section>
      )}
      <ContactBanner />
    </div>
  );
}
