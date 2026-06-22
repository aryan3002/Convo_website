# Convo → "conversation-to-action engine": vertical unification, Neev subdomain & visual overhaul

- **Date:** 2026-06-22
- **Author:** Aryan Tripathi (with Claude)
- **Status:** Draft for review
- **Repos affected:** `Saas` (Convo marketing site, Next.js 16) · `Constructo_saas` (Neev, Vite + React 19) · Vercel + GoDaddy DNS

---

## 1. Goal

Reposition `convoaiservices.com` from a single-product salon site into the home of **one engine with multiple verticals**, and make **Neev** (the construction product) reachable as a first-class vertical at `neev.convoaiservices.com` — without buying a new domain. In the same pass, replace the current "AI-generated" visual style (tri-color neon gradients, glassmorphism, badge-per-section) with a restrained, premium **"Engineered Dark"** identity.

This is **Approach 3** (locked with the user): engine-led homepage + a three-vertical section + Neev subdomain, while keeping and recontextualizing the proven salon content.

## 2. Locked decisions

| Decision | Choice |
|---|---|
| Brand framing | Unify under one "conversation-to-action AI" story; salons / cabs / construction are verticals of one engine |
| Homepage approach | #3 — engine-led hero + 3-vertical section, keep salon proof (recontextualized). Not a full vertical-neutral rewrite. |
| Cabs vertical | Show as **"In production"** → links to `/contact`. No fabricated cab pages. |
| Neev subdomain | `neev.convoaiservices.com` |
| Hosting | Both projects on Vercel; domain registered at GoDaddy (DNS records added there, or via Vercel nameservers if delegated) |
| Visual direction | **Engineered Dark** — near-black canvas, single indigo accent, hairline borders, tight grotesk type, no glow |
| Neev's own design | Unchanged. We only add bidirectional "Part of Convo" cohesion links. |

## 3. Narrative spine

Convo is a **conversation-to-action engine**: it takes unstructured human input (texts, calls, photos, voice notes) and turns it into a committed, structured action plus a system of record. The existing README loop — **Capture → Coordinate → Commit/Recommend** — is the unifying through-line across every vertical.

| Vertical | Input → Action | Site status |
|---|---|---|
| Salons / Barbershops | chat / call → booked appointment | Live, rich existing content |
| Cabs | chat / call → dispatched ride | In production (product exists; no marketing pages) → Contact |
| Construction → **Neev** | site photos / WhatsApp / voice → evidence-anchored project record | Standalone app at `neev.convoaiservices.com` |

Neev is the same loop applied to construction — *"AI proposes, a human commits."* That equivalence is what makes the unification honest rather than bolted-on.

## 4. Visual identity — "Engineered Dark"

The slop in the current site is **not** the darkness; it's the tri-color neon gradients, glass-on-glass surfaces, the badge stapled to every section header, and decorative animation (float, shimmer, pulse-glow, noise). The overhaul keeps a dark, technical brand but enforces restraint.

### 4.1 What gets retired

In `tailwind.config.ts` and `src/app/globals.css`:
- `neon-gradient`, `gradient-text`, `neon-glow`, `pulse-glow`, `shimmer`, `shimmer-button`, `float`, `gradient-x/y/xy`, `noise-bg`, `boxShadow.neon`, `boxShadow.neon-strong`.
- The blur-heavy `.glass` / `.glass-strong` utilities are replaced by a single flat surface treatment (`bg-card` + hairline border). `backdrop-blur` is dropped except optionally on the sticky navbar.
- The multi-neon palette (`neon.blue/purple/pink/mint`) is removed from general use; at most one accent survives.

### 4.2 New token set (dark mode is the primary surface)

Concrete values to apply (HSL for the CSS-var system already in place):
- `--background`: near-black neutral, e.g. `240 6% 5%` (replaces the blue-tinted `222 47% 6%`).
- `--card`: `240 5% 8%`; `--popover` same. Surfaces differ from bg by lightness, not by glass blur.
- `--primary`: **single indigo accent** `239 84% 67%` (≈ `#6366F1`); `--ring` matches.
- `--accent`: fold into a neutral or a desaturated indigo tint — no second vivid hue.
- `--border` / `--input`: hairline `rgba(255,255,255,0.08)` equivalent (e.g. `240 5% 14%`); a `-strong` border variant for hover/emphasis at ~`240 5% 20%`.
- `--muted-foreground`: calm gray `240 5% 65%`.
- `--success` retained (used for confirmed-booking states) but desaturated to sit inside the palette.

