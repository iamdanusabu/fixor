import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Ensure these font paths are exactly correct for your project structure
const gelica = localFont({
  src: [
    {
      path: "../public/fonts/gelica-regular.otf",
      weight: "400",
      style: "normal",
    },
    // If you have bold/medium weights, add them here for better rendering
  ],
  variable: "--font-gelica",
  display: "swap", // Improves loading performance
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  // Putting "Biomedical" first can sometimes help slightly with immediate user relevance in SERPs
  title: "Biomedical Field Service Software for ISO & HTM Teams | Bravio",
  description:
    "Bravio is the FSM software built for biomedical and ISO service teams. Automate work orders, ISO compliance, PM schedules, and asset management in one platform.",

    keywords: [
      // Core primary terms
      "biomedical field service software",
      "ISO biomedical service software",
      "HTM service management platform",
      "clinical engineering CMMS",
      
      // Specific niche terms (High Intent)
      "medical equipment repair software",
      "medical device maintenance tracker",
      "calibration management for biomedical",
      "Joint Commission medical equipment compliance",
      "ISO 13485 service management",
      
      // Feature-specific long-tail
      "biomedical work order management",
      "preventive maintenance scheduling medical",
      "medical parts inventory software",
      "hospital asset management software",
      "field service mobile app for biomedical technicians",
      "AAMI compliance documentation",

      "simple field service scheduling",
    "small business FSM software",
    "easy to use CMMS",
    "affordable biomedical software",
    "FSM for small service teams",
    
    // --- Feature Specific (Pain point solvers) ---
    "service report automation",
    "digital work order app",
    "technician dispatching software",
    "paperless field service",
    "medical asset tracking for small business",
    
    // --- Competitive Alternatives ---
    "ServiceNow alternative for small business",
    "simpler alternative to ServiceTitan",
    "biomedical CMMS alternative",
    "alternative to ServiceMax",
    "alternative to FieldEdge",
    "alternative to ServicePro",
    "alternative to ServicePower",
    "alternative to ServicePro",
    "alternative to ServicePro",
    ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bravio.nevolabs.cloud",
    siteName: "Bravio",
    title: "FSM Software for Biomedical & ISO Repair Teams",
    description:
      "The all-in-one platform for biomedical service. Manage work orders, ensure ISO compliance, and track medical assets efficiently.",
    images: [
      {
        url: "https://bravio.nevolabs.cloud/og-image.jpg", // Ensure this image has text that says "Biomedical FSM"
        width: 1200,
        height: 630,
        alt: "Bravio - Biomedical Field Service Software Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bravio — Biomedical FSM Software",
    description:
      "Automate service reports, PM schedules, and ISO compliance for medical equipment teams.",
    images: ["https://bravio.nevolabs.cloud/twitter-image.jpg"],
    creator: "@braviohq", // MAKE SURE THIS IS REAL, or remove this line if you don't have an active X account yet
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://bravio.nevolabs.cloud",
  },

  // Good for mobile users adding to home screen
  appleWebApp: {
    capable: true,
    title: "Bravio FSM",
    statusBarStyle: "default",
  },

  metadataBase: new URL("https://bravio.nevolabs.cloud"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Enhanced Schema for better Google rich results understanding
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bravio",
    url: "https://bravio.nevolabs.cloud",
    // "BusinessApplication" is a standard Google understands well, supplemented by your description
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    inLanguage: "en-US",
    description:
      "Easy-to-use Field Service Management (FSM) software for small to mid-sized biomedical and ISO service teams. Streamlines scheduling, dispatching, and service reporting.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/Waitlist", // Good signal if you are in pre-launch/beta
    },
    author: {
      "@type": "Organization",
      name: "Bravio",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bravio",
    url: "https://bravio.nevolabs.cloud",
    logo: "https://bravio.nevolabs.cloud/logo.png",
    // Important: Add actual social profiles here when you have them to establish brand entity
    sameAs: [
        "https://www.linkedin.com/company/bravio", 
        "https://x.com/braviohq"
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} ${gelica.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased selection:bg-neutral-900 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}