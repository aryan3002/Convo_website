# Convo Unification + Neev Subdomain + Visual Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition `convoaiservices.com` as one "conversation-to-action engine" with three verticals (salons live, cabs in-production, construction = Neev), make Neev reachable at `neev.convoaiservices.com`, and replace the neon-glass visual style with a restrained "Engineered Dark" identity.

**Architecture:** Two separate apps stay separate. The Convo site (Next.js 16) gets a token-level theme overhaul, then component/page restyles and a new homepage verticals section. Neev (Vite SPA) is unchanged except for two bidirectional "Part of Convo" links and a Vercel SPA-fallback config, then it's attached to the `neev` subdomain.

**Tech Stack:** Next.js 16 / React 18 / Tailwind 3.4 / framer-motion / lucide-react (Convo) · Vite 8 / React 19 / react-router-dom 7 / Tailwind 4 (Neev) · Vercel hosting · GoDaddy DNS.

> **Verification model (important):** This repo has **no test harness** (package.json exposes only `lint` and `build`, zero test files). Introducing one for a visual marketing redesign is out of scope (YAGNI). Each task's "test cycle" is therefore: apply change → `npm run build` (must compile) → `npm run lint` (must pass) → **visual/behavioral verification** in the dev server against the explicit checks listed → commit. Where a "verify in browser" step appears, use the preview/browser tooling (or a screenshot) to confirm the named checks.

> **Design execution:** Pixel-level restyling of existing sections is delegated to the `anthropic-skills:frontend-design` skill *during execution* (per the spec). This plan fixes the structure, exact files, token values, copy strings, and the constraints frontend-design must honor — it does not hand-author final JSX for every decorative section.

## Global Constraints

- Visual identity = **Engineered Dark**: near-black neutral canvas, **one** accent (indigo `#6366F1` = HSL `239 84% 67%`), hairline borders, tight grotesk headings, **no** gradients/glow/blur/noise/shimmer/float. (Sticky navbar may keep a single subtle backdrop.)
- Type: headings use **Inter Tight**; body uses **Inter**. Two working weights (400 body, 500–600 headings). No 700/800 hero weights.
- Retire entirely: `gradient-text`, `neon-glow`, `neon-gradient`, `glass-gradient`, `pulse-glow`, `shimmer`, `shimmer-button`, `float`, `gradient-x/y/xy`, `noise-bg`, `boxShadow.neon`, `boxShadow.neon-strong`, and the `neon.{blue,purple,pink,mint}` palette from general use.
- **No fabricated cab or construction marketing pages.** Cabs = a card with an "In production" badge linking to `/contact`. Construction = the Neev card linking to `https://neev.convoaiservices.com`.
- Neev subdomain = `neev.convoaiservices.com`. GoDaddy DNS record = `CNAME neev → cname.vercel-dns.com` (use the exact target Vercel shows). Never touch apex / `www`.
- Neev's own visual identity is **unchanged**; only add two "Part of Convo" links + a `vercel.json`.
- Keep existing salon proof **copy**; only reframe section lead-ins and generalize CTAs.
- Convo stays on React 18 / Next 16; Neev stays on React 19 / Vite 8. Do not bump majors.

---

## File map

**Convo (`Saas`)**
- Modify: `src/app/globals.css` — Engineered Dark tokens; retire slop utilities; font import.
- Modify: `tailwind.config.ts` — remove neon palette/gradients/shadows/decorative animations; add `display` font.
- Modify: `src/components/ui/button.tsx` — redefine `neon`/`glass`/`default` variants to flat/indigo (keeps existing call sites working).
- Modify: `src/components/ui/badge.tsx` — quiet variants + status variants (`live`, `soon`, `demo`).
- Modify: `src/components/ui/card.tsx` — flat surface (drop glass dependence).
- Create: `src/components/vertical-card.tsx` — the reusable vertical tile.
- Modify: `src/app/page.tsx` — hero rewrite, new `VerticalsSection`, engine-level How-It-Works, recontextualized salon lead-in, generalized CTAs.
- Modify: `src/components/navbar.tsx` — Solutions menu + restyle.
- Modify: `src/components/footer.tsx` — Solutions column + restyle + generalized tagline.
- Modify: `src/app/layout.tsx` — metadata/OG copy to engine story.

