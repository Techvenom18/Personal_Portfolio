# Sumit Kumar — Portfolio Website

A 3D, interactive developer portfolio built with **React**, **TypeScript**, **Three.js**, and **GSAP**, showcasing my skills, experience, projects, and achievements.

> Live: https://personal-portfolio-steel-seven-14.vercel.app

---

## Demo

<!-- PASTE_VIDEO_LINK_HERE -->

---

## About

I'm a B.Tech Data Science student and full-stack developer, working across machine learning and modern web development. This site showcases my projects, technical skills, and experience — including an interactive 3D hero section and a physics-driven interface.

---

## Tech Stack

- **React** + **TypeScript**
- **Three.js** / **React Three Fiber** (3D/WebGL)
- **GSAP** + **Lenis** (animations, smooth scroll)
- **Vite**

---

## Getting Started

### 1) Clone

```bash
git clone https://github.com/Techvenom18/Personal-Portfolio.git
cd Personal-Portfolio
```

### 2) Install

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

### 4) Build

```bash
npm run build
```

---

## Acknowledgment

This project was built on top of an open-source 3D portfolio template ([red1-for-hek/portfolio-website](https://github.com/red1-for-hek/portfolio-website)), which provided the initial React Three Fiber / GSAP architecture (3D physics hero, character animation, scroll-triggered reveals). From that base, I made the following changes:

**Content**
- Replaced all placeholder content (name, bio, career objective, skills, experience, projects, contact links) with my own, sourced from my resume
- Rebuilt the tech stack section to only list verified skills, removing unrelated technologies from the original template and adding my actual stack (languages, frontend, DevOps tools, data analysis libraries)
- Added a third project and removed the original 5-project display cap so the work section scales with any number of projects
- Rewrote project descriptions to be concise and accurate to actual outcomes (e.g. bounce-rate reduction) rather than generic copy

**Bug fixes**
- Fixed the career/experience timeline animation not running at all on tablet/mobile — it was only triggered as a side effect of the 3D character model loading, which never renders below 1024px; decoupled it into its own independent effect
- Fixed the loading screen being skipped entirely on tablet/mobile — the original logic hardcoded `isLoading = false` below 768px with no real progress mechanism; reused the existing desktop progress-bar logic instead of bypassing it
- Fixed a responsive dead-zone (769px–1024px) where neither the 3D character nor the mobile fallback photo rendered, leaving blank space
- Fixed inconsistent project thumbnail sizing/cropping/alignment across cards (different aspect ratios were rendering at different sizes; standardized with a fixed-size container, `object-fit: cover`, and bottom-alignment regardless of text height above each image)
- Fixed several broken image paths (absolute local file paths, stray whitespace in path strings) preventing images from loading
- Fixed hover-expand cards (skills section) clipping their content on desktop due to insufficient container height at certain breakpoints

**Features added**
- Interactive social icon overlay on the contact section for tablet/mobile, alongside the existing text links
- "Live Project" / "View Code" badges on each project card, with an inactive/disabled state for projects not yet deployed
- A profile picture preview on hover over the nav logo, and a full-screen click-to-expand circular photo view with a blurred backdrop
- Direct Gmail compose links instead of relying on the visitor's default mail client

**Design changes**
- Removed the alternating zig-zag project card layout in favor of a consistent read order for a horizontally-scrolling section
- Removed unused features from the original template (AI chatbot, playable chess engine) to keep the site focused and fast-loading

---

## Connect

- LinkedIn: https://www.linkedin.com/in/sumit-rathore-680b03377/
- GitHub: https://github.com/Techvenom18
- Email: sumitrathore45528@gmail.com

---

## License

This project is open source and available under the **MIT License**. See [LICENSE](LICENSE).