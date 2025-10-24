
import Link from "next/link";
import type React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-background text-foreground py-4 px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-gelica">
            Tumbas
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-primary font-semibold">
              Blog
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
