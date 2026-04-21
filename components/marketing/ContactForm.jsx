'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Building2, MessageCircle, Phone, Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot anti-spam field: hidden from users, visible to bots.
    if (form.website.trim()) {
      return
    }

    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div
        className="rounded-xl border p-8 text-center"
        style={{ borderColor: '#38C695', backgroundColor: 'rgba(56,198,149,0.05)' }}
      >
        <p className="mb-1 text-lg font-semibold" style={{ color: '#38C695' }}>
          Message sent!
        </p>
        <p className="text-sm text-gray-500">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
          style={{ '--tw-ring-color': '#38C695' }}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
          style={{ '--tw-ring-color': '#38C695' }}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Phone <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+44 20 1234 5678"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
          style={{ '--tw-ring-color': '#38C695' }}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project or enquiry..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
          style={{ '--tw-ring-color': '#38C695' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: '#38C695' }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="mb-3 text-sm font-semibold text-gray-900">Message us directly</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 transition-colors hover:bg-green-100"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
          <Link
            href="https://t.me/YOUR_TELEGRAM_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
          >
            <Send className="h-4 w-4" />
            Telegram
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <p className="mb-2 text-sm font-semibold text-gray-900">Office Location</p>
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Building2 className="h-4 w-4 text-[#38C695]" />
          <span>Our offices in London, United Kingdom</span>
        </div>
        <p className="mb-2 text-sm font-semibold text-gray-900">Support hours</p>
        <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
        <p className="text-sm text-gray-500">Saturday - Sunday: Closed</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <Phone className="h-4 w-4 text-[#38C695]" />
          <span>Prefer email first? We usually reply within 24 hours.</span>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        All interactions are governed by our{' '}
        <Link href="/privacy" className="text-[#38C695] underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
