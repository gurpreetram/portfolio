# Gurpreet Ram — Portfolio

A responsive editorial portfolio built with React, Vite, React Router, GSAP, ScrollTrigger and Framer Motion. It includes page transitions, scroll reveals, draggable capability chips, and a canvas portrait that assembles from sampled image particles and reacts gently to pointer movement.


## Requirements
- Node.js 18+ (Node 20 LTS recommended)
- npm


## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

## Routes
- `/` Home
- `/about` About and experience
- `/projects` Projects
- `/research` Research
- `/notes` Notes (also `/blog` legacy alias)
- `/resume` Resume summary and PDF download
- `/contact` Contact
- Unknown paths render a not-found page.

## Update content
- Portfolio text, contact details, project cards, experience, education and skills: `src/data/content.js`
- Layout and route navigation: `src/components/Layout.jsx` and `src/App.jsx`
- Particle portrait effect: `src/components/ParticlePortrait.jsx`
- Visual theme/responsive rules: `src/styles.css`
- Portrait asset: `public/images/gurpreet-portrait.jpg`
- Downloadable CV: `public/Gurpreet-Ram-Resume.pdf`

## Particle effect notes
The canvas reads a local portrait image, samples its pixels, and animates particles toward their image positions. Pointer movement temporarily repels nearby particles. The animation uses a capped device pixel ratio, canvas resizing, `requestAnimationFrame` cancellation, `ResizeObserver` cleanup, and a reduced-motion fallback. It is an image particle effect rather than a full WebGL simulation.


## QA status
Project files and routes were reviewed and ZIP integrity will be checked. A full `npm install` / Vite production build could not be completed in the generation environment because the install command timed out (network/package registry unavailable). Run the commands above on your machine and share any build error for a targeted fix.
