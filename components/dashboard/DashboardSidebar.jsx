'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Store, Users, Settings, LogOut } from 'lucide-react'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/store-builder', icon: Store, label: 'Store Builder' },
  { href: '/dashboard/ebay', icon: Store, label: 'eBay' },
  { href: '/dashboard/users', icon: Users, label: 'Users' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-16 md:w-64 flex-shrink-0 bg-white min-h-screen flex flex-col border-r border-gray-200 transition-all duration-200">
      {/* Brand */}
      <div className="p-3 md:p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
          <div
            className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#38C695' }}
          >
            <Store className="h-6 w-6 text-white" />
          </div>
          <div className="hidden md:block overflow-hidden">
            <p className="text-base font-bold text-gray-900 truncate">StoreBuilders</p>
            <p className="text-xs text-gray-500 truncate">Admin Portal</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 md:p-4 space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 rounded-lg transition-all text-sm font-medium min-w-0 ${
                active
                  ? 'text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              style={
                active
                  ? { background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)' }
                  : {}
              }
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="hidden md:inline truncate">{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 md:p-4 border-t border-gray-200">
        <Link
          href="/auth"
          title="Logout"
          className="flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 rounded-lg text-gray-600 hover:bg-red-500 hover:text-white transition-all text-sm font-medium"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className="hidden md:inline">Logout</span>
        </Link>
      </div>
    </aside>
  )
}
