import Link from 'next/link'

const footerLinks = {
  Product: [
    { href: '/pricing', label: 'Pricing' },
    { href: '/dashboard/store-builder', label: 'Store Builder' },
    { href: '/dashboard/ebay', label: 'eBay Integration' },
    { href: '/blog', label: 'Blog' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sources', label: 'Sources' },
  ],
  Account: [
    { href: '/auth', label: 'Sign In' },
    { href: '/auth', label: 'Get Started' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1D3A63' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: '#38C695' }}
              >
                SB
              </div>
              <span className="font-bold text-lg">StoreBuilders</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Build and manage your online store in minutes. No technical skills required.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} StoreBuilders. All rights reserved.
          </p>
          <p className="text-xs text-blue-400">
            SSL Secured &bull; 256-bit Encryption &bull; GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
