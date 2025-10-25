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
  title: "Bravio - Best-in-Class FSM Software for Biomedical Equipment Service | Automated Service Reports",
  description: "Bravio is the leading Field Service Management software for biomedical equipment service companies. Automate service reports, streamline work orders, ensure compliance, and manage medical device maintenance with our best-in-class platform built for small to medium healthcare technology businesses.",
  keywords: [
    "Bravio FSM",
    "biomedical equipment service software",
    "automated service reports medical devices",
    "biomed service management automation",
    "best FSM for healthcare equipment",
    "medical device service automation",
    "automated biomed reporting",
    "hospital equipment maintenance software",
    "field service management healthcare",
    "CMMS for biomedical equipment",
    "medical equipment work order automation",
    "biomed technician software",
    "healthcare technology management",
    "medical device compliance automation",
    "preventive maintenance automation",
    "biomedical asset management",
    "HTM software automation",
    "service report generation medical equipment",
    "biomed workflow automation",
    "medical equipment tracking software"
  ],
  authors: [{ name: "Bravio" }],
  creator: "Bravio",
  publisher: "Bravio",
  generator: "v0.app",
  applicationName: "Bravio",
  referrer: "origin-when-cross-origin",
  category: "Healthcare Technology Management Software",
  classification: "Business Automation Software",
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getbravio.app",
    siteName: "Bravio - Biomedical Equipment Service Management",
    title: "Bravio - Automate Service Reports & Biomedical Equipment Management",
    description: "Best-in-class FSM software for biomedical equipment service companies. Automate service reports, work orders, compliance tracking, and all your service management needs in one powerful platform.",
    images: [
      {
        url: "https://getbravio.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bravio Biomedical Equipment Service Management Dashboard - Automated Service Reports",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Bravio - Best FSM for Biomedical Equipment Service",
    description: "Automate service reports and streamline biomedical equipment management with Bravio's best-in-class FSM software",
    images: ["https://getbravio.app/twitter-image.jpg"],
    creator: "@bravio",
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Additional metadata
  alternates: {
    canonical: "https://getbravio.app",
  },
  
  // App-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bravio FSM",
  },
  
  formatDetection: {
    telephone: false,
  },
  
  // Manifest for PWA (if applicable)
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Bravio",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "Contact for pricing",
                "priceCurrency": "USD"
              },
              "description": "Best-in-class Field Service Management software for biomedical equipment service companies with automated service report generation and comprehensive workflow automation",
              "audience": {
                "@type": "Audience",
                "audienceType": "Small to Medium Biomedical Equipment Service Companies"
              },
              "featureList": [
                "Automated service report generation",
                "Work order management and automation",
                "Preventive maintenance scheduling",
                "Compliance tracking and documentation",
                "Inventory management",
                "Technician dispatch and routing",
                "Real-time reporting and analytics",
                "Mobile app for field technicians",
                "Medical device asset tracking",
                "Integration with existing systems"
              ],
              "screenshot": "https://getbravio.app/screenshots/dashboard.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "1",
                "bestRating": "5"
              }
            })
          }}
        />
        
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bravio",
              "url": "https://getbravio.app",
              "logo": "https://getbravio.app/logo.png",
              "description": "Leading provider of Field Service Management software for biomedical equipment service companies",
              "sameAs": [
                "https://www.linkedin.com/company/bravio",
                "https://twitter.com/bravio",
                "https://www.facebook.com/bravio"
              ]
            })
          }}
        />
        
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://getbravio.app"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "FSM Software",
                  "item": "https://getbravio.app/features"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${gelica.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}