**Neev (`Constructo_saas`)**
- Modify: `src/sections/Nav.tsx` — "Part of Convo ↗" link.
- Modify: `src/sections/Footer.tsx` — "Part of Convo" external link in the Company column.
- Create: `vercel.json` — SPA fallback rewrite.

**Infra**
- Vercel: Neev project + `neev.convoaiservices.com` domain.
- GoDaddy: one `CNAME` record.

---

## Task 1: Engineered Dark theme foundation

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

**Produces:** New CSS-var palette (dark + light), `display` font family `font-display`, and removal of slop utilities. Later tasks rely on tokens `bg-background`, `bg-card`, `border-border`, `text-primary`, `text-muted-foreground`, and the `font-display` class.

- [ ] **Step 1: Update the font import** in `src/app/globals.css` line 2 to add Inter Tight:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600&display=swap');
```

- [ ] **Step 2: Replace the `.dark` token block** (`globals.css` lines 34–56) with the Engineered Dark values:

```css
  .dark {
    --background: 240 6% 5%;
    --foreground: 240 6% 96%;
    --card: 240 5% 8%;
    --card-foreground: 240 6% 96%;
    --popover: 240 5% 8%;
    --popover-foreground: 240 6% 96%;
    --primary: 239 84% 67%;
    --primary-foreground: 240 6% 98%;
    --secondary: 240 5% 13%;
    --secondary-foreground: 240 6% 96%;
    --muted: 240 5% 13%;
    --muted-foreground: 240 5% 65%;
    --accent: 240 5% 13%;
    --accent-foreground: 240 6% 96%;
    --destructive: 0 62% 45%;
    --destructive-foreground: 240 6% 98%;
    --success: 160 50% 45%;
    --success-foreground: 240 6% 98%;
    --border: 240 5% 15%;
    --input: 240 5% 15%;
    --ring: 239 84% 67%;
  }
```

- [ ] **Step 3: Align light mode accent** — in the `:root` block update `--primary` and `--ring` to the same indigo so both modes share one accent:

```css
    --primary: 239 84% 60%;
    --ring: 239 84% 60%;
