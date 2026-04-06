# Portfolio Hero Page — Design Spec
**Date:** 2026-04-06  
**Status:** Approved

---

## Context

Hari Girish needs a static portfolio website to support internship applications in AI/ML and SWE. The immediate goal is to build the hero page first. The site will eventually include Projects, Experience, About, and Contact sections — but this spec covers only the hero page.

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Components:** shadcn/ui (`/components/ui`)
- **Animation:** `motion` (Framer Motion v11+) via 21stdev `TimelineContent` + `ProgressiveBlur`
- **Deployment target:** Vercel (static export)

---

## Layout — Split Hero (Option A)

### Navigation (sticky, top)
- Left: name mark `Hari Girish` (semibold, links to `/`)
- Right: text links — `Projects`, `Resume`, `Contact`
- Background: transparent → `backdrop-blur` + `bg-white/80` on scroll
- Full-width, `max-w-5xl mx-auto`, `px-6`

### Hero Section (full viewport height, `min-h-screen`)
Two-column grid on desktop (`md:grid-cols-2`), stacked on mobile (photo below text).

**Left column (~55%)**  
Staggered reveal using `TimelineContent` animation sequence:

| Order | Element | Description |
|-------|---------|-------------|
| 1 | Badge pill | `Undergraduate AI Researcher @ OSU Cancer Center` — indigo bg (`#4f46e5`), white text, `rounded-full` |
| 2 | Headline `h1` | `Hi, I'm ` plain + `Hari Girish` in indigo gradient (`from-indigo-500 to-blue-500`), `text-5xl font-bold` |
| 3 | Subheadline `p` | `CS&E student at Ohio State building AI systems — from biomedical imaging pipelines to agentic full-stack apps.` — `text-lg text-gray-600` |
| 4 | CTA row | Primary button: `View My Work` (indigo bg, white text) + GitHub icon link + LinkedIn icon link (both `text-gray-500 hover:text-indigo-500`) |

**Right column (~45%)**  
- Profile photo (`public/profile.jpg`) in a `rounded-2xl overflow-hidden` container
- Decorative element: a soft indigo square (`bg-indigo-100`, `rounded-xl`, `rotate-6`, `absolute`, `-z-10`) sitting behind the photo to add color accent
- Photo animates in as item 5 in the `TimelineContent` sequence (fade + slight upward translate)

---

## Visual Design

| Token | Value |
|-------|-------|
| Background | `#fafafa` |
| Primary text | `#111827` (gray-900) |
| Secondary text | `#4b5563` (gray-600) |
| Accent / primary | `#4f46e5` (indigo-600) |
| Gradient | `from-indigo-500 to-blue-500` |
| Font | Inter (Tailwind default) |
| Border radius (photo) | `rounded-2xl` |

---

## 21stdev Component Usage

From `21stdev/Hero.md`:
- `TimelineContent` — wraps each animated element, accepts `animationNum` prop for stagger order
- `ProgressiveBlur` — optional; can be used at the bottom of the photo for a subtle edge fade
- A single `useRef<HTMLDivElement>` (`timelineRef`) is passed to all `TimelineContent` children

Dependencies to install:
```bash
npm install next motion
npx shadcn@latest init
```

Component files to create:
- `components/ui/progressive-blur.tsx` — source provided in Hero.md
- `components/ui/timeline-animation.tsx` — **source not in Hero.md; must be fetched from 21st.dev** (search "timeline animation" at 21st.dev or implement as a simple scroll-triggered wrapper using `motion` if unavailable)
- `components/ui/hero-section.tsx` — main hero component
- `app/page.tsx` — renders `<HeroSection />`

---

## Content

```
Nav:        Hari Girish          Projects  Resume  Contact

Badge:      Undergraduate AI Researcher @ OSU Cancer Center

H1:         Hi, I'm Hari Girish.

Sub:        CS&E student at Ohio State building AI systems —
            from biomedical imaging pipelines to agentic full-stack apps.

CTAs:       [View My Work]   [GitHub ↗]   [LinkedIn ↗]

Photo:      public/profile.jpg (provided — navy suit, stone archway)
```

---

## Responsive Behavior

- **Desktop (md+):** Two-column grid, photo on right
- **Mobile:** Single column — text block on top, photo below, centered
- Photo on mobile: `max-w-xs mx-auto`

---

## Verification

1. `npm run dev` — page renders at `localhost:3000` with no console errors
2. All 5 `TimelineContent` elements animate in sequence on page load
3. Nav is sticky; links are present (anchor hrefs can be `#` placeholders)
4. Photo displays correctly, decorative indigo square visible behind it
5. Responsive: at mobile width photo stacks below text
6. Lighthouse accessibility score ≥ 90 (alt text on photo, semantic heading order)
