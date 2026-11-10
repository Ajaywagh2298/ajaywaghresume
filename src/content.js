// Reads data.js and adds safe defaults, so components never hardcode content
// and missing optional fields never crash a page.
import * as data from './data';

const userData = data.userData || {};
const siteSettings = data.siteSettings || {};
const music = data.music || {};
const { experienceData, educationData, skillsData, certificationsData, projectsData, resumeList, achievementsData, imagesList, socialLinks, identityThemes, poetry, stories, travel } = { ...data };

const list = value => (Array.isArray(value) ? value.filter(Boolean) : []);

export const slugify = text => String(text || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const isPresent = value => !value || String(value).toLowerCase() === 'present';

export function formatMonth(value) {
  if (isPresent(value)) return 'Present';
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export const readingTime = text => Math.max(1, Math.round(String(text || '').split(/\s+/).filter(Boolean).length / 200));

export const socials = list(socialLinks).filter(s => s.url);
export const socialUrl = name => socials.find(s => s.name.toLowerCase() === name.toLowerCase())?.url;

export const profile = {
  name: userData.name || 'Ajay Wagh',
  shortName: (userData.name || 'Ajay Wagh').split(' ').filter((_, i, all) => i === 0 || i === all.length - 1).join(' '),
  position: userData.position || 'Full Stack Developer',
  location: userData.location || '',
  email: userData.email || '',
  image: userData.image,
  tagline: siteSettings.tagline || '',
  experienceYears: siteSettings.experienceYears || '',
  bio: list(siteSettings.bio),
  resume: list(resumeList)[0]?.link,
  writingProfile: socialUrl(siteSettings.writingProfile || '')
};

export const experience = list(experienceData)
  .map(e => ({ ...e, isCurrent: isPresent(e.endDate), period: `${formatMonth(e.startDate)} — ${formatMonth(e.endDate)}`, skills: String(e.skill || '').split(',').map(s => s.trim()).filter(Boolean) }))
  .sort((a, b) => String(b.startDate).localeCompare(String(a.startDate)));

export const education = list(educationData);
export const certifications = list(certificationsData).map(c => ({ ...c, skill: list(c.skill) }));
export const achievements = list(achievementsData);
export const gallery = list(imagesList).filter(i => i.url);

const skillNames = { GrapghQL: 'GraphQL', Boostrap: 'Bootstrap', 'Ploymer JS': 'Polymer', 'Postgres SQL': 'PostgreSQL', 'Node JS': 'Node.js', 'React JS': 'React' };
const skillGroups = {
  Frontend: ['React JS', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Boostrap', 'Ploymer JS'],
  Backend: ['Node JS', 'PHP', 'Python', 'GrapghQL', 'Sequelize', 'C', 'C++', '.Net'],
  'Data & cloud': ['MySQL', 'Postgres SQL', 'AWS'],
  'AI': ['Ollama', 'LLM / SLM Model']
};
export const skills = list(skillsData).map(s => ({ ...s, label: skillNames[s.name] || s.name, group: Object.keys(skillGroups).find(g => skillGroups[g].includes(s.name)) || 'Other' }));
export const skillCategories = ['All', ...Object.keys(skillGroups).filter(g => skills.some(s => s.group === g)), ...(skills.some(s => s.group === 'Other') ? ['Other'] : [])];

export const projects = list(projectsData).map(p => ({
  ...p,
  slug: p.slug || slugify(p.name),
  summary: list(p.details).join(' '),
  techStack: list(p.techStack),
  highlights: list(p.highlights),
  period: [p.startDate, p.endDate].filter(Boolean).join(' — ')
}));

const entries = (items, kind) => list(items).map(w => ({ ...w, kind, slug: w.slug || slugify(w.title), tags: list(w.tags), minutes: readingTime(w.body || w.excerpt) }));
export const writing = [...entries(poetry, 'Poem'), ...entries(stories, 'Story')].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

export const travelEntries = list(travel).map(t => ({ ...t, slug: t.slug || slugify(`${t.place} ${t.date || ''}`), images: list(t.images), highlights: list(t.highlights) }));

export const musicContent = {
  genres: list(music.genres), artists: list(music.artists), playlists: list(music.playlists), notes: list(music.notes),
  tracks: list(music.tracks).filter(t => t.src).map((t, i) => ({ ...t, title: t.title || `Track ${i + 1}`, artist: t.artist || '' }))
};

export const identities = list(identityThemes);
