import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - StoreBuilders',
  description:
    'Learn how StoreBuilders collects, uses, protects, and shares your data when providing our e-commerce services.',
  openGraph: {
    title: 'Privacy Policy - StoreBuilders',
    description: 'How we collect, use, protect, and share your data.',
    type: 'website',
  },
}

const sections = [
  {
    title: 'Our Commitment to Your Privacy',
    paragraphs: [
      'We are dedicated to handling your personal information with the utmost care. At StoreBuilders.io, we understand that trust is fundamental to our relationship with you, and we take that responsibility seriously. Our approach to data collection and management is guided by principles of transparency, security, and respect for your privacy rights.',
    ],
  },
  {
    title: 'What Information We Collect',
    paragraphs: [
      `We collect only the details essential for providing our service: your contact information and, for Shopify integration, your store credentials. As Shopify advises, "we limit the information we collect to only what we really need." This minimal approach ensures that we maintain only the data necessary to deliver our core service whilst respecting your privacy.`,
      'The information we collect typically includes your name, email address, business details, and the credentials you provide for platform integrations such as Shopify. We do not collect unnecessary personal data, browsing history unrelated to our service, or any sensitive information beyond what is required for store setup and management.',
    ],
  },
  {
    title: 'How We Use Your Information',
    paragraphs: [
      'Your data is used exclusively to build and manage your store. This includes configuring your store via the Shopify API, setting up product catalogues, managing inventory connections, and maintaining the technical infrastructure of your e-commerce platform. We also use your email address to contact you regarding your store setup, provide customer support, send important service updates, and respond to your enquiries.',
      'Every piece of information we collect serves a specific, legitimate purpose directly related to delivering our store-building service. We do not use your data for unrelated marketing activities, nor do we analyse your information for purposes beyond improving our service delivery to you.',
    ],
  },
  {
    title: 'Payment Security',
    paragraphs: [
      "We do not store payment card details. All transactions are conducted through Shopify's secure checkout system, which maintains PCI DSS compliance and employs industry-leading security measures. This means that when you or your customers make purchases, sensitive financial information never passes through or is stored on our systems. Instead, it is handled directly by Shopify's trusted and certified payment infrastructure, providing you with the highest level of security and peace of mind.",
    ],
  },
  {
    title: 'Data Sharing and Third Parties',
    paragraphs: [
      'We do not sell or share your personal data with unrelated third parties. Your information is yours, and we respect that completely. However, we may share necessary information with our service partners when it is essential for fulfilling orders and delivering our service to you.',
      'For example, we share shipping and customer address details with dropshipping suppliers when fulfilling orders, just as any dropshipping operator would. These partners are carefully selected and are contractually obligated to protect your data and use it only for the specific purposes we authorise. We ensure that any third party we work with maintains appropriate security standards and respects privacy regulations.',
    ],
  },
  {
    title: 'Security Measures',
    paragraphs: [
      'We use industry-standard security practices to protect your information. This includes encryption of data both in transit and at rest, SSL certificates for secure connections, robust access controls to limit who can view your data, regular security audits and updates, and adherence to all relevant privacy regulations. As recommended in e-commerce guides, we ensure customer data protection and comply with privacy laws including GDPR, CCPA, and other applicable regulations depending on your location.',
    ],
  },
  {
    title: 'Your Rights and Our Full Policy',
    paragraphs: [
      "Our full Privacy Policy is publicly available and follows Shopify's standards and best practices. It provides comprehensive details about our data practices, including what data we collect both via Shopify's API and directly from you, how we use and retain this information, the legal basis for processing your data, and your rights under GDPR, CCPA, and other relevant privacy laws.",
      'You have the right to access your personal data at any time, request corrections to any inaccurate information, delete your data subject to legal retention requirements, opt out of marketing communications, restrict certain types of data processing, and receive a copy of your data in a portable format. To exercise any of these rights, simply contact us at support@storebuilders.io, and we will respond promptly.',
      'We may use cookies for session management, analytics to improve our service, and to remember your preferences. You have the option to control cookie settings through your browser, though some features of our service may require cookies to function properly. You also have the option to opt out of marketing communications at any time whilst continuing to receive essential service-related messages.',
      'Our policy clearly specifies data categories we collect, the purposes for which we use your information such as store setup, ongoing support, and service improvement, retention periods for different types of data, and comprehensive details about your rights as a data subject. We review and update our privacy practices regularly to ensure they remain current with evolving regulations and best practices.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-blue-200">
            Your privacy is our priority. Learn how we protect your data.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-2xl bg-gray-50 p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Privacy?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              If you have any questions about our privacy practices, how we handle your data, or
              wish to exercise any of your privacy rights, please do not hesitate to contact us.
              We are here to help and committed to transparency in all our data practices.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              <Link href="mailto:support@storebuilders.io" className="text-[#38C695] hover:underline">
                support@storebuilders.io
              </Link>
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
