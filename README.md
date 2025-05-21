# HapSTR Landing

> AI-driven AR real-estate companion — public landing page

![CI Status](https://img.shields.io/github/actions/workflow/status/your-org/hapstr-web/ci.yml?branch=main) ![License](https://img.shields.io/npm/l/hapstr-web)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Prerequisites](#prerequisites)  
5. [Installation & Dev](#installation--dev)  
6. [Scripts](#scripts)  
7. [Project Structure](#project-structure)  
8. [CI / CD](#ci--cd)  
9. [Contributing](#contributing)  
10. [License](#license)

---

## 🏗️ Project Overview

HapSTR is a **static** landing page for a SaaS startup offering an AR-powered real-estate experience.  
Built with Next.js (App Router), TypeScript, and Tailwind CSS, it exports to pure HTML/CSS/JS for super-fast hosting.

---

## ✨ Features

- **Static export** (`next export`) for zero-maintenance hosting  
- **Next.js 15+** with App Router & built-in TypeScript  
- **Tailwind CSS** (v3) + custom theming (`brand` color, Inter font)  
- **GSAP ScrollTrigger** animations for an interactive timeline  
- **Heroicons** (SVG) for lightweight, crisp icons  
- **Strict linting & formatting** (ESLint + Prettier) in CI  

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS v3  
- **Animations:** GSAP + ScrollTrigger  
- **Icons:** @heroicons/react  
- **Lint & Format:** ESLint, Prettier  
- **CI:** GitHub Actions  

---

## 🔧 Prerequisites

- **Node.js** ≥ 18.x  
- **npm** ≥ 9.x (or Yarn/Pnpm)

---

## 🚀 Installation & Dev

```bash
# 1. Clone the repo
git clone git@github.com:your-org/hapstr-web.git
cd hapstr-web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

Open http://localhost:3000 in your browser.

📦 Scripts
Command	Description
npm run dev	Start Next.js dev server (hot reload)
npm run build	Build & export static site into /out
npm run start	Serve production build (next start)
npm run lint	Run ESLint (errors on warnings)
npm run format	Run Prettier to reformat code

🗂️ Project Structure

hapstr-web/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
├── eslint.config.js
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── components/
        ├── Nav.tsx
        ├── Hero.tsx
        ├── FeatureCards.tsx
        ├── Timeline.tsx
        ├── VideoEmbed.tsx
        ├── Pricing.tsx
        └── Contact.tsx
app/globals.css — global Tailwind imports & base styles

app/layout.tsx — root HTML structure + Nav + footer

app/page.tsx — landing-page composition

components/… — reusable UI blocks

🤖 CI / CD
We use GitHub Actions to:

Checkout code

Install dependencies

Run npm run lint

Run npm run build

Deploy the contents of /out to Vercel, Netlify, or any static-site host.

🤝 Contributing
Fork the repo

Create a feature branch


git checkout -b feat/your-feature
Commit your changes

git commit -m "feat: add new component"
Push and open a Pull Request

git push origin feat/your-feature
Please follow our code style guidelines and run npm run lint / npm run format before submitting.

