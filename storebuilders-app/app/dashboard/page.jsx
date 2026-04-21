'use client'

import { Eye, RefreshCw, Store, LayoutDashboard, Settings } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from '@/components/ui'

const storesData = [
  { id: 1, name: 'Fashion Hub Pro', status: 'live', progress: 100, createdDate: '2025-12-15', owner: 'Sarah Johnson' },
  { id: 2, name: 'Tech Gadgets Store', status: 'building', progress: 65, createdDate: '2026-01-10', owner: 'Mike Chen' },
  { id: 3, name: 'Home Decor Boutique', status: 'live', progress: 100, createdDate: '2025-11-20', owner: 'Emma Williams' },
  { id: 4, name: 'Sports Equipment Plus', status: 'failed', progress: 45, createdDate: '2026-01-08', owner: 'James Brown' },
  { id: 5, name: 'Beauty & Cosmetics', status: 'pending', progress: 0, createdDate: '2026-01-11', owner: 'Lisa Anderson' },
  { id: 6, name: 'Electronics Mart', status: 'live', progress: 100, createdDate: '2025-10-05', owner: 'David Kim' },
]

const statsData = { totalStores: 6, activeBuilds: 1, failures: 1, liveStores: 3 }

const statusStyles = {
  building: 'bg-[#38C695] text-white',
  live: 'bg-[#28A745] text-white',
  failed: 'bg-[#DC3545] text-white',
  pending: 'bg-[#FFC107] text-gray-900',
}

const StatCard = ({ title, value, icon: Icon }) => (
  <Card className="bg-white border-gray-200 hover:border-[#38C695] transition-all duration-300">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-white/80">{title}</CardTitle>
      <Icon className="h-5 w-5 text-[#38C695]" />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </CardContent>
  </Card>
)

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Stores <span style={{ color: '#38C695' }}>Monitor</span>
        </h1>
        <p className="text-gray-500 mt-1">Manage and monitor all stores in your platform</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Stores" value={statsData.totalStores} icon={Store} />
        <StatCard title="Live Stores" value={statsData.liveStores} icon={LayoutDashboard} />
        <StatCard title="Active Builds" value={statsData.activeBuilds} icon={Settings} />
        <StatCard title="Failed Builds" value={statsData.failures} icon={RefreshCw} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: '#38C695' }}>
                {['Store Name', 'Owner', 'Status', 'Progress', 'Created Date', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {storesData.map((store, i) => (
                <tr key={store.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-6 py-4 text-gray-900 font-medium">{store.name}</td>
                  <td className="px-6 py-4 text-gray-600">{store.owner}</td>
                  <td className="px-6 py-4">
                    <Badge className={`${statusStyles[store.status]} font-medium px-3 py-1`}>
                      {store.status.charAt(0).toUpperCase() + store.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="h-2.5 rounded-full transition-all" style={{ width: `${store.progress}%`, backgroundColor: '#38C695' }} />
                      </div>
                      <span className="text-sm text-gray-600 min-w-[3rem]">{store.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{store.createdDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-[#38C695] hover:bg-[#2da97c] text-white">
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      {store.status === 'failed' && (
                        <Button size="sm" variant="outline" className="border-[#38C695] text-[#38C695]">
                          <RefreshCw className="h-4 w-4 mr-1" /> Rebuild
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
