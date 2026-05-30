# Gowshick Raja — Portfolio

A premium, cinematic developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions + Framer Motion ready
- **Deployment**: Vercel

---

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets

Place these files in `/public`:

| File | Description |
|------|-------------|
| `portrait.jpg` | Your main photo (hero bg) |
| `portrait-bw.jpg` | B&W or second photo (about section) |
| `favicon.ico` | Your logo as favicon |
| `Gowshick_Raja_Resume.pdf` | Resume download |
| `og-image.jpg` | OpenGraph image (1200×630px) |

### 3. Run development server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Deployment to Vercel

### Option A — CLI (recommended)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. Your site will be live in ~60 seconds.

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Click Deploy

Vercel auto-detects Next.js. No environment variables needed.

---

## Customization Guide

### Update personal info
All content is in component files under `components/sections/`:
- `Hero.tsx` — name, tagline, CTA text
- `About.tsx` — bio, stats
- `Experience.tsx` — work history array
- `Projects.tsx` — projects array
- `Skills.tsx` — skill groups
- `Certifications.tsx` — certifications array
- `Contact.tsx` — social links

### Update colors
In `app/globals.css`, change the accent color from `#c8b89a` to any color you prefer.

### Update fonts
In `app/globals.css`, change the Google Fonts import URL and update the CSS variables:
```css
--font-display: 'Your Display Font';
--font-body: 'Your Body Font';
```

### Add your real GitHub/LinkedIn/Behance URLs
In `components/sections/Contact.tsx`, update the `href` fields in the `socials` array.

---

## Project Structure

```
gowshick-portfolio/
├── app/
│   ├── globals.css        ← All base styles, animations, cursor
│   ├── layout.tsx         ← Root layout + SEO metadata
│   ├── page.tsx           ← Main page composition
│   ├── sitemap.ts         ← Auto-generated sitemap
│   └── robots.ts          ← SEO robots
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Cursor.tsx         ← Custom cursor
│       ├── Loader.tsx         ← Loading screen
│       ├── Navbar.tsx         ← Sticky navbar + mobile menu
│       └── ScrollProgress.tsx ← Top scroll bar
├── lib/
│   └── useReveal.ts           ← Scroll animation hook
├── public/                    ← Add your assets here
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── README.md
```

---

## Performance Notes

- All images use Next.js `<Image>` with lazy loading
- Fonts loaded from Google with `display=swap`
- CSS transitions preferred over JS animations
- Minimal JS bundle — no heavy animation libraries required
- Lighthouse score target: 90+

---

Built with precision by Gowshick Raja.
