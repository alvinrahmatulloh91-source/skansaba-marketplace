'use client'

import { useState } from 'react'
import { MAJORS } from '@/types'
import { Filter, X } from 'lucide-react'

interface JurusanFilterProps {
  onFilterChange?: (slug: string | null) => void
  onTypeFilterChange?: (type: string | null) => void
}

export default function JurusanFilter({ 
  onFilterChange,
  onTypeFilterChange 
}: JurusanFilterProps) {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const handleMajorClick = (slug: string) => {
    const newSelection = selectedMajor === slug ? null : slug
    setSelectedMajor(newSelection)
    onFilterChange?.(newSelection)
  }

  const handleTypeClick = (type: string) => {
    const newSelection = selectedType === type ? null : type
    setSelectedType(newSelection)
    onTypeFilterChange?.(newSelection)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-[#0F2C59]" />
        <h3 className="font-bold text-lg text-[#0F2C59]">Filter Produk & Jasa</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">Berdasarkan Jurusan:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleMajorClick('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedMajor === 'all'
                  ? 'bg-[#0F2C59] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Jurusan
            </button>
            {MAJORS.map((major) => (
              <button
                key={major.slug}
                onClick={() => handleMajorClick(major.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedMajor === major.slug
                    ? 'bg-[#0F2C59] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {major.code}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm font-medium text-gray-700 mb-3">Berdasarkan Tipe:</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleTypeClick('PRODUCT')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedType === 'PRODUCT'
                  ? 'bg-[#F8DE22] text-[#0F2C59]'
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              📦 Produk
            </button>
            <button
              onClick={() => handleTypeClick('SERVICE')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedType === 'SERVICE'
                  ? 'bg-[#F8DE22] text-[#0F2C59]'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              🛠️ Jasa
            </button>
            {(selectedMajor || selectedType) && (
              <button
                onClick={() => {
                  setSelectedMajor(null)
                  setSelectedType(null)
                  onFilterChange?.(null)
                  onTypeFilterChange?.(null)
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Reset Filter
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
