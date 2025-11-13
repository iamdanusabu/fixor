"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur supports-[backdrop-filter]:bg-[#f9f0eb]/60" style={{ backgroundColor: '#f9f0eb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/bravio-logo-new.png"
            alt="Bravio logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-lg text-foreground font-sans">
            Bravio
          </span>
          <span className="text-xs text-foreground">™</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            <a href="/#features" className="text-sm text-black hover:text-gray-600 transition font-inter">
              Features
            </a>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
          <div className="flex items-center gap-1">
            <a href="/#resources" className="text-sm text-black hover:text-gray-600 transition font-inter">
              Resources
            </a>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
          <div className="flex items-center gap-1">
            <a href="/#developers" className="text-sm text-black hover:text-gray-600 transition font-inter">
              Developers
            </a>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
          <a href="/#integrations" className="text-sm text-black hover:text-gray-600 transition font-inter">
            Integrations
          </a>
          <a href="/#customers" className="text-sm text-black hover:text-gray-600 transition font-inter">
            Customers
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* --- NAVBAR BUTTON UPDATED --- */}
          <div className="bg-gradient-to-r from-green-600 to-pink-500 rounded-lg p-0.5">
            <Link
              href="/demo"
              className="block bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md w-full transition-colors text-center"
            >
              Book a Meeting
            </Link>
          </div>
          {/* --- END OF UPDATE --- */}
        </div>
      </div>
    </nav>
  )
}
