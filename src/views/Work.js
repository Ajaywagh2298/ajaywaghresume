import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero, Reveal, SectionHead, Tags, Arrow, External, EmptyState, ContactBanner } from '../components/ui';
import { Timeline } from './About';
import { projects, experience, socialUrl } from '../content';

function ProjectCard({ project }) {
  return (
    <Reveal as="li">
      <Link className="project-card" to={`/projects/${project.slug}`}>
        <div className="project-thumb">
          {project.image ? <img src={project.image} alt="" loading="lazy" /> : <span aria-hidden="true">{project.name.charAt(0)}</span>}
        </div>
        <div className="project-body">
          <p className="eyebrow">{[project.category, project.period].filter(Boolean).join(' · ')}</p>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <Tags items={project.techStack} />
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  const [tech, setTech] = useState('All');
  const allTech = ['All', ...new Set(projects.flatMap(p => p.techStack))];
  const shown = projects.filter(p => tech === 'All' || p.techStack.includes(tech));
  const github = socialUrl('GitHub');
  return (
    <div className="page">
      <PageHero eyebrow="Development & projects" title="Ideas into" accent="real experiences.">
        <p>A closer look at the things I build, the problems they solve, and the technology behind them.</p>
      </PageHero>
      <section className="section">
        <SectionHead eyebrow="Projects" title="Selected work.">
          <External className="text-link" href={github}>More on GitHub <Arrow /></External>
        </SectionHead>
        {allTech.length > 2 && (
          <div className="filters" role="group" aria-label="Filter projects by technology">
            {allTech.map(t => <button key={t} type="button" aria-pressed={tech === t} onClick={() => setTech(t)}>{t}</button>)}
          </div>
        )}
        {shown.length ? <ul className="project-grid">{shown.map(p => <ProjectCard key={p.slug} project={p} />)}</ul>
          : <EmptyState title="No projects yet">New work will appear here soon.</EmptyState>}
      </section>
      <section className="section">
        <SectionHead eyebrow="Experience" title="Where I’ve built them." />
        <Timeline items={experience} />
      </section>
      <ContactBanner />
    </div>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    return <div className="page"><PageHero eyebrow="404" title="Project not found." /><section className="section"><Link className="btn btn-gold" to="/projects">Back to all projects</Link></section></div>;
  }
  const blocks = [['The problem', project.problem], ['The approach', project.approach]].filter(([, text]) => text);
  return (
    <div className="page">
      <PageHero eyebrow={[project.category, project.period].filter(Boolean).join(' · ') || 'Project'} title={project.name}>
        <p>{project.summary}</p>
      </PageHero>
      <section className="section project-detail">
        {project.image && <img className="project-shot" src={project.image} alt={`Screenshot of ${project.name}`} />}
        <div className="detail-grid">
          <div>
            {blocks.map(([title, text]) => <Reveal key={title}><h2 className="h3">{title}</h2><p className="lead">{text}</p></Reveal>)}
            {project.highlights.length > 0 && <Reveal><h2 className="h3">Technical highlights</h2><ul className="ticks">{project.highlights.map(h => <li key={h}>{h}</li>)}</ul></Reveal>}
          </div>
          <aside className="detail-aside">
            <p className="eyebrow">Built with</p>
            <Tags items={project.techStack} />
            <div className="stack-actions">
              <External className="btn btn-gold" href={project.githubLink}>View the code <Arrow /></External>
              <External className="btn btn-ghost" href={project.liveLink}>Live demo <Arrow /></External>
            </div>
          </aside>
        </div>
        <Link className="text-link" to="/projects">← All projects</Link>
      </section>
    </div>
  );
}
