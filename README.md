# Convo — AI Booking Front Desk for Salons

A futuristic, high-converting marketing website for Convo — a chat-first + voice-first booking system for salons.

![Convo](https://via.placeholder.com/1200x630/0a0a0f/00d4ff?text=Convo)

## ✨ Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **shadcn/ui** components
- **Dark/Light mode** with system preference detection
- **Fully responsive** design
- **SEO optimized** with metadata

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Landing page (/)
│   ├── globals.css         # Global styles
│   ├── product/
│   │   ├── layout.tsx      # Product page layout
│   │   └── page.tsx        # Product page (/product)
│   ├── demo/
│   │   ├── layout.tsx      # Demo page layout
│   │   └── page.tsx        # Demo page (/demo)
│   ├── pricing/
│   │   ├── layout.tsx      # Pricing page layout
│   │   └── page.tsx        # Pricing page (/pricing)
│   └── contact/
│       ├── layout.tsx      # Contact page layout
│       └── page.tsx        # Contact page (/contact)
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── badge.tsx
│   ├── navbar.tsx          # Navigation header
│   ├── footer.tsx          # Site footer
│   ├── theme-provider.tsx  # Dark/light mode provider
│   ├── background-effects.tsx  # Floating blobs, grid, particles
│   └── animations.tsx      # Reusable animation components
└── lib/
    └── utils.ts            # Utility functions (cn)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project folder:

```bash
cd /path/to/Saas
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors

- **Primary**: Neon Blue (`#00d4ff`)
- **Accent**: Neon Purple (`#a855f7`)
- **Secondary**: Neon Pink (`#ec4899`)
- **Success**: Mint Green (`#34d399`)

### Typography

- **Font Family**: Inter (sans-serif)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight

### Effects

- Glassmorphism cards with backdrop blur
- Gradient borders
- Subtle noise texture
- Floating animated blobs
- Neon glow shadows

## 📄 Pages

### Landing Page (`/`)
- Hero section with CTA buttons
- Social proof strip
- 3-mode product cards (Chat, Voice, Dashboard)
- Animated "How it works" timeline
- Feature grid (9 features)
- Call summaries section with UI mock
- Calendar invite & confirmations section
- Integrations strip (Twilio, Vercel, Neon, OpenAI)
- Testimonials carousel
- Pricing teaser
- Final CTA

### Product Page (`/product`)
- Deep dive into Chat Booking
- Deep dive into Voice Agent
- Deep dive into Owner Dashboard
- Coming soon features (Memory, SMS, Google Maps)
- Architecture diagram

### Demo Page (`/demo`)
- Interactive chat booking mock with animated conversation
- Voice agent transcript mock with latency indicators
- Dashboard mock with tabs (Services, Calls, Customers)
- Live demo script for presentations

### Pricing Page (`/pricing`)
- 3-tier pricing cards (Starter, Pro, Enterprise)
- Monthly/Annual toggle with 20% savings
- Optional add-ons section
- Feature comparison table
- FAQ accordion

### Contact Page (`/contact`)
- Contact form with interest selection
- Email fallback (mailto)
- Contact info cards
- Office locations

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)

2. Import your project to [Vercel](https://vercel.com/new)

3. Vercel will automatically detect Next.js and configure the build settings

4. Click "Deploy" and your site will be live!

Alternatively, deploy from the command line:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required for the marketing site. It's fully static with no backend dependencies.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Screen reader friendly

## 🔍 SEO

- Metadata configured for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Semantic heading hierarchy
- Fast loading (optimized for Core Web Vitals)

## 📄 License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for modern salons
