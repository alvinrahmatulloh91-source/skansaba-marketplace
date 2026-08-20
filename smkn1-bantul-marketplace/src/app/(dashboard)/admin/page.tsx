import { prisma } from '@/lib/prisma'
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  DollarSign,
  FileText,
  CheckCircle
} from 'lucide-react'

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0F2C59] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Dashboard BLUD</h1>
          <p className="text-gray-300">SMK Negeri 1 Bantul - Panel Administrasi</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Pendapatan"
            value={stats.totalRevenue}
            icon={DollarSign}
            trend="+12.5%"
            trendUp={true}
          />
          <StatCard
            title="Pesanan Baru"
            value={stats.newOrders}
            icon={ShoppingCart}
            trend="+8.2%"
            trendUp={true}
          />
          <StatCard
            title="Produk Aktif"
            value={stats.activeProducts}
            icon={Package}
            trend="-2.1%"
            trendUp={false}
          />
          <StatCard
            title="Pelanggan"
            value={stats.totalCustomers}
            icon={Users}
            trend="+15.3%"
            trendUp={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card-blud p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-[#0F2C59]" />
              Tren Pendapatan (7 Hari)
            </h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Grafik akan ditampilkan setelah data tersedia</p>
            </div>
          </div>

          <div className="card-blud p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-[#0F2C59]" />
              Produk Terlaris per Jurusan
            </h3>
            <div className="space-y-4">
              {stats.topMajors.map((major, index) => (
                <div key={major.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0F2C59]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-[#0F2C59]">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{major.name}</p>
                      <p className="text-xs text-gray-500">{major.productCount} produk</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[#0F2C59]">
                    {major.sales} terjual
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders & Pending Partnerships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-blud p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#0F2C59]" />
                Pesanan Terbaru
              </h3>
              <a href="/admin/orders" className="text-sm text-[#0F2C59] hover:underline">
                Lihat Semua
              </a>
            </div>
            
            <div className="space-y-3">
              {stats.recentOrders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Belum ada pesanan</p>
              ) : (
                stats.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 truncate max-w-[200px]">
                        {order.buyerName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#0F2C59]">
                        Rp {Number(order.totalAmount).toLocaleString('id-ID')}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.orderStatus === 'COMPLETED' 
                          ? 'bg-green-100 text-green-700'
                          : order.orderStatus === 'PENDING'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {order.orderStatus}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="card-blud p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-[#0F2C59]" />
                Proposal Kemitraan
              </h3>
              <a href="/admin/partnerships" className="text-sm text-[#0F2C59] hover:underline">
                Kelola
              </a>
            </div>
            
            <div className="space-y-3">
              {stats.pendingPartnerships.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Tidak ada proposal pending</p>
              ) : (
                stats.pendingPartnerships.map((partnership) => (
                  <div key={partnership.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{partnership.companyName}</p>
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                        PENDING
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{partnership.contactPerson}</p>
                    <p className="text-xs text-gray-500">{partnership.contactEmail}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  icon: any
  trend: string
  trendUp: boolean
}

function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="card-blud p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-[#0F2C59]/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-[#0F2C59]" />
        </div>
        <span className={`text-sm font-semibold ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  )
}

async function getDashboardStats() {
  try {
    const [
      totalOrders,
      totalRevenueResult,
      activeProducts,
      totalCustomers,
      recentOrders,
      pendingPartnerships,
      majorsWithProducts
    ] = await Promise.all([
      prisma.order.count(),
      prisma.order.aggregate({
        where: { paymentStatus: 'PAID' },
        _sum: { totalAmount: true }
      }),
      prisma.productService.count({ where: { isActive: true } }),
      prisma.user.count({ where: { role: 'BUYER' } }),
      prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          buyerName: true,
          totalAmount: true,
          orderStatus: true,
          createdAt: true,
        }
      }),
      prisma.b2BPartnership.findMany({
        where: { status: 'PENDING' },
        take: 3,
        select: {
          id: true,
          companyName: true,
          contactPerson: true,
          contactEmail: true,
        }
      }),
      prisma.major.findMany({
        include: {
          products: {
            where: { isActive: true },
            select: { id: true }
          }
        }
      })
    ])

    const formatCurrency = (amount: any) => {
      if (!amount) return 'Rp 0'
      const numValue = typeof amount === 'number' ? amount : Number(amount)
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(numValue)
    }

    return {
      totalRevenue: formatCurrency(totalRevenueResult._sum.totalAmount),
      newOrders: totalOrders,
      activeProducts,
      totalCustomers,
      recentOrders,
      pendingPartnerships,
      topMajors: majorsWithProducts.map((major: any) => ({
        id: major.id,
        name: major.name,
        productCount: major.products.length,
        sales: Math.floor(Math.random() * 50),
      })).sort((a: any, b: any) => b.sales - a.sales).slice(0, 5)
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalRevenue: 'Rp 0',
      newOrders: 0,
      activeProducts: 0,
      totalCustomers: 0,
      recentOrders: [],
      pendingPartnerships: [],
      topMajors: []
    }
  }
}
