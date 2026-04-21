import Link from 'next/link'
import { Check, Minus } from 'lucide-react'

export const metadata = {
  title: 'Pricing - StoreBuilders',
  description:
    'Build a dropshipping store for free and upgrade only if you want stronger products, better conversion, or hands-on help.',
  openGraph: {
    title: 'Pricing - StoreBuilders',
    description:
      'Choose from Free Build, Optimisation Pack, Winning Product Build, or Founder Build.',
    type: 'website',
  },
}

const tiers = [
  {
    tier: 'Tier 1',
    name: 'Free Build',
    price: 'Free',
    subtitle: 'Get started today',
    cta: 'Start Free',
    recommended: false,
    highValue: false,
    muted: false,
    items: [
      { label: 'Purpose:', value: 'Explore the idea', included: true },
      { label: 'Products:', value: '10 generic products', included: true },
      { label: 'Theme:', value: 'Clean standard', included: true },
      { label: 'Copy:', value: 'Basic copy, auto branding', included: true },
      { value: 'No support included', included: false },
    ],
  },
  {
    tier: 'Tier 2',
    name: 'Optimisation Pack',
    price: '$49-$99',
    subtitle: 'One-off payment',
    cta: 'Upgrade',
    recommended: true,
    highValue: false,
    muted: false,
    items: [
      { label: 'Purpose:', value: 'Sharper execution', included: true },
      { label: 'Products:', value: '25 filtered (same niche)', included: true },
      { label: 'Theme:', value: 'Premium, conversion-tuned', included: true },
      { label: 'Copy:', value: 'Persuasive copy, polished branding', included: true },
      { value: 'Standard support', included: true },
    ],
  },
  {
    tier: 'Tier 3',
    name: 'Winning Product Build',
    price: '$199-$299',
    subtitle: 'One-off payment',
    cta: 'Build Winning Store',
    recommended: false,
    highValue: false,
    muted: false,
    items: [
      { label: 'Purpose:', value: 'Single hero product strategy', included: true },
      { label: 'Products:', value: '1 AI-validated winner + upsells', included: true },
      { label: 'Theme:', value: 'Sales-optimised layout', included: true },
      { label: 'Copy:', value: 'Psychological copy, AI ad angles & TikTok hooks', included: true },
      { value: 'Strategy guidance', included: true },
    ],
  },
  {
    tier: 'Tier 4',
    name: 'Founder Build',
    price: '$499+',
    subtitle: 'Custom pricing',
    cta: 'Apply',
    recommended: false,
    highValue: true,
    muted: true,
    items: [
      { label: 'Purpose:', value: 'Technical co-founder for your store', included: true },
      { label: 'Products:', value: 'Private supplier sourcing', included: true },
      { label: 'Theme:', value: 'Custom human branding', included: true },
      { label: 'Copy:', value: 'Manual audit, priority build queue', included: true },
      { value: 'Hands-on help', included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Build a Dropshipping Store for Free.
            <br className="hidden md:block" /> Upgrade Only If You Want Better Odds.
          </h1>
          <p className="mb-8 text-lg text-blue-200">
            Start with a complete, working store. Upgrade only if you want stronger products,
            better conversion, or hands-on help.
          </p>
          <Link
            href="#pricing-cards"
            className="inline-block rounded-lg px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#38C695' }}
          >
            Start Free - No Credit Card
          </Link>
        </div>
      </section>

      <section id="pricing-cards" className="mx-auto max-w-6xl px-4 py-16">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          Choose your level of confidence
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-6 shadow-sm ${
                tier.recommended ? 'border-2 shadow-lg' : 'border-gray-200'
              } ${tier.muted ? 'bg-gray-50' : 'bg-white'}`}
              style={tier.recommended ? { borderColor: '#38C695' } : undefined}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="rounded-full px-4 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: '#38C695' }}
                  >
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    tier.recommended ? 'text-[#38C695]' : 'text-gray-400'
                  }`}
                >
                  {tier.tier}
                </span>
                <h2 className="mt-1 text-xl font-bold text-gray-900">{tier.name}</h2>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-3xl font-bold" style={{ color: '#1D3A63' }}>
                    {tier.price}
                  </p>
                  {tier.highValue && (
                    <span
                      className="rounded-full px-2.5 py-1 text-xs font-semibold"
                      style={{ backgroundColor: 'rgba(56,198,149,0.15)', color: '#1D3A63' }}
                    >
                      Highest Value
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-500">{tier.subtitle}</p>
              </div>

              <ul className="mb-6 flex-1 space-y-3 text-sm text-gray-600">
                {tier.items.map((item) => (
                  <li key={`${tier.name}-${item.value}`} className="flex items-start gap-2">
                    {item.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38C695]" />
                    ) : (
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
                    )}
                    <span className={item.included ? '' : 'text-gray-400'}>
                      {item.label ? <strong>{item.label} </strong> : null}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.name === 'Founder Build' ? '/contact' : '/auth'}
                className="block rounded-lg px-4 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#38C695' }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
        You never pay to &quot;unlock&quot; your store. You only pay if you want us to handle more
        of the thinking.
      </section>
    </>
  )
}
