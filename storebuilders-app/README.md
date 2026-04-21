# StoreBuilders App

E-commerce store builder SaaS — built with **Next.js 15 App Router**, Tailwind CSS v4, and React 19.

---

## Getting Started

```bash
cd storebuilders-app
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # production server
```

---

## Project Structure

```
storebuilders-app/
├── app/
│   ├── layout.jsx                        # Root layout — html, body, global CSS only
│   ├── globals.css                       # Tailwind v4 import
│   │
│   ├── (marketing)/                      # Route group — public SEO pages
│   │   ├── layout.jsx                    # Adds Navbar + Footer
│   │   ├── page.jsx                      # / — Homepage
│   │   ├── about/page.jsx                # /about
│   │   ├── pricing/page.jsx              # /pricing
│   │   ├── contact/page.jsx              # /contact
│   │   └── blog/page.jsx                 # /blog
│   │
│   ├── auth/page.jsx                     # /auth — standalone login/signup
│   │
│   └── dashboard/
│       ├── layout.jsx                    # Dashboard shell (server component)
│       ├── page.jsx                      # /dashboard — stores monitor
│       ├── store-builder/page.jsx        # /dashboard/store-builder
│       └── ebay/page.jsx                 # /dashboard/ebay
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx                    # Client — active link via usePathname
│   │   └── Footer.jsx                    # Server component
│   ├── marketing/
│   │   ├── AuthContent.jsx               # Client — login/signup form logic
│   │   ├── BlogContent.jsx               # Client — blog with search/filter state
│   │   └── ContactForm.jsx               # Client — contact form with state
│   ├── dashboard/
│   │   └── DashboardSidebar.jsx          # Client — active nav via usePathname
│   └── ui/
│       └── index.jsx                     # Headless UI library (Button, Card, Input…)
│
├── public/                               # Static assets
├── next.config.mjs
├── postcss.config.mjs                    # Tailwind v4 PostCSS adapter
└── jsconfig.json                         # Path alias: @/ → ./
```

---

## Routes

| URL | Page | Type |
|-----|------|------|
| `/` | Homepage | SSG Server Component |
| `/about` | About Us | SSG Server Component |
| `/pricing` | Pricing | SSG Server Component |
| `/contact` | Contact | SSG Server Component |
| `/blog` | Blog | SSG Server Component |
| `/auth` | Login / Sign Up | SSG Server Component |
| `/dashboard` | Stores Monitor | SSG Server Component |
| `/dashboard/store-builder` | Store Builder Wizard | SSG Server Component |
| `/dashboard/ebay` | eBay Coming Soon | SSG Server Component |

---

## Architecture Decisions

### Route Groups
- `(marketing)` wraps public pages with Navbar + Footer. The group name does **not** appear in the URL.
- Dashboard has its own layout with sidebar navigation — no Navbar/Footer.

### Server vs Client Components
- All **pages** are Server Components — metadata exports work, SSG applies.
- Interactive UI (forms, active nav, search state) is isolated into small `'use client'` components inside `components/`.

### Layout Hierarchy
```
RootLayout (server)
├── (marketing)/layout (server) → Navbar (client) + Footer (server)
│   └── page (server)
├── auth/page (server) → AuthContent (client)
└── dashboard/layout (server) → DashboardSidebar (client)
    └── page (server)
```

### Styling
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Brand colors: primary `#38C695` (teal), secondary `#1D3A63` (navy)
- No custom `tailwind.config.js` — using v4 defaults

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | App Router, SSG, metadata |
| React | 19 | UI |
| Tailwind CSS | 4 | Styling |
| Lucide React | latest | Icons |
| Radix UI | latest | Headless primitives |
| clsx + tailwind-merge | latest | Class utilities |