```

- [ ] **Step 4: Replace the slop utilities** in the `@layer utilities` block (`globals.css` lines 68–128). Replace `.glass`/`.glass-strong` and delete `.gradient-border`, `.gradient-text`, `.neon-glow`, `.noise-bg`, `.noise-bg::before`, `.shimmer-button`. Keep `.scroll-reveal` / `.scroll-reveal.visible`. New utilities:

```css
@layer utilities {
  .glass {
    @apply bg-card border border-border;
  }
  .glass-strong {
    @apply bg-card border border-border;
  }
  .scroll-reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **Step 5: Update selection color** (`globals.css` lines 150–153) from neon cyan to the accent:

```css
::selection {
  background: hsl(239 84% 67% / 0.3);
  color: inherit;
}
```

- [ ] **Step 6: Strip the neon/decorative theme** in `tailwind.config.ts`. Remove the `neon: {...}` color block (lines 50–55). In `backgroundImage` remove `glass-gradient` and `neon-gradient` (keep radial/conic). In `boxShadow` remove `neon` and `neon-strong` (keep `glass` but redefine to a subtle hairline-friendly shadow `0 1px 2px 0 rgba(0,0,0,0.4)`). In `animation`/`keyframes` remove `gradient-x/y/xy`, `float`, `pulse-glow`, `shimmer` (keep `fade-in`, `slide-up`, `slide-down`). Add a display font:

```ts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
```

- [ ] **Step 7: Build & lint**

Run: `npm run build && npm run lint`
Expected: compiles clean. Tailwind may warn about removed classes only if still referenced — those references are removed in later tasks; if the build *errors* on a missing class it won't (Tailwind ignores unknown utilities). PASS = build completes.

- [ ] **Step 8: Verify in browser**

Run `npm run dev`, open `/`. Checks: background is near-black neutral (not blue-tinted), no rainbow text, page still renders. (Sections still using old neon classes will look plain/odd until restyled — expected.)

- [ ] **Step 9: Commit**

```bash
git add src/app/globals.css tailwind.config.ts
git commit -m "feat(theme): Engineered Dark token foundation; retire neon/glass utilities"
```

---

## Task 2: Restyle UI primitives (Button, Badge, Card)

**Files:**
- Modify: `src/components/ui/button.tsx`
- Modify: `src/components/ui/badge.tsx`
- Modify: `src/components/ui/card.tsx`

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: `Button` variants `neon`/`glass`/`default` redefined (call sites unchanged); `Badge` variant union extended to include `"live" | "soon" | "demo"`; `Card` flat surface. Task 3/4/5/6 rely on `Badge variant="live|soon|demo"` and the restyled `Button`.

- [ ] **Step 1: Redefine Button variants** in `button.tsx` (lines 10–19) — keep the variant *names* (so existing `asChild` call sites keep working) but remove gradient/glow:

```ts
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[1px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-[1px]",
        glass: "bg-card border border-border text-foreground hover:bg-secondary hover:-translate-y-[1px]",
```

- [ ] **Step 2: Restyle Badge + add status variants** in `badge.tsx`. Update the type union and class map:

```tsx
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "neon" | "live" | "soon" | "demo"
}
```

and the class object:

```tsx
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "border border-border bg-transparent text-muted-foreground": variant === "outline",
          "bg-success/15 text-success border border-success/25": variant === "success",
          "bg-primary/10 text-primary border border-primary/20": variant === "neon" || variant === "demo",
          "bg-success/15 text-success border border-success/25": variant === "live",
          "bg-secondary text-muted-foreground border border-border": variant === "soon",
        },
```

(Note: `live` reuses the success treatment; `demo` reuses the indigo tint; `soon` is muted/neutral.)

- [ ] **Step 3: Flatten Card** — open `card.tsx`; wherever the card root applies `glass`/blur/neon shadow, replace with `bg-card border border-border rounded-xl`. Keep the component API (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`) intact. Remove any `shadow-neon`/`backdrop-blur` classes.

- [ ] **Step 4: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS. Watch for the duplicate-key lint note in Step 2's object — TS allows it but to be safe, collapse `neon`/`demo` and `success`/`live` into single keys using `||` as shown (no duplicate literal keys).

- [ ] **Step 5: Verify in browser**

On `/`, buttons are solid indigo or bordered (no gradient); badges are quiet. Hero CTAs no longer glow.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/button.tsx src/components/ui/badge.tsx src/components/ui/card.tsx
git commit -m "feat(ui): flat Engineered Dark primitives + status badge variants"
```

---

## Task 3: VerticalCard component

**Files:**
- Create: `src/components/vertical-card.tsx`

**Interfaces:**
- Consumes: `Card`/`CardContent` (Task 2), `Badge` status variants (Task 2), `lucide-react` icons.
- Produces: `VerticalCard` (default export named) with this exact prop type — Task 4 consumes it:

```tsx
export type VerticalStatus = "live" | "soon" | "demo"
export interface VerticalCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  beats: [string, string, string]   // Capture, Coordinate, Commit
  status: VerticalStatus
  statusLabel: string
  href: string
  external?: boolean
}
```

- [ ] **Step 1: Write the component** at `src/components/vertical-card.tsx`:

```tsx
"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type VerticalStatus = "live" | "soon" | "demo"

export interface VerticalCardProps {
  icon: LucideIcon
  title: string
  tagline: string
  beats: [string, string, string]
  status: VerticalStatus
  statusLabel: string
  href: string
  external?: boolean
}

const beatLabels = ["Capture", "Coordinate", "Commit"] as const

export function VerticalCard({
  icon: Icon,
  title,
  tagline,
  beats,
  status,
  statusLabel,
  href,
  external = false,
}: VerticalCardProps) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }
  const Arrow = external ? ArrowUpRight : ArrowRight

  return (
    <Link {...linkProps} className="group block h-full">
      <Card className="h-full transition-colors duration-200 group-hover:border-primary/40">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <Badge variant={status}>{statusLabel}</Badge>
          </div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
          <ul className="mt-5 space-y-2 border-t border-border pt-4">
            {beats.map((beat, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="w-20 shrink-0 text-muted-foreground">{beatLabels[i]}</span>
                <span className="text-foreground">{beat}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
            {external ? "Try the demo" : "Learn more"}
            <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
```

- [ ] **Step 2: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS (component is unused until Task 4 — that's fine; Next won't error on an unused export, but lint may flag unused if imported nowhere. It's not imported yet, so no lint reference. PASS.)

- [ ] **Step 3: Commit**

```bash
git add src/components/vertical-card.tsx
git commit -m "feat(home): add VerticalCard component"
```

---

## Task 4: Homepage — engine hero, verticals section, recontextualized proof

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `VerticalCard` (Task 3), restyled primitives (Task 2).
- Produces: the public homepage. No downstream code depends on its internals.

> Invoke `anthropic-skills:frontend-design` for the visual execution of the hero and verticals section before writing the JSX, honoring the Global Constraints. The copy strings and structure below are fixed requirements.

- [ ] **Step 1: Rewrite `HeroSection`** (`page.tsx` lines 33–180). Fixed copy:
  - Eyebrow (quiet, not a glowing badge): `Conversation-to-action AI`
  - Headline (`font-display`, weight 600, tight): `Turn every message, call, and photo into a done deal.`
  - Subhead: `Convo is the engine that captures unstructured conversations — texts, calls, voice notes, site photos — and turns them into booked appointments, dispatched rides, and trustworthy project records. One loop: capture, coordinate, commit.`
  - Primary CTA → `/contact` ("Request access"); secondary CTA → anchor `#verticals` ("See what it runs").
  - Replace the three-panel neon hero visual with a flat preview (keep a single subtle bordered card, no glow). Visual treatment via frontend-design.

- [ ] **Step 2: Add `VerticalsSection`** as a new component in `page.tsx`, rendered with `id="verticals"`. Use `VerticalCard` with this exact data:

```tsx
import { Scissors, Car, HardHat } from "lucide-react"
import { VerticalCard } from "@/components/vertical-card"

function VerticalsSection() {
  return (
    <section id="verticals" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">One engine, three verticals</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            The same loop, wherever conversations turn into commitments
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <VerticalCard
            icon={Scissors}
            title="Salons & barbershops"
            tagline="Bookings that feel like texting. Chat or voice, 24/7, no phone tag."
            beats={[
              "Every call, text and DM is logged",
              "Service, stylist and slot availability synced",
              "Confirmed booking + calendar invite",
            ]}
            status="live"
            statusLabel="Live"
            href="/product"
          />
          <VerticalCard
            icon={Car}
            title="Cabs & fleets"
            tagline="Ride booking and dispatch with dynamic pricing across every channel."
            beats={[
              "Inbound ride requests captured anywhere",
              "Driver availability and pricing coordinated",
              "Dispatched ride, confirmed to the rider",
            ]}
            status="soon"
            statusLabel="In production"
            href="/contact"
          />
          <VerticalCard
            icon={HardHat}
            title="Construction · Neev"
            tagline="Turn WhatsApp messages, site photos and voice notes into one evidence-anchored record."
            beats={[
              "Site chatter, photos and voice notes captured",
              "AI structures and cross-checks the evidence",
              "A human commits the decision of record",
            ]}
            status="demo"
            statusLabel="Try the demo"
            href="https://neev.convoaiservices.com"
            external
          />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Reframe `HowItWorksTimeline`** to engine-level: change the four step titles/descriptions from salon-specific to Capture → Coordinate → Commit → Record. Fixed step copy:
  1. `Capture` — "Every message, call, voice note, or photo lands in one place."
  2. `Coordinate` — "The AI reads intent, checks availability or evidence, and proposes the next action."
  3. `Commit` — "A human confirms — a booking, a dispatch, a logged decision — in one tap."
  4. `Record` — "Everything is summarized and stored, ready to inform the next decision."

- [ ] **Step 4: Add a recontextualizing lead-in** above the kept salon sections (before `ProductModeCards`). Insert a small header block:

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
  <p className="text-sm font-medium text-muted-foreground">See the engine at work</p>
  <h2 className="font-display text-3xl font-semibold md:text-4xl">The salon front desk, in depth</h2>
</div>
```

- [ ] **Step 5: Generalize the two CTA sections.** In `PricingTeaser` change "scale with your salon" → "scale with your business". In `FinalCTA` change the heading "Ready to modernize your salon?" → "Ready to put the engine to work?" and the body to drop salon-only framing. Keep buttons.

- [ ] **Step 6: Update the page composition** at the bottom (`HomePage`, lines 799–815) to:

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalsSection />
      <HowItWorksTimeline />
      <SalonProofLeadIn />
      <ProductModeCards />
      <FeatureGrid />
      <CallSummariesSection />
      <CalendarInviteSection />
      <IntegrationsStrip />
      <TestimonialsSection />
      <PricingTeaser />
      <FinalCTA />
    </>
  )
}
```

(Where `SalonProofLeadIn` wraps the Step 4 block. `SocialProofStrip` may be dropped or restyled — its "Built for Salons" highlight conflicts with the unified story; if kept, change that item to "One engine, three verticals".)

- [ ] **Step 7: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS.

- [ ] **Step 8: Verify in browser**

On `/`: engine hero (no glow), a "One engine, three verticals" section with three cards and correct badges (Live / In production / Try the demo). Click the Neev card → opens `https://neev.convoaiservices.com` in a new tab. Cabs card → `/contact`. Salons card → `/product`. Salon sections still present under the "See the engine at work" lead-in.

- [ ] **Step 9: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): engine hero + three-vertical section + recontextualized salon proof"
```

---

## Task 5: Navbar — Solutions menu + restyle

**Files:**
- Modify: `src/components/navbar.tsx`

- [ ] **Step 1: Add a Solutions entry** to the `navigation` array (line 12) as the lead item, plus a small constant for the Solutions submenu:

```tsx
const solutions = [
  { name: "Salons & barbershops", href: "/product", external: false },
  { name: "Cabs & fleets", href: "/contact", external: false },
  { name: "Construction — Neev", href: "https://neev.convoaiservices.com", external: true },
]

