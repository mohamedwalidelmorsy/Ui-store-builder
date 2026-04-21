import { Clock, Mail, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/marketing/ContactForm'

export const metadata = {
  title: 'Contact Us - StoreBuilders',
  description: 'Get in touch with the StoreBuilders team. We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact Us - StoreBuilders',
    description: 'Reach out to our team - we respond within 24 hours.',
    type: 'website',
  },
}

const info = [
  { icon: Mail, title: 'Email Us', detail: 'support@storebuilders.io' },
  { icon: Clock, title: 'Response Time', detail: 'Within 24 hours on business days' },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    detail: 'Available in-app for Pro & Enterprise customers',
  },
]

export default function ContactPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-blue-200 text-lg">
            Have a question or want to chat about your store? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: '#1D3A63' }}>
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: '#1D3A63' }}>
              Other ways to reach us
            </h2>
            <div className="space-y-6">
              {info.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(56,198,149,0.1)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#38C695' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
