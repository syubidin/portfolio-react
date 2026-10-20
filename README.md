<div align="center">

```
███████████████████████████████████████████████
██                                           ██
██   S Y U B Y   A L W I   A K B A R         ██
██             A T T A L A                   ██
██                                           ██
██   BUILDING DIGITAL SOLUTIONS              ██
██   WITH PURPOSE.                           ██
██                                           ██
███████████████████████████████████████████████
```

**A portfolio built like a concrete tower. Scroll to climb it.**

![React](https://img.shields.io/badge/REACT-19-000000?style=for-the-badge)
![Vite](https://img.shields.io/badge/VITE-8-0b3a8f?style=for-the-badge)
![anime.js](https://img.shields.io/badge/ANIME.JS-4-000000?style=for-the-badge)
![Vercel](https://img.shields.io/badge/DEPLOY-VERCEL-0b3a8f?style=for-the-badge)

</div>

---

## The idea

No template, no card grid. Each section is a heavy slab, a meter on the side counts how high you have climbed, and the portrait rises out of a blue circle. Two moods, picked with the ◐ button: **concrete** (light) and **ink** (dark).

## Edit the content, not the code

Every word on the site lives in one file:

```
src/content.js          <- text, links, projects, jobs, skills
public/assets/face.png  <- your transparent portrait (portrait, ~800px wide)
public/assets/projects/ <- one screenshot per project
```

Save the file and the page updates instantly in dev mode.

**Add a project:** copy a block inside `projects`, change the fields, drop the screenshot into `public/assets/projects/`. An empty `demo` or `repo` shows a dashed "soon" button. Delete a block to remove the project.

## How it is built

```
src/
├─ content.js            all the words
├─ styles.css            the whole look: tokens, layout, dark mode
├─ App.jsx               page order
├─ lib/motion.js         anime.js helpers + scroll observer
└─ components/
   ├─ Hero  Rail  About  Work  Trail  Kit  Hello  Footer
   ├─ Section.jsx        title that types itself in on scroll
   ├─ Reveal.jsx         fade/slide a block in, pop its children
   └─ Split.jsx          words > letters, ready to animate
```

## Motion (anime.js)

| Where | What |
| --- | --- |
| Hero | One timeline: circle grows, slab slides in, headline lands letter by letter, sticker drops, marquee rises |
| Section titles | Letters rise in one after another when the title enters the screen |
| Blocks | Fade and slide up once, only the first time they are seen |
| Skill chips | Pop in with a short stagger |
| Portrait and screenshots | Portrait is revealed upwards inside its circle; screenshots lift on hover |

Everything runs once, on `transform` and `opacity` only, and is skipped completely when the visitor has `prefers-reduced-motion` on.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the production build locally
```

## Deploy on Vercel

**Option A: dashboard (recommended)**

1. Push this repo to GitHub.
2. Open [vercel.com/new](https://vercel.com/new) and import the repo.
3. Keep the defaults (Vercel detects Vite: build `npm run build`, output `dist`) and press **Deploy**.

Every `git push` to `main` redeploys automatically.

**Option B: CLI**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Weight

| File | Size | Gzipped |
| --- | --- | --- |
| JavaScript (React + anime.js + the site) | 268 kB | 88 kB |
| CSS | 8.8 kB | 3 kB |
| Fonts | Montserrat 500/800/900 only | |

Need it lighter? Preact is API-compatible: swap `@vitejs/plugin-react` for `@preact/preset-vite` and the bundle drops to roughly a third.

---

<div align="center">

**Built by [Syuby Alwi Akbar Attala](https://github.com/syubidin)**
*One slab at a time.*

</div>