### 4.3 Type & spacing

- Display/headings: a tight grotesk — **Inter Tight** (or Geist) for headings, **Inter** for body. Single font infra; load via the existing Google Fonts import. Headings use negative letter-spacing (`-0.02em`) and tighter line-height.
- Two weights doing the work: 400 body, 500–600 headings. Drop the 700/800 hero weight that reads as "AI startup."
- Replace the `Badge`-on-every-section pattern with quiet eyebrow labels (small, uppercase-tracked or sentence-case muted text) used sparingly.
- Generous vertical rhythm; hairline section dividers instead of glow gradients.

### 4.4 Motion

- Keep `fade-in` / `slide-up` (subtle entrance) at reduced distance/opacity. Remove infinite decorative loops. Respect `prefers-reduced-motion`.

> The detailed visual execution (exact component restyling, hero composition) is delegated to the `anthropic-skills:frontend-design` skill during implementation; this section fixes the constraints it must honor.

## 5. Information architecture & site changes (`Saas`)

### 5.1 Homepage (`src/app/page.tsx`)

New section order:
1. **Hero (rewritten)** — engine-level headline ("Turn every message, call, and photo into a booked, dispatched, or logged outcome" — final copy in implementation), subhead naming the three verticals. New CTAs: primary → Contact / Request access; secondary → see verticals.
2. **"One engine, three verticals" (new)** — the centerpiece. Three cards:
   - **Salons / Barbershops** — badge "Live" → scrolls to the salon proof below / `/product`.
   - **Cabs** — badge "In production" → `/contact`.
   - **Construction · Neev** — badge "Try the demo ↗" → `https://neev.convoaiservices.com` (new tab, external cue).
   Each card carries the Capture → Coordinate → Commit beat for that vertical.
3. **Engine explainer (reframed `HowItWorksTimeline`)** — generalized to Capture → Coordinate → Commit, not salon-specific.
4. **Salon proof (kept, recontextualized)** — `ProductModeCards`, `FeatureGrid`, `CallSummariesSection`, `CalendarInviteSection`, `TestimonialsSection` remain, under a reframed lead-in like *"See the engine at work — the salon front desk."* Content/copy largely unchanged; only restyled to the new identity and re-headed.
5. `IntegrationsStrip` — kept, restyled.
6. `PricingTeaser` + `FinalCTA` — kept, restyled; CTA copy generalized beyond "your salon."

### 5.2 Navigation (`src/components/navbar.tsx`)

- Add **Solutions** as the lead nav item → a dropdown (or anchor menu) listing: Salons · Cabs · Construction — Neev ↗ (external).
- Keep Why Us, Pricing, Demo, FAQ, Contact. Logo + CTAs restyled (drop neon shadow/gradient).
- Sticky bar uses a single subtle backdrop treatment, hairline bottom border.

### 5.3 Footer (`src/components/footer.tsx`)

- Add a **Solutions** column: Salons (`/product` or `/ai-salon-appointment-booking`), Cabs (`/contact`), Construction — Neev (`https://neev.convoaiservices.com`, external ↗).
- Restyle to the new palette; keep existing Company / Legal columns and links.

### 5.4 New shared pieces

- A small `VerticalCard` component (props: icon, title, tagline, the three beats, status badge, href, external?) used by the homepage section — one clear purpose, testable in isolation.
- A `statusBadge` variant set ("Live", "In production", "Try the demo") replacing the decorative `Badge` usage.

### 5.5 SEO touch-ups

- Update homepage + layout metadata/OG copy from salon-only to the engine + verticals story.
- `src/app/sitemap.ts`: main site only lists its own routes; Neev (separate origin) keeps its own sitemap. Optionally add a footer link only — no cross-origin sitemap entries.

## 6. Neev integration & cohesion (`Constructo_saas`)

