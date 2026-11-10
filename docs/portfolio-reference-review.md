# Portfolio reference review and redesign

Reviewed 10 November 2026. Findings come from rendered desktop pages and their visible content. This is a design and content review, not a source-code, security, performance, or backend audit. Several animation-heavy pages needed a second load before rendering; that is an observation about this review environment, not a measured performance score.

## 1. Achint Verma

Source: https://achint.vercel.app/

**Presentation:** A dark, restrained grid, a handwritten name, a developer-terminal motif, a minimal header, and an expanded navigation menu. The opening feels personal and exploratory rather than corporate.

**Structure and interaction:** Numbered sections connect biography, selected projects, education, categorized tools, and contact. The project interface offers a selectable directory and advertises arrow-key and swipe navigation. The tools section separates frontend, backend, and other tools. Personal details add character beyond a skill inventory.

**What works:** Consistent section numbering and specific project descriptions give a long page a clear route. The terminal reinforces the developer identity.

**Tradeoff:** Intro choreography and ornamental text should never delay access to work or contact information.

**Applied here:** Numbered editorial sections, a small code motif, technology filters, and human context. Ajay's actual biography and projects remain the source of truth.

## 2. Ajay Pawar

Source: https://ajay-pawar.vercel.app/

**Presentation:** An editorial, engineering-focused site with large serif typography, a fine grid, small technical labels, light/dark controls, and a prominent systems panel.

**Content:** Projects are framed through their engineering challenge, solution, architecture, and reported impact. A directory selects detailed project entries. Skills, career history, testimonials, and contact extend the narrative.

**What works:** Explaining a problem and implementation gives recruiters substantially more evidence than a screenshot and a list of technologies. Navigation and résumé access are explicit.

**Tradeoff:** Dense terminology and many sections demand careful scanning. Reported performance figures belong to that author; they cannot become claims on Ajay Wagh's site.

**Applied here:** An expandable project breakdown, clear dates and companies, and direct résumé/source-code links. No borrowed metrics, endorsements, customers, or production claims.

## 3. Aditya A

Source: https://aditya-a-portfolio.vercel.app/

**Presentation:** A spacious black opening with sparse star-like details, centered typography, and a restrained colored emphasis. It transitions into biography and technical work.

**Structure:** The page groups tools into languages/frontend, backend/databases, cloud/DevOps, and utilities. Career content precedes a project directory with descriptions and live/code destinations. A project view-mode control is exposed in the interface.

**What works:** Grouping technologies makes breadth understandable. Project summaries explain what each application does instead of relying entirely on visual spectacle.

**Tradeoff:** Large introductory space should not hide useful content. Alternate visual modes need a usable default and a reduced-motion path.

**Applied here:** Organized technology filters, a direct first-screen introduction, concise project context, and responsive layouts. The new site does not claim to reproduce Aditya's alternate project renderer.

## 4. Abhijit Mondal

Source: https://abhijitmondal.info/

**Presentation:** The observed home screen uses an oversized black name on white, an uppercase developer role, abundant empty space, and a compact floating navigation dock near the bottom. Biography, projects, achievements, and contact are distinct navigation destinations.

**What works:** Identity is immediate. The name is the visual anchor, and the short navigation makes the available sections obvious.

**Tradeoff:** A dock must remain discoverable and reachable on small screens, and very large type must reflow without horizontal overflow. A quotation can supply personality, but should not displace evidence of the developer's work.

**Applied here:** Ajay's name and role are visible immediately, with a restrained navigation bar, explicit Gallery access, and responsive display typography. The portfolio uses Ajay's own introduction rather than the reference's quotation.

## 5. Ayush Raj

Source: https://www.ayushcmd.me/

**Presentation:** A dark technical grid, colored name treatment, portrait card, floating technology labels, compact social controls, and a theme switch make the opening feel interactive and personal.

**Structure:** Featured projects lead into a modular about section, location, education, work, contact, and FAQ. The portrait advertises a flip interaction. A gallery is linked near the footer.

**What works:** Personal identity, project evidence, and small interactions reinforce each other. Modular cards make different kinds of information easy to scan.

**Tradeoff:** Many effects and modes can compete for attention. Academic figures, availability, response promises, and AI features need their own verified data and implementation.

**Applied here:** Ajay's portrait card, restrained floating skill labels, location/time card, persistent theme toggle, FAQ, and an accessible gallery viewer. No copied academic statistics or simulated chat assistant.

## Resulting direction

The references are different sites, so the implementation combines their useful patterns rather than copying all five layouts. The resulting design uses charcoal surfaces, soft white text, a controlled lime accent, consistent borders, and generous spacing. Light mode uses the same layout with light surfaces and darker accent contrast.

The hierarchy is: identity → selected work → professional experience → categorized technologies → personal context → practical questions → contact. Detail pages retain the existing routes for work, experience, about/résumé, gallery, and contact.

The earlier office idea remains in the personal section as a studio-light interaction. It no longer obscures the main introduction. The name is visible immediately; visitors do not have to discover a hidden switch to learn whose portfolio this is.

## Functional decisions

- Theme choice persists locally and remains consistent across navigation.
- Technology filters expose their selected state to assistive technology.
- The project breakdown is a native keyboard-operable disclosure.
- Gallery images open in a native modal dialog, support previous/next controls and arrow keys, close with Escape, and restore focus to the opening button.
- Reduced-motion settings suppress decorative movement.
- Contact opens a prepared email and explains that sending happens in the visitor's email client.
- Existing résumé, social, repository, education, experience, and gallery data are preserved. Missing education images are omitted rather than rendered as broken assets.

## Scope boundaries

The source data contains one public project. The design gives that project a substantive presentation instead of inventing extra client work. The supplied profile image and gallery assets are retained. No external messages were sent, and no contact submission or private account feature on the reference sites was exercised. Deployment is not part of this local redesign.
