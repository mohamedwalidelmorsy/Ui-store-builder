<div align="center">

# StoreBuilders.io <!-- ci-verify -->

**Launch a fully configured, AI-powered Shopify dropshipping store in minutes — not months.**

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](https://bayu.tsscout.ai) · [Report Bug](https://github.com/mohamedwalidelmorsy/Ui-store-builder/issues) · [Request Feature](https://github.com/mohamedwalidelmorsy/Ui-store-builder/issues)

</div>

---

## Overview

StoreBuilders.io is an AI-driven SaaS platform that automates the end-to-end creation of professional Shopify dropshipping stores. Users provide a niche and Shopify credentials; the platform handles theme customization, AI-generated branding, curated product import from vetted suppliers, SEO-ready copy, and full payment/shipping configuration — all without a single line of code from the merchant.

---

## Architecture

```
storebuilders-app/
├── app/                         # Next.js App Router
│   ├── (marketing)/             # Route group — public marketing pages
│   │   ├── page.jsx             # Landing page
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── pricing/
│   │   ├── privacy/
│   │   ├── sources/
│   │   └── terms/
│   ├── auth/                    # Authentication flow
│   ├── dashboard/               # Protected dashboard
│   │   ├── page.jsx             # Dashboard home
│   │   ├── store-builder/       # Multi-step store creation wizard
│   │   └── ebay/                # eBay product integration
│   ├── globals.css
│   └── layout.jsx               # Root layout with metadata
├── components/
│   ├── dashboard/               # Dashboard-specific components
│   ├── layout/                  # Navbar, Footer
│   ├── marketing/               # Landing page sections
│   └── ui/                      # Headless UI primitives (Radix-based)
├── public/                      # Static assets
├── next.config.mjs
├── postcss.config.mjs
└── jsconfig.json
```

**Core Stack**

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, RSC) |
| UI Runtime | React 19 |
| Styling | Tailwind CSS 4 + PostCSS |
| Component Primitives | Radix UI (Checkbox, Tabs, Slot) |
| Icon System | Lucide React |
| Class Utilities | clsx · tailwind-merge · class-variance-authority |
| Deployment | PM2 + Nginx reverse proxy (Ubuntu 24.04) |

---

## Key Features

- **AI-Powered Store Generation** — Niche-aware theme selection, brand name generation, color palette and logo creation, all automated.
- **Multi-Step Guided Wizard** — 4-step onboarding flow: store info → platform selection → Shopify account connection → review & launch.
- **Curated Product Sourcing** — Integration with TS Scout partner network, AliExpress, and Amazon for high-margin, vetted products.
- **SEO-Ready Content Pipeline** — AI-generated product titles, descriptions, and meta tags optimized for organic search visibility.
- **Multi-Platform Roadmap** — Shopify fully supported; WooCommerce and eBay integrations in active development.
- **Marketing Site** — Full public-facing site with landing page, pricing, blog, legal pages, and contact form.
- **Dashboard & Analytics** — Centralized dashboard with eBay product data panel.
- **Security-First Design** — SSL/TLS throughout, 256-bit credential encryption, PCI-compliant data handling.

---

## Getting Started

### Prerequisites

- Node.js ≥ 20.x
- npm ≥ 10.x (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone git@github.com:mohamedwalidelmorsy/Ui-store-builder.git
cd Ui-store-builder

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
# → Edit .env.local with your credentials (see API Configuration below)

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
# or via PM2:
pm2 start npm --name "storebuilders-app" -- run start
pm2 save
```

---

## API Configuration

Create a `.env.local` file in the project root. Use `.env.example` as the template:

```env
# ── Application ───────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=StoreBuilders

# ── Shopify Partner API ────────────────────────────────────────
SHOPIFY_API_KEY=your_shopify_api_key
SHOPIFY_API_SECRET=your_shopify_api_secret
SHOPIFY_SCOPES=write_products,write_themes,write_shipping

# ── AI / LLM Provider ─────────────────────────────────────────
OPENAI_API_KEY=sk-...

# ── Database ──────────────────────────────────────────────────
DATABASE_URL=postgresql://user:password@localhost:5432/storebuilders

# ── Authentication ────────────────────────────────────────────
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
NEXTAUTH_URL=https://yourdomain.com

# ── TS Scout Partner API ──────────────────────────────────────
TS_SCOUT_API_KEY=your_ts_scout_key
TS_SCOUT_API_URL=https://api.tsscout.ai
```

> **Security:** Never commit `.env.local`. It is excluded by `.gitignore`.

---

## Deployment

### Nginx Reverse Proxy

```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

### PM2 Process Management

```bash
pm2 start npm --name "storebuilders-app" -- run start
pm2 startup   # enable auto-start on reboot
pm2 save
```

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch conventions, commit message standards, and the pull request process.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">
Built with precision by <a href="https://github.com/mohamedwalidelmorsy">Mohamed Walid El-Morsy</a>
</div>
