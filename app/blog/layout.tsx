import type React from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // --- EDITED THIS LINE ---
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#f9f0eb" }}
    >
      <nav className="sticky top-0 z-50 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">b</span>
  </div>
  <span className="font-bold text-lg text-foreground font-sans">
    Bravio
  </span>
  <span className="text-xs text-foreground">™</span>
</Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              <a
                href="#features"
                className="text-sm text-foreground hover:text-gray-600 transition font-inter"
              >
                Features
              </a>
              <ChevronDown className="w-4 h-4 text-foreground" />
            </div>
            <div className="flex items-center gap-1">
              <a
                href="#resources"
                className="text-sm text-foreground hover:text-gray-600 transition font-inter"
              >
                Resources
              </a>
              <ChevronDown className="w-4 h-4 text-foreground" />
            </div>
            <div className="flex items-center gap-1">
              <a
                href="#developers"
                className="text-sm text-foreground hover:text-gray-600 transition font-inter"
              >
                Developers
              </a>
              <ChevronDown className="w-4 h-4 text-foreground" />
            </div>
            <a
              href="#integrations"
              className="text-sm text-foreground hover:text-gray-600 transition font-inter"
            >
              Integrations
            </a>
            <a
              href="#customers"
              className="text-sm text-foreground hover:text-gray-600 transition font-inter"
            >
              Customers
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-foreground" />

            {/* --- NAVBAR BUTTON UPDATED --- */}
            <div className="bg-gradient-to-r from-green-600 to-pink-500 rounded-lg p-0.5">
              <Link
                href="#waitlist"
                className="block bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md w-full transition-colors text-center"
              >
                Start a free trial
              </Link>
            </div>
            {/* --- END OF UPDATE --- */}
          </div>
        </div>
      </nav>
      {/* The main content will sit on top of the #f9f0eb background */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}