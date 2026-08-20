'use client'

import { useState } from 'react'
import { Award, Code, Palette, Briefcase, TrendingUp } from 'lucide-react'

const majors = [
  {
    id: 'rpl',
    name: 'RPL',
    fullName: 'Rekayasa Perangkat Lunak',
    icon: Code,
    color: '#0F2C59',
    description: 'Pengembangan aplikasi web, mobile, dan desktop dengan teknologi terkini',
    specialties: ['Web Development', 'Mobile Apps', 'Software Engineering', 'UI/UX Design'],
  },
  {
    id: 'dkv',
    name: 'DKV',
    fullName: 'Desain Komunikasi Visual',
    icon: Palette,
    color: '#C9A063',
    description: 'Desain grafis, branding, multimedia, dan konten kreatif digital',
    specialties: ['Graphic Design', 'Branding', 'Video Production', 'Animation'],
  },
  {
    id: 'mplb',
    name: 'MPLB',
    fullName: 'Manajemen Perkantoran & Layanan Bisnis',
    icon: Briefcase,
    color: '#1a3d7a',
    description: 'Administrasi perkantoran modern dan layanan bisnis profesional',
    specialties: ['Office Management', 'Business Services', 'Documentation', 'Customer Service'],
  },
  {
    id: 'akl',
    name: 'AKL',
    fullName: 'Akuntansi Keuangan Lembaga',
    icon: TrendingUp,
    color: '#2d5a8f',
    description: 'Pengelolaan keuangan, akuntansi, dan layanan keuangan institusi',
    specialties: ['Financial Accounting', 'Bookkeeping', 'Tax Services', 'Financial Analysis'],
  },
  {
    id: 'pm',
    name: 'PM',
    fullName: 'Pemasaran',
    icon: Award,
    color: '#3d7abf',
    description: 'Strategi pemasaran digital, retail, dan pengembangan bisnis',
    specialties: ['Digital Marketing', 'Retail Management', 'Sales', 'Business Development'],
  },
]

interface JurusanFilterProps {
  selectedMajor?: string
  onFilterChange?: (majorId: string | undefined) => void
}

export function JurusanFilter({ selectedMajor, onFilterChange }: JurusanFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | undefined>(selectedMajor)

  const handleFilterClick = (majorId: string) => {
    const newFilter = activeFilter === majorId ? undefined : majorId
    setActiveFilter(newFilter)
    onFilterChange?.(newFilter)
  }

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => handleFilterClick('all')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeFilter === undefined
              ? 'bg-[#0F2C59] text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Semua Jurusan
        </button>
        {majors.map((major) => {
          const Icon = major.icon
          return (
            <button
              key={major.id}
              onClick={() => handleFilterClick(major.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === major.id
                  ? 'bg-[#0F2C59] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{major.name}</span>
            </button>
          )
        })}
      </div>

      {/* Major Cards - Show on hover or when filtered */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {majors.map((major) => {
          const Icon = major.icon
          return (
            <div
              key={major.id}
              className="card-blud p-4 cursor-pointer hover:shadow-lg transition-all duration-300 group"
              onClick={() => handleFilterClick(major.id)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div 
                  className="p-3 rounded-full group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${major.color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: major.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{major.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{major.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
