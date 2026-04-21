import './globals.css'

export const metadata = {
  title: 'StoreBuilders — Build Your Online Store in Minutes',
  description:
    'StoreBuilders helps you launch and manage your e-commerce store on Shopify, eBay, and more — no technical skills required.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
