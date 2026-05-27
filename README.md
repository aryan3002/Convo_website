<div align="center">

# Convo

### Bookings that feel like texting.

**The AI-powered front desk for modern salons** — chat-first, voice-first, dashboard-aware.
This repo is the marketing site at [convoaiservices.com](https://www.convoaiservices.com).

[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-EF008F?logo=framer)](https://www.framer.com/motion/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-optimized-success)]()

</div>

---

## What is Convo?

Most local service businesses still answer the phone to take bookings. The result: missed calls, no-shows, double-bookings, and a front-desk job nobody wants. Convo replaces it.

A customer texts. A customer calls. A customer DMs WhatsApp. A customer searches in ChatGPT. They all get the same thing — an AI that **books the appointment, confirms it, and slots it into the calendar without anyone touching a keyboard**.

Convo runs across **two verticals**:
- 💇 **Salons / Barbershops** — appointment booking by service + stylist + slot
- 🚖 **Cab Owners** — ride booking with dynamic pricing, driver management, multi-channel dispatch

The owner gets a dashboard showing every conversation, every booked slot, every recommended next action.

> *Convo isn't a chatbot. It's a front desk that happens to be made of language models.*

**👉 [See the actual product repo for the full engineering breakdown](https://github.com/aryan3002/Convo)** — FastAPI + PostgreSQL 16 + pgvector + Twilio + 36 Python modules across two verticals.

---

## Why Convo Is Different — The Intelligence Loop

Most "AI receptionist" tools are reactive — they answer the question they're asked. Convo's wedge is the loop:

```
        ┌───────────────────────────────────────────────┐
        │                                               │
        ▼                                               │
   ┌─────────┐       ┌─────────────┐       ┌─────────────────┐
   │ CAPTURE │  ───► │ COORDINATE  │  ───► │    RECOMMEND    │
   └─────────┘       └─────────────┘       └─────────────────┘
   Every call,        Staff schedule,       What to upsell,
   text, DM, walk-in  service catalog,      when to follow up,
   is logged          availability sync     who's at risk of churn
        ▲                                               │
        │                                               │
        └───────────────────────────────────────────────┘
                  Feeds the next decision
```

The front desk doesn't just *handle* the moment — it learns from it and tells the owner what to do next.

---

## The Five Channels

Same booking. Same tenant. Same calendar state. Five entry points.

| Channel | What it does | Where it shines |
|---|---|---|
| 💬 **Web Chat** | Conversational booking via the website widget | First-touch from marketing visitors |
| 📞 **Voice Agent** | Twilio voice IVR with sub-second latency, deterministic state machine, post-call GPT summary | After-hours, busy chair, missed calls |
| 📱 **WhatsApp** | Native WhatsApp Business booking via Twilio | International markets, the texting-by-default crowd |
| 🤖 **ChatGPT Plugin** | OpenAPI-defined booking exposed as GPT function-calling tools + RouterGPT discovery layer | Customers searching for businesses inside ChatGPT |
| 📊 **Owner Dashboard** | Live call summaries, calendar view, service catalog, RAG-powered semantic call history, AI-recommended actions | The owner who used to run the front desk in their head |

---

## What's in This Repo

This is the **marketing site** — a high-converting, design-forward Next.js application built to sell the product. *Not* the AI product itself (that lives separately).

### 13 Pages

| Route | Purpose |
|---|---|
| `/` | Landing — hero, product modes, how-it-works, social proof, pricing teaser, final CTA |
| `/product` | Deep dive into Chat, Voice, Dashboard. Architecture diagram. Coming-soon roadmap. |
| `/demo` | **Interactive** chat + voice transcript mocks with animated conversation, dashboard tabs |
| `/differentiators` | Strategic positioning — the Intelligence Loop story, competitor comparison matrix |
| `/pricing` | 3-tier pricing (Starter / Pro / Enterprise), monthly–annual toggle, add-ons, comparison table |
| `/onboarding` | Self-serve onboarding flow walkthrough |
| `/faq` | Streamlined FAQ accordion |
| `/contact` | Contact form with interest selection, mailto fallback |
| `/ai-receptionist-for-salons` | SEO landing page targeting high-intent search |
| `/ai-salon-appointment-booking` | SEO landing page targeting transactional intent |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `sitemap.ts` | Programmatic XML sitemap for search engines |

---

## Design System

A **cyberpunk-inspired neon aesthetic** layered over glassmorphism — built for an AI product positioned as the futuristic alternative to legacy salon booking systems.

### Neon Palette

```
████████  Neon Blue       #00d4ff   ◄── primary CTA, focus rings
████████  Neon Purple     #a855f7   ◄── accents, highlights
████████  Neon Pink       #ec4899   ◄── secondary callouts
████████  Mint            #34d399   ◄── success states
```

### Surface Treatment
- **Glassmorphism** — frosted glass cards with backdrop blur
- **Gradient borders** — neon edge lighting on hover
- **Animated blobs** — floating ambient background motion
- **Subtle noise texture** — film-grain overlay to escape the "Figma look"
- **Neon glow shadows** — on every primary interactive element

### Motion
- Hero copy stagger-in on load
- Stagger-children animation system for grids (`AnimatedSection`, `StaggeredContainer`, `StaggeredItem`)
- `HoverLift` micro-interactions on every card
- Smooth scroll progress, page transitions

### Themes
Dark mode is the design default — light mode is built on the same HSL token system and works without breaking anything.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Server components, streaming, file-based routing for 13 pages |
| Language | **TypeScript** (strict) | Catch errors at compile, not runtime |
| Styling | **Tailwind CSS 3.4** | Utility-first, paired with a custom HSL token system |
| Animation | **Framer Motion 11** | Page transitions, scroll-driven animation, stagger systems |
| Components | **Radix UI** primitives | Accessibility built-in (Accordion, Dialog, Tabs, Switch, Slot) |
| Icons | **Lucide React** | Consistent, tree-shakable |
| Class merging | **clsx + tailwind-merge** via `cn()` helper | Conditional classes without conflicts |
| Variants | **class-variance-authority** | Type-safe variant API for buttons, cards |

---

## Performance

Built and measured for Core Web Vitals — see `LIGHTHOUSE_REPORT.md` and the Lighthouse HTML reports in this repo. The marketing site is fully static where possible, with no backend dependencies required to deploy.

Optimizations baked in:
- Static generation for content pages
- Optimized fonts (Inter, self-hosted via `next/font`)
- Tree-shaken Lucide icons
- Code-split heavy animations
- Preloaded above-the-fold imagery

---

## Quick Start

### Prerequisites
- Node.js ≥ 18 (20+ recommended)
- npm, pnpm, or yarn

### Run It

```bash
# Install
npm install

# Dev server (with hot reload)
npm run dev
# → http://localhost:3000

# Production build
npm run build && npm run start

# Lint
npm run lint
```

No environment variables required. The marketing site is fully static.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Next.js and configures everything. Push to `main` → site updates.

---

## Project Structure

```
src/
├── app/                              ← App Router pages
│   ├── layout.tsx                    ← Root layout with theme provider
│   ├── page.tsx                      ← Landing
│   ├── globals.css                   ← Global Tailwind layer + HSL tokens
│   ├── sitemap.ts                    ← Programmatic XML sitemap
│   ├── product/                      ← Deep product page
│   ├── demo/                         ← Interactive demo
│   ├── differentiators/              ← Strategic positioning page
│   ├── pricing/                      ← Pricing + comparison
│   ├── onboarding/                   ← Onboarding walkthrough
│   ├── faq/                          ← FAQ
│   ├── contact/                      ← Contact + mailto fallback
│   ├── ai-receptionist-for-salons/   ← SEO landing
│   ├── ai-salon-appointment-booking/ ← SEO landing
│   └── privacy/, terms/              ← Legal
│
├── components/
│   ├── navbar.tsx                    ← Adaptive nav with theme switcher
│   ├── footer.tsx                    ← Footer with sitemap
│   ├── theme-provider.tsx            ← Dark/light system preference
│   ├── background-effects.tsx        ← Floating blobs, grid, particles
│   ├── animations.tsx                ← AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift
│   └── ui/                           ← shadcn-style primitives (Button, Card, Tabs, Accordion, Dialog, Badge, Input, Textarea)
│
└── lib/
    └── utils.ts                      ← `cn()` helper for class merging
```

---

## Accessibility & SEO

This isn't an afterthought layer — it's wired in from page one:

- **Semantic HTML** — `<main>`, `<nav>`, `<article>`, proper heading hierarchy
- **ARIA labels** on every interactive element without visible text
- **Keyboard navigation** — focus rings via neon ring tokens, tab order respected
- **Color contrast** — all text/background combos hit WCAG AA in both themes
- **Open Graph + Twitter Cards** — every page has metadata for social shares
- **Programmatic sitemap.ts** — search engines auto-discover all routes
- **Dedicated SEO landing pages** — `/ai-receptionist-for-salons` and `/ai-salon-appointment-booking` target high-intent queries

---

## Responsive

| Breakpoint | Range | Layout |
|---|---|---|
| Mobile | `< 640px` | Stacked, single-column, touch-optimized |
| Tablet | `640px – 1024px` | 2-column hybrid |
| Desktop | `> 1024px` | Full 3-column grid, ambient effects active |

---

## What's Coming

The marketing site evolves with the product. Currently on the roadmap:

- **Memory module page** — long-term customer memory for the voice agent
- **SMS integration page** — Twilio-powered booking via text
- **Google Maps integration page** — local discovery surface
- **Case studies section** — real salon outcomes once Private Beta wraps

---

## About the Author

**Aryan Tripathi** — CS Senior at Arizona State University (May 2026), 4+1 MS CS candidate (AI concentration). Building in the AI-for-local-business space.

- 🔗 [LinkedIn](https://linkedin.com/in/aryan-tripathi-9254a611b)
- 💻 [GitHub](https://github.com/aryan3002)
- 📧 atripa38@asu.edu
- 🌐 Live site: [convoaiservices.com](https://www.convoaiservices.com)

---

## License

MIT — use the design system, animation patterns, and structure freely for your own projects. The **brand**, **content**, and **product strategy** remain proprietary to Convo.

---

<div align="center">

*Built for the salons of tomorrow — and the owners who don't have time for the phone.*

</div>
