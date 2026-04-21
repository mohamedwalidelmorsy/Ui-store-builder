import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - StoreBuilders',
  description:
    'Terms governing the use of StoreBuilders services, platform integrations, payments, and support.',
  openGraph: {
    title: 'Terms of Service - StoreBuilders',
    description: 'Terms governing the use of StoreBuilders services.',
    type: 'website',
  },
}

const sections = [
  {
    title: 'Service Scope',
    paragraphs: [
      'StoreBuilders provides e-commerce store-building services, design, automation support, product setup assistance, and related platform integrations. Our work is intended to help merchants launch and improve online stores efficiently.',
      'Service availability, supported platforms, and feature sets may evolve over time as we add capabilities such as new marketplace integrations and workflow improvements.',
    ],
  },
  {
    title: 'Account Access and Credentials',
    paragraphs: [
      'Where platform access is required, you are responsible for providing accurate credentials and ensuring you are authorised to grant StoreBuilders access to the relevant account.',
      'We use provided credentials solely for the purpose of configuring, maintaining, or improving the services you request. You remain responsible for the underlying store account, billing relationship, and compliance with third-party platform rules.',
    ],
  },
  {
    title: 'Payments and Upgrades',
    paragraphs: [
      'Some StoreBuilders offerings are free, while other services require one-off payments or custom pricing depending on the level of assistance requested. Any paid upgrade will be clearly presented before purchase.',
      'Third-party platform fees, payment processor fees, advertising spend, app subscriptions, and supplier costs are separate from StoreBuilders service fees unless explicitly stated otherwise.',
    ],
  },
  {
    title: 'Merchant Responsibilities',
    paragraphs: [
      'You remain responsible for your business operations, including product legality, supplier selection, tax compliance, customer communications, refunds, and adherence to marketplace or platform policies.',
      'StoreBuilders may provide recommendations, automation, and implementation support, but final business decisions and operational accountability remain with you.',
    ],
  },
  {
    title: 'Intellectual Property and Content',
    paragraphs: [
      'You retain ownership of your business assets, branding decisions, and store data, subject to any rights held by third-party platforms, suppliers, or service providers.',
      'StoreBuilders retains ownership of its proprietary tools, workflows, software, templates, and internal systems used to deliver the service unless otherwise agreed in writing.',
    ],
  },
  {
    title: 'Limitations and Availability',
    paragraphs: [
      'We aim to provide reliable, high-quality service, but we cannot guarantee specific revenue outcomes, product performance, search rankings, ad performance, or marketplace approval.',
      'Services may be updated, paused, or modified as needed for maintenance, security, supplier changes, or third-party platform changes.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="text-lg text-blue-200">
            The terms that govern your use of StoreBuilders services and platform support.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{section.title}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Questions About These Terms?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Contact us at{' '}
              <Link href="mailto:support@storebuilders.io" className="text-[#38C695] hover:underline">
                support@storebuilders.io
              </Link>{' '}
              if you need clarification before using the service.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
