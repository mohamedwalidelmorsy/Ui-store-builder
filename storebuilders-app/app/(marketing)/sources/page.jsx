import Link from 'next/link'

export const metadata = {
  title: 'Sources - StoreBuilders',
  description:
    'Reference page summarising the kinds of platform, privacy, and e-commerce sources that inform StoreBuilders content and practices.',
  openGraph: {
    title: 'Sources - StoreBuilders',
    description: 'Reference page for the standards and source categories behind StoreBuilders content.',
    type: 'website',
  },
}

const sourceGroups = [
  {
    title: 'Platform Documentation',
    items: [
      'Shopify documentation and platform guidance for store setup, checkout, payments, and app integrations.',
      'Marketplace documentation such as eBay guidance for listings, seller operations, and marketplace requirements.',
      'WordPress and WooCommerce documentation for planned or future platform support.',
    ],
  },
  {
    title: 'Privacy and Compliance Standards',
    items: [
      'Privacy-law guidance related to GDPR, CCPA, and similar regional privacy standards.',
      'Security and payment standards such as SSL/TLS best practices and PCI-related payment handling guidance.',
      'Industry recommendations on customer data protection, retention, and responsible platform access.',
    ],
  },
  {
    title: 'E-commerce Best Practices',
    items: [
      'Research and best-practice material covering dropshipping operations, product merchandising, and conversion-focused store design.',
      'SEO and content guidelines used to improve product descriptions, metadata, and on-site discoverability.',
      'General industry analysis used to inform positioning, trust signals, and store optimisation decisions.',
    ],
  },
]

export default function SourcesPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Sources</h1>
          <p className="text-lg text-blue-200">
            The standards, documentation, and source categories that inform StoreBuilders content
            and service practices.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {sourceGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">{group.title}</h2>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Need More Detail?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              If you would like more detail on the materials or standards behind our service copy
              or privacy practices, contact{' '}
              <Link href="mailto:support@storebuilders.io" className="text-[#38C695] hover:underline">
                support@storebuilders.io
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
