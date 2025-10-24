import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const gelica = localFont({
  src: [
    {
      path: "../public/fonts/gelica-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gelica",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${gelica.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
