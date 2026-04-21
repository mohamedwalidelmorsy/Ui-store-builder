import Link from 'next/link'

export const metadata = {
  title: 'About Us - StoreBuilders',
  description:
    'Learn about the StoreBuilders team, our approach, and our mission to help entrepreneurs launch exceptional e-commerce stores.',
  openGraph: {
    title: 'About Us - StoreBuilders',
    description: 'Building exceptional e-commerce experiences with expertise, care, and purpose.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="text-lg text-blue-200">
            Building exceptional e-commerce experiences with expertise, care, and purpose
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">
          <div className="space-y-6">
            <p>
              At StoreBuilders.io, our dedicated small team brings over seven years of hands-on
              experience in e-commerce, software development, and design. We possess a deep
              understanding of dropshipping, having successfully launched numerous online stores
              across a variety of niches such as fashion, technology, and home goods. Our founders
              come from developer and designer backgrounds, allowing us to expertly blend visually
              appealing storefronts with robust back-end functionality.
            </p>
            <p>
              We are specialists in Shopify, with forthcoming support for eBay and WordPress
              integration. Our expertise covers everything from developing bespoke themes and
              working with APIs to crafting optimised product descriptions and building intuitive
              user interfaces. Our lead designer ensures every store adheres to contemporary UI/UX
              standards and is fully responsive, providing your customers with a seamless,
              mobile-first shopping experience.
            </p>
          </div>

          <div className="mx-auto mt-12 h-[3px] w-16 bg-gradient-to-r from-[#1D3A63] to-[#38C695]" />

          <h2 className="py-10 text-center text-3xl font-semibold text-gray-900">Our Approach</h2>
          <div className="space-y-6">
            <p>
              We take pride in being both merchant-minded and tech-savvy. Recognising that each
              brand has its own story, our design team creates a distinctive visual identity,
              including logo, colour palette, and layout, for every client. Simultaneously, our
              developers take care of the technical complexities: sourcing products, syncing
              inventory, and configuring checkout processes, so you receive a polished online shop
              with minimal effort required on your part.
            </p>
            <p>
              Having accumulated years of experience in store creation and optimisation, we keep
              up-to-date with the latest trends in dropshipping and artificial intelligence. We
              implement tried-and-tested best practices, always referencing industry research, to
              ensure your store is not only launched swiftly but also set up for long-term success.
            </p>
          </div>

          <div className="mx-auto mt-12 h-[3px] w-16 bg-gradient-to-r from-[#1D3A63] to-[#38C695]" />

          <h2 className="py-10 text-center text-3xl font-semibold text-gray-900">Our Mission</h2>
          <div className="space-y-6">
            <p>
              Above all, we are passionate about empowering entrepreneurs. StoreBuilders.io was
              founded to enable anyone to start an online business, regardless of technical
              ability. Our collective knowledge is your advantage, resulting in faster setups,
              fewer complications, and a professional outcome.
            </p>
            <p>
              We operate with complete transparency, so you are always informed about our process,
              and we offer support at every stage. For any queries or bespoke requirements, our
              in-house team is ready to assist. In short: share your vision with us, and our
              experienced professionals will bring it to life, freeing you to focus on growing your
              brand.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-20 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-blue-200">
            Let&apos;s work together to bring your e-commerce vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#38C695' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
