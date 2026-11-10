# Managing portfolio content

All content lives in `src/data.js`. Pages read it through `src/content.js`, which adds safe defaults, so a missing optional field never breaks a page. You never need to edit a component to add content.

## Run the site

```bash
npm install
npm start        # http://localhost:3000
npm test         # interaction tests
npm run build    # production build in /build
```

## Adding entries

### A project
Add an object to `projectsData`. Only `name`, `details` and `techStack` are required.

```js
import shopShot from './pages/data/projects/shop.png';

{
  name: "Shop Dashboard",
  startDate: "Jan 2025", endDate: "Mar 2025",
  details: ["One-paragraph summary of what it does."],
  techStack: ["React", "Node JS", "MySQL"],
  githubLink: "https://github.com/…",
  // optional
  category: "Web application",
  image: shopShot,                 // screenshot shown on the card and detail page
  liveLink: "https://…",           // adds a "Live demo" button
  problem: "What problem it solves.",
  approach: "How you built it.",
  highlights: ["Technical highlight", "Another one"]
}
```
The detail page URL is created from the name (`/projects/shop-dashboard`). A technology filter appears once projects use more than one technology.

### A poem or story
Add to `poetry` or `stories`. Separate stanzas or paragraphs with a blank line. Poems keep their line breaks.

```js
{
  title: "Monsoon Evenings",
  date: "2026-07-14",
  excerpt: "A line or two shown in the library.",
  body: `First line of the stanza
second line

Next stanza…`,
  tags: ["Nature"],
  featured: true,                   // optional: shown at the top of the journal
  link: "https://english.pratilipi.com/…"  // optional: where it was first published
}
```
Reading time is calculated automatically. Until there is at least one entry, the journal links to your Pratilipi profile (`siteSettings.writingProfile`).

### A travel entry
```js
import goa1 from './pages/data/travel/goa-1.jpg';

{ place: "Goa", country: "India", date: "2025-12-20", story: "A short memory.", images: [goa1], highlights: ["Beaches", "Old churches"] }
```

### Music
```js
const music = {
  genres: ["Indie", "Sufi"],
  artists: ["Artist name"],
  playlists: [{ title: "Coding focus", description: "…", url: "https://open.spotify.com/playlist/…", embedUrl: "https://open.spotify.com/embed/playlist/…" }],
  notes: ["A sentence about what music means to you."]
};
```
A player only appears for Spotify embed links (Spotify → Share → Embed playlist → copy the `src` URL). Nothing plays automatically.

### Social links
Add `{ name, url, icon }` to `socialLinks`. Links without a `url` are hidden. Contact, footer and empty states read from this list.

## Images
- Put content images in `src/pages/data/…` and import them, as the existing entries do.
- Keep photos under ~400 KB (JPEG or WebP, about 1600px wide).
- The two room backgrounds are optimised copies in `public/images/` (`study-room*.jpg`, `about-room*.jpg`). If you replace a source PNG, export new copies at 1672px and 960px wide.

## Moving the room hotspots
If the home image changes, update the `x`/`y` percentages in `deskObjects` and `LAMP` in `src/components/StudyRoom.js`. They are percentages of the image's width and height (for example, the laptop is at 40% across and 55.5% down).

## Testing checklist
- [ ] Home: the room fades in dimmed with "Turn on the light"; clicking the lamp (or Tab + Enter) brightens the room and shows the name, tagline and both buttons; clicking again turns it off.
- [ ] Each gold hotspot sits on its object at 1280px, 1440px and 1920px widths, and opens the right page.
- [ ] Phone (≈390px): the room is cropped around the lamp, the "On the desk" list works, and nothing scrolls sideways.
- [ ] Keyboard: every link, hotspot and button shows a gold focus ring.
- [ ] Reduced motion (OS setting): no animations, and all content is still visible.
- [ ] Light and dark themes are both readable; the choice persists across pages.
- [ ] Contact: an empty submit shows field errors; a valid submit opens your mail app.
- [ ] `npm test` and `npm run build` both succeed.
