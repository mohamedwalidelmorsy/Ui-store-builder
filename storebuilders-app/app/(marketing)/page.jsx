import Link from 'next/link'
import { ShieldCheck, Store, Target, Trophy, Zap } from 'lucide-react'

export const metadata = {
  title: 'StoreBuilders - Build Your Dropshipping Store in Minutes',
  description:
    'Build your AI-powered dropshipping store in minutes with automated setup, expert product sourcing, and SEO-ready content.',
  openGraph: {
    title: 'StoreBuilders - Build Your Dropshipping Store in Minutes',
    description:
      'The AI-powered platform that turns your dropshipping dreams into reality.',
    type: 'website',
  },
}

const featureCards = [
  {
    icon: Store,
    title: 'Automated Setup',
    description:
      'Comprehensive handling of store design, theme customization, and product import. Our AI builds your entire store based on your niche, complete with optimized layouts and conversion-focused pages.',
  },
  {
    icon: Target,
    title: 'Expert Sourcing',
    description:
      'Access to vetted, high-margin products through the exclusive TS Scout partner network. We connect you with reliable suppliers and trending products that sell.',
  },
  {
    icon: Trophy,
    title: 'Fully Branded',
    description:
      'Automatic generation of professional logos, color schemes, and themes perfectly tailored for your niche. Stand out with a unique brand identity from day one.',
  },
  {
    icon: Zap,
    title: 'SEO-Ready Content',
    description:
      'AI-generated product descriptions, meta tags, and SEO optimization to enhance visibility. Rank higher on Google and drive organic traffic to your store immediately.',
  },
]

const whyChoose = [
  {
    icon: Target,
    title: 'What is This?',
    description:
      'An AI-powered store builder that simplifies the creation of professional online shops. Our platform handles everything from design to product import automatically.',
  },
  {
    icon: Zap,
    title: 'Why Care?',
    description:
      'Save weeks of work and thousands of dollars. No coding expertise required. Launch your store in minutes, not months, and start selling immediately.',
  },
  {
    icon: Trophy,
    title: 'Why Us?',
    description:
      "Access to the TS Scout partner network for vetted products, professional design expertise, and AI-generated content that ranks. We're your complete ecommerce solution.",
  },
]

const trustBadges = [
  { icon: ShieldCheck, label: 'SSL Secured' },
  { icon: ShieldCheck, label: 'PCI Compliant' },
  { icon: ShieldCheck, label: 'Data Protected' },
  { icon: ShieldCheck, label: '99.9% Uptime' },
]

export default function HomePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 py-24 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(56,198,149,0.35),_transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold leading-tight md:text-6xl">
            Build Your <span className="text-[#38C695]">Dropshipping Store</span> in Minutes
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-200">
            Just tell us your niche and we&apos;ll do the rest. No coding required.
          </p>
          <Link
            href="/auth"
            className="inline-block rounded-lg px-10 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#38C695' }}
          >
            Start Building Now
          </Link>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#38C695]" />
              <span>AI-Powered Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#38C695]" />
              <span>Expert Product Sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#38C695]" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20" id="features">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1D3A63]">Why Choose StoreBuilders.io?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            The AI-powered platform that turns your dropshipping dreams into reality
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {whyChoose.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl p-8 text-center">
              <div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #38C695, #2da97c)' }}
              >
                <Icon className="h-9 w-9" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1D3A63]">{title}</h3>
              <p className="leading-7 text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20" id="benefits">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1D3A63]">Everything You Need to Succeed</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Powerful features that give you a competitive edge from day one
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border-l-4 border-[#38C695] bg-white p-8 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #38C695, #2da97c)' }}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#1D3A63]">{title}</h3>
                <p className="leading-7 text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-[#1D3A63]">Built with Security &amp; Trust</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Your data and your customers&apos; information are protected with industry-leading
            security
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[160px] flex-col items-center gap-3 rounded-xl bg-gray-50 px-6 py-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38C695] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-semibold text-[#1D3A63]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="px-4 py-20 text-white"
        id="signup"
        style={{ background: 'linear-gradient(135deg, #38C695, #2da97c)' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Launch Your Store?</h2>
          <p className="mb-8 text-lg text-white/90">
            Join thousands of successful entrepreneurs who started with StoreBuilders.io
          </p>
          <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border-0 px-5 py-4 text-gray-900 focus:outline-none"
            />
            <Link
              href="/auth"
              className="rounded-lg bg-[#1D3A63] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Building Now
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/80">
            No credit card required - 14-day free trial - Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}