- Add a discreet **"Part of Convo ↗"** link in Neev's `src/sections/Nav.tsx` and `src/sections/Footer.tsx` → `https://www.convoaiservices.com`. This makes the relationship bidirectional and lets demo users return.
- No other Neev redesign. Neev keeps its Bricolage Grotesque / IBM Plex Mono / Mukta identity.
- Confirm Neev's router uses paths compatible with a root-domain deploy (it already builds to static `dist/`; `react-router-dom` v7 — ensure no hardcoded base path assumptions break under the subdomain root).

## 7. Infrastructure — the subdomain (makes it real)

Neev is a static Vite build, so it deploys independently of the Next.js site.

1. **Create/confirm a Vercel project for Neev** from `Constructo_saas` (framework preset: Vite; build `npm run build`; output `dist`).
2. **Attach domain** `neev.convoaiservices.com` to the Neev project in Vercel.
3. **DNS at GoDaddy:** add one record for the `neev` subdomain pointing to Vercel's target:
   - `CNAME  neev → cname.vercel-dns.com` (use the exact target Vercel displays for this project).
   - Apex (`convoaiservices.com`) and `www` stay pointed at the existing main project — untouched.
   - If nameservers are delegated to Vercel DNS, add the record there instead of GoDaddy.
4. **Verify**: Vercel shows the domain as Valid; TLS issues automatically; `https://neev.convoaiservices.com` serves Neev.

> Pre-implementation: inspect the connected Vercel account to confirm the existing project names, current domain attachment, and the exact CNAME target **before** any GoDaddy change. The GoDaddy record itself is added by the user (or guided), since there is no GoDaddy automation connector here.

## 8. Component / unit boundaries (isolation & clarity)

| Unit | Purpose | Depends on |
|---|---|---|
| Theme tokens (`globals.css`, `tailwind.config.ts`) | Single source of the Engineered Dark palette/type | none |
| `VerticalCard` | Render one vertical with status + link | tokens, `ui/card`, `ui/badge` |
| Homepage `VerticalsSection` | Compose the three cards + engine framing | `VerticalCard` |
| `navbar` Solutions menu | Navigation to verticals | route + external links |
| Neev cohesion links | Bidirectional Convo↔Neev nav | none |
| Vercel/DNS wiring | Serve Neev at the subdomain | Vercel project, GoDaddy DNS |

Each can be built and verified without reading the others' internals.

## 9. Out of scope (YAGNI)

- No deep cab or construction marketing pages on the main site.
- No rewrite of salon proof *copy* beyond section lead-ins and CTA generalization.
- No redesign of Neev's internal pages.
- No new fonts beyond the Inter / Inter Tight pairing.
- No backend, auth, or data changes.

## 10. Risks & mitigations

- **Scope creep on the visual overhaul.** Mitigation: tokens-first, then restyle existing components; keep copy stable. Phase it (see §12).
- **DNS propagation / wrong record.** Mitigation: confirm exact Vercel target first; change only the `neev` record; never touch apex/www.
- **Recontextualized salon sections feeling generic.** Mitigation: keep specific salon copy; only the lead-in changes.
- **Neev routing under subdomain.** Mitigation: verify SPA fallback + base path on first deploy.
- **Regression in Lighthouse scores** (site was recently perf-optimized). Mitigation: removing gradients/blur/noise should help; re-run Lighthouse after.

## 11. Verification

- Local: `npm run dev` (both apps) — homepage shows engine hero + three verticals; Neev card opens the subdomain; nav/footer Solutions present; no neon/glass artifacts remain.
- Build: `npm run build` clean on both; `next lint`.
- Subdomain: `https://neev.convoaiservices.com` resolves and serves Neev with valid TLS; "Part of Convo" link returns to main site.
- Lighthouse: re-run on the homepage; confirm no regression vs. current optimized scores.

## 12. Suggested phasing

1. **Theme foundation** — new tokens, retire slop utilities, type pairing.
2. **Homepage** — hero rewrite + `VerticalsSection` + recontextualized sections, restyled.
3. **Nav/footer** — Solutions menu + columns.
4. **Neev cohesion links.**
5. **Infra** — Vercel project + domain + GoDaddy CNAME + verify.
6. **Polish & Lighthouse.**

Phases 1–4 are code in `Saas`/`Constructo_saas`; phase 5 is config/DNS and can run in parallel once the Neev build is confirmed.
