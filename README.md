# Mahbuba Sultana — Developer Portfolio

A personal portfolio site for **Mahbuba Sultana**, Web Developer having expertise in Frontend with React & Next.js. And working knowledge of backend APIs, databases, and full-stack development.

**Live site:** [https://mahbuba-sultana.vercel.app/](https://mahbuba-sultana.vercel.app/) 

---

## About

This portfolio moves away from the typical "hero → about → skills → projects" template. Instead, the site is framed around a personal narrative — starting from how a chance moment with a Shiuli flower photo led into a self-taught path in web development — paired with a clean, dark, detail-driven visual style.

Sections include:

- **Hero** — introduction, core tech stack preview, resume download, social links
- **The Journey Into Code** — a four-part personal origin story
- **Work Showcase** — featured projects in an interactive slider, each linking to a full case-study/detail page
- **Philosophy & Mindset** — how the developer approaches UI craft and attention to detail
- **Technical Stack & Skill Architecture** — categorized skills (Frontend / Backend / Tools), with proficiency detail for core categories
- **Education & Learning Milestones** — academic background, technical coursework, and language certifications, grouped by category
- **Contact** — direct email, phone, and WhatsApp contact options

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** — utility-first styling, custom theme tokens
- **Motion** (Framer Motion / `motion`) — scroll-reveal and interaction animations throughout
- **Swiper.js** — the featured projects slider
- **React Router** — client-side routing for individual project detail pages
- **Lucide React** — icon set

## Project Structure

```
my-portfolio/
├─ public/
│  ├─ resume.pdf              # downloadable resume
│  └─ (project & flower images)
├─ src/
│  ├─ app/
│  │  └─ router.jsx           # route definitions (/ and /projects/:slug)
│  ├─ components/             # section & UI components
│  ├─ data/                   # profile, skills, education, and project content
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  └─ ProjectDetailPage.jsx
│  ├─ index.css               # Tailwind import + theme tokens
│  └─ main.jsx                # app entry point
├─ package.json
└─ vite.config.js
```

## Getting Started

**Prerequisites:** Node.js installed.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Deployment

Deployed on **Vercel**. To deploy your own copy:

```bash
vercel --prod
```

Or connect the repository directly through the Vercel dashboard for automatic deployments on push.

## Content

Site content (name, bio, skills, education, and project details) lives in `src/data/` as plain JS objects/arrays — update those files to change site content without touching component code.

## Featured Projects

| Project | Stack | Live | Repo |
|---|---|---|---|
| **Rooted** | Next.js, Tailwind CSS, TanStack Query, Better Auth, Express.js, MongoDB | [Live](https://rooted-client.vercel.app/) | [GitHub](https://github.com/MahbubaSultanaEty/rooted-client) |
| **SkillSwap** | Next.js, Tailwind CSS, MongoDB, Express.js, Stripe, JWT | [Live](https://skill-swap-by-mahbuba.vercel.app/) | [GitHub](https://github.com/MahbubaSultanaEty/skill-swap-client) |
| **VolunTree** | Next.js, TypeScript, Tailwind CSS, HeroUI, Express.js, MongoDB | [Live](https://voluntree-built-with-hope.vercel.app/) | [GitHub](https://github.com/MahbubaSultanaEty/voluntree-client) |
| **NexDrive** | Next.js, Tailwind CSS, HeroUI, Express.js, MongoDB, JWT | [Live](https://nex-drive-phi.vercel.app) | [GitHub](https://github.com/MahbubaSultanaEty/nexdrive-client) |

## Contact

- **Email:** sultanamahbuba09@gmail.com
- **GitHub:** [github.com/MahbubaSultanaEty](https://github.com/MahbubaSultanaEty)
- **LinkedIn:** [linkedin.com/in/mahbuba-sultana09](https://www.linkedin.com/in/mahbuba-sultana09/)

---

© 2026 Mahbuba Sultana. All rights reserved.