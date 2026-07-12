# Novekto

Marketing website for Novekto - a full-stack performance marketing company.
Built with React + Vite + Tailwind CSS + react-router-dom + Framer Motion.

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # outputs static site to /dist
npm run preview    # preview the production build locally
```

## Deploy (Vercel)
Import this repo in Vercel. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
`vercel.json` handles SPA routing so /privacy and /terms resolve correctly.

## Edit content
Copy and stats live in `src/data/site.js`. Colors and fonts are tokens in `tailwind.config.js`.
The contact form has a `BACKEND HOOK` comment in `src/components/Contact.jsx` for a Formspree endpoint.