const navigation = [
  { name: "Why Us?", href: "/differentiators" },
  { name: "Pricing", href: "/pricing" },
  { name: "Demo", href: "/demo" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]
```

- [ ] **Step 2: Render a Solutions dropdown** in the desktop nav (before the `navigation.map`). Use a hover/focus dropdown (CSS group or a small `useState`); each external item gets `target="_blank" rel="noopener noreferrer"` and a trailing `↗`. In the mobile menu, render the three solutions as a labeled group above the other links.

- [ ] **Step 3: Restyle the logo + CTAs** (lines 46–51, 85–90): remove `bg-gradient-to-br from-neon-blue to-neon-purple`, `shadow-neon`, `gradient-text`. Logo mark → `bg-primary` with `MessageSquare` in `text-primary-foreground`; wordmark → plain `font-display font-semibold text-foreground`. Keep the theme toggle. CTA buttons keep their variants (now flat from Task 2).

- [ ] **Step 4: Restyle the scrolled bar** — replace `glass` with `bg-background/80 backdrop-blur-md border-b border-border` (the one allowed subtle backdrop).

- [ ] **Step 5: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS.

- [ ] **Step 6: Verify in browser**

Desktop: "Solutions" reveals the three verticals; Neev opens in a new tab with ↗. Mobile menu shows the Solutions group. Logo no longer gradient/glow.

- [ ] **Step 7: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat(nav): Solutions menu for verticals + Engineered Dark restyle"
```

---

## Task 6: Footer — Solutions column + restyle + copy

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Add a Solutions group** to `footerLinks` (after `product`, line 11):

```tsx
  solutions: [
    { name: "Salons & barbershops", href: "/product" },
    { name: "Cabs & fleets", href: "/contact" },
    { name: "Construction — Neev", href: "https://neev.convoaiservices.com" },
  ],
```

- [ ] **Step 2: Render the Solutions column** in the grid (alongside Product/Company/Legal). Bump the grid to fit (e.g. `lg:grid-cols-6` with brand `lg:col-span-2`). For the Neev link, render an `<a target="_blank" rel="noopener noreferrer">` with a trailing `↗`; the other two stay as `next/link`.

- [ ] **Step 3: Restyle + generalize copy.** Remove the `bg-gradient-to-t from-primary/5` background div (line 33–34), the logo `bg-gradient-to-br ... shadow-neon` and `gradient-text` (lines 42–45), and `glass`/`hover:shadow-neon` on social links (line 58). Logo mark → `bg-primary`; wordmark → `font-display font-semibold`. Change the brand blurb (lines 47–50) from "for modern salons" to: `The conversation-to-action engine for real-world businesses — salons, fleets, and construction sites.` Change the bottom-bar tagline (line 127) from "Built with ❤️ for modern salons" to `Capture · Coordinate · Commit`.

- [ ] **Step 4: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS.

- [ ] **Step 5: Verify in browser**

Footer shows a Solutions column; Neev link opens new tab; no gradient/glow; tagline updated.

- [ ] **Step 6: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat(footer): Solutions column, generalized copy, Engineered Dark restyle"
```

---

## Task 7: Metadata / SEO copy

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Read `layout.tsx`** to locate the exported `metadata` object (title, description, openGraph, twitter).

- [ ] **Step 2: Update copy** to the engine story (keep structure/keys; replace the salon-only strings). Fixed values:
  - title (template base / default): `Convo — conversation-to-action AI for bookings, dispatch & site records`
  - description: `Convo captures texts, calls, voice notes and site photos and turns them into booked appointments, dispatched rides, and evidence-anchored construction records. One engine, three verticals.`
  - openGraph.title / twitter.title: `Convo — turn conversations into action`
  - openGraph.description / twitter.description: same as description above.
  - Leave any `metadataBase`, icons, and verification fields unchanged.

- [ ] **Step 3: Build & lint**

Run: `npm run build && npm run lint`
Expected: PASS.

- [ ] **Step 4: Verify**

View page source on `/` (dev): `<title>` and `og:` tags reflect the engine story.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): homepage metadata reframed to the engine story"
```

---

## Task 8: Neev cohesion links

**Files:**
- Modify: `src/sections/Nav.tsx` (Neev)
- Modify: `src/sections/Footer.tsx` (Neev)

**Interfaces:** Uses Neev's existing `ButtonLink` and the Footer's existing `external` link pattern. No new deps.

- [ ] **Step 1: Add a "Part of Convo" link to Neev's Nav.** In `src/sections/Nav.tsx`, in the desktop CTA group (around line 56, before "Log in"), add a quiet external link:

```tsx
<a
  href="https://www.convoaiservices.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden items-center gap-1 text-[0.85rem] font-medium text-ink-soft transition-colors duration-150 hover:text-ink lg:inline-flex"
>
  Part of Convo
  <span aria-hidden="true">↗</span>
</a>
```

  And add the same link inside the mobile panel (after the nav `ul`, before the Log in button).

- [ ] **Step 2: Add a "Part of Convo" footer link.** In `src/sections/Footer.tsx`, add to the `Company` column's `links` array (line 29–31):

```tsx
      { label: "Part of Convo ↗", to: "https://www.convoaiservices.com", external: true },
```

  (The footer already renders `external` links as `<a href>` — no other change needed.)

- [ ] **Step 3: Build & lint (Neev)**

Run (in `Constructo_saas`): `npm run build && npm run lint`
Expected: PASS.

- [ ] **Step 4: Verify in browser**

Run Neev's `npm run dev`; nav shows "Part of Convo ↗" (desktop + mobile) and footer Company column shows the link; both open `https://www.convoaiservices.com` in a new tab.

- [ ] **Step 5: Commit (in Neev repo)**

```bash
git add src/sections/Nav.tsx src/sections/Footer.tsx
git commit -m "feat: link Neev to parent Convo site (bidirectional cohesion)"
```

---

## Task 9: Neev Vercel deploy + SPA fallback + subdomain

**Files:**
- Create: `vercel.json` (Neev, `Constructo_saas`)

**Note:** Neev is a `BrowserRouter` SPA, so non-root paths (`/pricing`, `/site-survey`) must fall back to `index.html` or they 404 on Vercel. Neev already references `constructo-topaz.vercel.app`, so a Vercel project likely exists — confirm before creating a new one.

- [ ] **Step 1: Add SPA fallback config** at `Constructo_saas/vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

- [ ] **Step 2: Build & verify the SPA locally**

Run (in `Constructo_saas`): `npm run build && npm run preview`. Visit `/pricing` directly and reload — it must render (not 404).

- [ ] **Step 3: Commit the config**

```bash
git add vercel.json
git commit -m "chore(neev): SPA fallback rewrite for Vercel"
```

- [ ] **Step 4: Inspect the current Vercel setup.** Using the Vercel MCP: `list_projects` / `list_deployments` to find the existing Neev project (likely the one behind `constructo-topaz.vercel.app`) and confirm `convoaiservices.com` is on the separate Next.js project. Confirm which project should own the marketing site (the static `dist` build, not the `/login` app).

- [ ] **Step 5: Attach the subdomain.** In the Neev marketing project on Vercel, add domain `neev.convoaiservices.com`. Vercel will display the exact DNS target (typically `cname.vercel-dns.com`). Record it.

- [ ] **Step 6: Add the GoDaddy DNS record (user-performed).** In GoDaddy DNS for `convoaiservices.com`, add:
  - Type `CNAME`, Host `neev`, Value = the target from Step 5, TTL default.
  - Do **not** modify the apex `@` or `www` records.
  - (If nameservers are delegated to Vercel, add the record in Vercel DNS instead.)

- [ ] **Step 7: Verify the subdomain end-to-end.** After propagation: `https://neev.convoaiservices.com` loads Neev with valid TLS; `/pricing` deep-link works (SPA fallback); the "Part of Convo" links return to `https://www.convoaiservices.com`; and the Convo homepage Neev card reaches it.

---

## Task 10: Lighthouse, cross-breakpoint QA, finish branch

**Files:** none (verification + integration).

- [ ] **Step 1: Production build of Convo**

Run (in `Saas`): `npm run build && npm run start`.

- [ ] **Step 2: Lighthouse** on `/` (the site was recently perf-optimized — confirm no regression). Removing gradients/blur/noise should hold or improve scores. Capture before/after if available.

- [ ] **Step 3: Cross-breakpoint visual QA** — mobile (375px), tablet (768px), desktop (1280px): hero, verticals grid (3→1 col), nav Solutions menu/mobile group, footer columns. No neon/glass/gradient artifacts anywhere; one accent only.

- [ ] **Step 4: Link audit** — every Solutions reference (homepage card, nav, footer) resolves: salons→`/product`, cabs→`/contact`, Neev→`https://neev.convoaiservices.com` (new tab). Neev→Convo links work.

- [ ] **Step 5: Finish the branch** — invoke `superpowers:finishing-a-development-branch` to choose merge/PR/cleanup for `feat/convo-unify-neev-subdomain` (Convo) and the Neev branch.

---

## Self-review notes

- **Spec coverage:** §4 visual identity → Tasks 1–2,5,6; §5.1 homepage → Task 4; §5.2 nav → Task 5; §5.3 footer → Task 6; §5.4 VerticalCard/status badges → Tasks 2–3; §5.5 SEO → Task 7; §6 Neev cohesion → Task 8; §7 infra → Task 9; §11 verification → Task 10. All covered.
- **Cabs honesty (Global Constraint):** cabs only ever links to `/contact` with an "In production" badge — no fabricated page. ✓
- **Type consistency:** `VerticalCardProps` (Task 3) is consumed verbatim in Task 4; `Badge` variants `live`/`soon`/`demo` (Task 2) are used by `VerticalCard` (Task 3) and its `status` prop. ✓
- **No-placeholder check:** copy strings, token values, DNS record, and component code are concrete; the only delegated work (pixel-level restyle of decorative sections) is explicitly routed to frontend-design with fixed constraints, not left as "TODO".

---

# Phase 2 — Bespoke restyle of all secondary pages

The Task 1 theme overhaul removed `gradient-text`, `neon-glow`, `shadow-neon`, and the `neon.*` palette globally. Nine route pages (plus the now-fixed `tabs.tsx`) still referenced those classes and now render degraded. The user chose a **full bespoke restyle** of each page to homepage-level quality — not a token swap.

## Shared restyle contract (every Phase 2 task MUST follow)

**Reference implementation:** `src/app/page.tsx` (the restyled homepage) is the canonical example of the target look. Match its rhythm, hierarchy, and restraint.

**Preserve:** all existing copy, routes, links, page sections, and functional behavior. This is a VISUAL restyle, not a content rewrite. These pages are mostly salon-specific — keep their salon content; do NOT force the engine/verticals rewrite here (that was the homepage's job).

**Retire/replace every dead class on the page:**
- `gradient-text` → for emphasized words use `text-primary` (indigo accent); never reintroduce a gradient.
- `neon-glow` → remove.
- `bg-neon-{blue,purple,pink,mint}/X` → token tints: `bg-primary/10` for accent chips, `bg-secondary` for neutral surfaces.
- `text-neon-*` → `text-primary` (accent) or `text-muted-foreground` (neutral).
- `shadow-neon` / `shadow-neon-strong` → remove; use `border border-border` for definition.
- `glass` → fine to keep (now flat `bg-card border border-border`) or make explicit.
- decorative `animate-pulse` glows → remove or keep extremely subtle.

**Elevate (Engineered Dark language):** headings `font-display` weight 500–600 (no 700/800 hero weights); quiet eyebrow labels (muted small text) instead of a `Badge` on every section (keep `Badge` only for genuine status); generous whitespace; hairline `border-border`; ONE indigo accent; flat `bg-card` surfaces; subtle `fade-in`/`slide-up` only, respect `prefers-reduced-motion`. Invoke the `anthropic-skills:frontend-design` skill for each page.

**Verify:** `npm run build` clean (the only gate — no test harness; `npm run lint` is broken pre-existing). Then `grep -nE "gradient-text|neon-glow|bg-neon-|text-neon-|shadow-neon" <file>` must return nothing on the restyled page. Commit per page.

## Tasks (one page each — independent)

## Task 11: Restyle /product
**File:** `src/app/product/page.tsx` (large). Dead classes present: `gradient-text`, `bg-neon-{mint,blue,purple}/X`, `text-neon-blue`, `animate-pulse`. Apply the shared contract. Commit: `feat(product): Engineered Dark restyle`.

## Task 12: Restyle /differentiators
**File:** `src/app/differentiators/page.tsx` (large). Dead classes: `gradient-text neon-glow`, `bg-neon-{mint,blue,purple}/X`, `glass shadow-neon`, `gradient-text`. Apply the shared contract. Commit: `feat(differentiators): Engineered Dark restyle`.

## Task 13: Restyle /pricing
**File:** `src/app/pricing/page.tsx`. Dead classes: `gradient-text`, `shadow-neon` (on popular plan card). Apply the shared contract; the "popular" plan card should use `border-primary/50` (not `shadow-neon`) for emphasis. Commit: `feat(pricing): Engineered Dark restyle`.

## Task 14: Restyle /demo
**File:** `src/app/demo/page.tsx` (very large, ~1400 lines). Dead classes: `gradient-text neon-glow`, `bg-neon-{mint,blue,purple}/X` (many), `gradient-text`. Apply the shared contract. If the file is unwieldy, restyle section-by-section but keep it one file and one commit. Commit: `feat(demo): Engineered Dark restyle`.

## Task 15: Restyle /contact
**File:** `src/app/contact/page.tsx`. Dead classes: `gradient-text`, `bg-neon-{mint,blue,purple}/X`. Apply the shared contract. Commit: `feat(contact): Engineered Dark restyle`.

## Task 16: Restyle /faq
**File:** `src/app/faq/page.tsx`. Dead classes: `gradient-text neon-glow`. Apply the shared contract. Commit: `feat(faq): Engineered Dark restyle`.

## Task 17: Restyle /onboarding
**File:** `src/app/onboarding/page.tsx` (large). Dead classes: `gradient-text neon-glow`, `bg-neon-mint/X`, `glass shadow-neon`. Apply the shared contract. Commit: `feat(onboarding): Engineered Dark restyle`.

## Task 18: Restyle /ai-salon-appointment-booking
**File:** `src/app/ai-salon-appointment-booking/page.tsx`. Dead classes: `gradient-text neon-glow` (and any `bg-neon-*` present). Apply the shared contract. Commit: `feat(ai-salon-booking): Engineered Dark restyle`.

## Task 19: Restyle /ai-receptionist-for-salons
**File:** `src/app/ai-receptionist-for-salons/page.tsx`. Dead classes: `gradient-text neon-glow` (and any `bg-neon-*` present). Apply the shared contract. Commit: `feat(ai-receptionist): Engineered Dark restyle`.
