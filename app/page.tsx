"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, BarChart3, Users, Smartphone,XCircle, ChevronDown, Search, ArrowRight } from "lucide-react"
import Link from "next/link" // <-- Added import

const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
}
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
}

export default function Home() {
  // --- Waitlist Form Logic ---
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaSd9Y8rJGBCveoK6M7otsePoA6DTVw8fA5vhfv3wAeWsHtKyOpQtc31Z4V8LNVSuNPw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);
    const formData = { company, email };
    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // --- End of Form Logic ---

  return (
    // FIX: Set overflow-x-hidden on the main container to hide any accidental horizontal scrollbar, 
    // although the best practice is to fix the overflowing element itself.
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#f9f0eb' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur supports-[backdrop-filter]:bg-[#f9f0eb]/60" style={{ backgroundColor: '#f9f0eb' }}>
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
              <a href="#features" className="text-sm text-black hover:text-gray-600 transition font-inter">
              Features
            </a>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>
            <div className="flex items-center gap-1">
              <a href="#resources" className="text-sm text-black hover:text-gray-600 transition font-inter">
                Resources
              </a>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>
            <div className="flex items-center gap-1">
              <a href="#developers" className="text-sm text-black hover:text-gray-600 transition font-inter">
                Developers
              </a>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>
            <a href="#integrations" className="text-sm text-black hover:text-gray-600 transition font-inter">
              Integrations
            </a>
            <a href="#customers" className="text-sm text-black hover:text-gray-600 transition font-inter">
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

      {/* News Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-200 flex items-center gap-2 sm:gap-4">
      <div className="bg-black text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium">
        NEWS
      </div>
      <span className="text-black text-xs sm:text-sm font-inter leading-tight">
        MedTech Solutions Reduces Service Response Time by 40% with Bravio
      </span>
      <Link href="/blog" className="cursor-pointer">
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
      </Link>
    </div>
  </div>
</div>


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance text-black font-gelica">
            Built for Biomedical Equipment Service Companies
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance font-inter">
            Streamline service operations, track equipment maintenance, and manage field technicians with the only FSM platform designed specifically for biomedical equipment service companies.
          </p>

          <div className="pt-4">
            
            {/* --- HERO BUTTON UPDATED --- */}
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg" asChild>
              <Link href="#waitlist">Get started</Link>
            </Button>
            {/* --- END OF UPDATE --- */}

          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* FIX: Changed `flex items-center justify-center gap-8 opacity-60` to 
          `flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60` 
          to allow logos to wrap on small screens, preventing horizontal overflow. 
        */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
        <div className="text-gray-400 font-semibold text-sm">Tri-State Biomedical Repair</div>
<div className="text-gray-400 font-semibold text-sm">PrimeCare Biomedical Services</div>
<div className="text-gray-400 font-semibold text-sm">NorthStar Clinical Equipment Services</div>
<div className="text-gray-400 font-semibold text-sm">VitalOps Biomedical</div>
<div className="text-gray-400 font-semibold text-sm">Reliant Medical Equipment Repair</div>

        </div>
      </section>

      {/* Product Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 flex items-center justify-center">
          <img 
            src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/dashboard.png" 
            alt="Biomedical Equipment Service Management Platform" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border font-inter">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gelica font-bold mb-4">The Challenges You Face Daily</h2>
          <p className="text-lg text-muted-foreground">Managing biomedical equipment service is complex - your current tools make it harder</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: The List of Pains */}
          <motion.div 
            className="space-y-6"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "Fragmented Service Records",
                description: "Using multiple systems for anesthesia machines, sterilizers, and imaging equipment creates data silos",
              },
              {
                title: "Preventive Maintenance Chaos",
                description: "Missing PM schedules means equipment downtime and compliance violations",
              },
              {
                title: "Field Technician Blind Spots",
                description: "No cellular coverage in hospital basements? Service reports disappear and history is lost",
              },
              {
                title: "Parts Inventory Nightmare",
                description: "Tracking biomedical parts across repair facilities, technician vans, and loaner devices manually",
              },
              {
                title: "No Equipment History Access",
                description: "Technicians arrive on-site without access to past service records or equipment specifications",
              },
              {
                title: "Compliance Documentation Gaps",
                description: "Regulatory requirements for biomedical equipment maintenance are scattered across multiple systems",
              },
            ].map((pain, i) => (
              <motion.div key={i} className="flex gap-4" variants={itemVariants}>
                <div>
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground">{pain.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Column 2: The Visual Solution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="/hero.png" // <-- Put your clean dashboard image here
              alt="Bravio Dashboard" 
              className="rounded-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Stop the chaos. Get a single source of truth.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-stone-50/70 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features to shine</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
              We've created a platform that will cover all your biomedical equipment service needs to win your field service management game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Mobile Field Service */}
            <motion.div 
              className="md:col-span-2" 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold">Mobile Field Service</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Work offline in hospital basements and operating rooms. Create service reports for anesthesia machines, sterilizers, and imaging equipment without cellular coverage.
                    </p>
                  </div>
                  
                  <div className="flex-1 pt-6 flex justify-center items-center">
                    <img
                      src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/fsm.png"
                      alt="Mobile Field Service UI Mockup"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  </div>
                  
                  {/* --- EXPLORE BUTTON UPDATED --- */}
                  <Button variant="ghost" size="sm" className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-inter font-medium" asChild>
                    <Link href="#waitlist">Explore</Link>
                  </Button>
                  
                </div>
              </Card>
            </motion.div>

            {/* Card 2: Equipment Service Reports */}
            <motion.div 
              className="md:col-span-1" 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold">Equipment Service Reports</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Create unlimited service report templates for each biomedical equipment type with equipment-specific fields and compliance requirements.
                    </p>
                  </div>
                  
                  <div className="flex-1 pt-6 flex justify-center items-center">
                    <img
                      src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/servicereports.png"
                      alt="Equipment Service Reports UI Mockup"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  </div>
                  
                  {/* --- EXPLORE BUTTON UPDATED --- */}
                  <Button variant="ghost" size="sm" className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-inter font-medium" asChild>
                    <Link href="#waitlist">Explore</Link>
                  </Button>

                </div>
              </Card>
            </motion.div>


            {/* Card 3: Preventive Maintenance */}
            <motion.div 
              className="md:col-span-1" 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold">Preventive Maintenance</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Never miss a PM again. Automatic reminders for biomedical equipment due for service.
                    </p>
                  </div>
                  
                  <div className="flex-1 pt-6 flex justify-center items-center">
                    <img
                      src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/pm.png" // Path to your specific image
                      alt="Preventive Maintenance Schedule UI Mockup"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  </div>
                  
                  {/* --- EXPLORE BUTTON UPDATED --- */}
                  <Button variant="ghost" size="sm" className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-inter font-medium" asChild>
                    <Link href="#waitlist">Explore</Link>
                  </Button>

                </div>
              </Card>
            </motion.div>

            {/* Card 4: Parts Inventory */}
            <motion.div 
              className="md:col-span-1" 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold">Parts Inventory</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Track biomedical parts across repair facilities, technician vans, and loaner devices with real-time inventory management.
                    </p>
                  </div>
                  
                  <div className="flex-1 pt-6 flex justify-center items-center">
                    <img
                      src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/inventorynew.png" // Path to your specific image
                      alt="Parts Inventory UI Mockup"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  </div>
                  
                  {/* --- EXPLORE BUTTON UPDATED --- */}
                  <Button variant="ghost" size="sm" className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-inter font-medium" asChild>
                    <Link href="#waitlist">Explore</Link>
                  </Button>

                </div>
              </Card>
            </motion.div>

            {/* Card 5: Compliance Documentation */}
            <motion.div 
              className="md:col-span-1" 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold">Compliance Documentation</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-inter">
                      Ensure your service operations are data-driven, audit-ready, and fully compliant with regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="flex-1 pt-6 flex justify-center items-center">
                    <img
                      src="https://gqvbkzcscjeaghodwxnz.supabase.co/storage/v1/object/public/assets/compliance.png" // Path to your specific image
                      alt="Compliance Documentation UI Mockup"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  </div>
                  
                  {/* --- EXPLORE BUTTON UPDATED --- */}
                  <Button variant="ghost" size="sm" className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-inter font-medium" asChild>
                    <Link href="#waitlist">Explore</Link>
                  </Button>

                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-gelica">
          {[
            { stat: "50+", label: "Companies on Waitlist" },
            { stat: "1,000+", label: "Hours of Industry Research" },
            { stat: "15+", label: "Core Workflows Automated" },
            { stat: "5-in-1", label: "Tools Consolidated" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
              <p className="text-muted-foreground font-inter">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="bg-stone-50/70 border-t border-border py-20 font-inter">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-gelica">Join the Waitlist</h2>
            <p className="text-lg text-muted-foreground">
              Be among the first to access Bravio, the FSM platform built specifically for biomedical equipment service companies. Early
              access members get lifetime discounts and priority support.
            </p>
          </div>

          <Card className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm">
            {submitted ? (
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">You're on the waitlist!</h3>
                <p className="text-muted-foreground">
                  We'll be in touch soon with early access details and exclusive offers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Biomedical Service Company</label>
                  <Input
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    disabled={loading}
                    className="font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="font-inter"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-black/40 text-primary-foreground font-inter"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Join the Waitlist"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. No spam, just updates about Bravio platform development.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    {/* THE FIX IS HERE:
      Base grid is 6-column (for mobile).
      Desktop grid is 4-column (md:).
    */}
    <div className="grid grid-cols-6 md:grid-cols-4 gap-8 mb-8">
      
      {/* Column 1: Brand */}
      {/* Spans 6 cols on mobile (full width) */}
      {/* Spans 1 col on desktop */}
      <div className="col-span-6 md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">b</span>
          </div>
          <span className="font-bold font-gelica text-wrap">Bravio</span>
        </div>
        <p className="text-sm text-muted-foreground font-inter">
          Field service management platform for biomedical equipment service companies.
        </p>
      </div>

      {/* Column 2: Product */}
      {/* Spans 2 cols on mobile (1/3 width) */}
      {/* Spans 1 col on desktop */}
      <div className="col-span-2 md:col-span-1">
        <h4 className="font-semibold mb-4 font-gelica">Product</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#features" className="hover:text-foreground transition">
              Features
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-foreground transition">
              Benefits
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Company */}
      {/* Spans 2 cols on mobile (1/3 width) */}
      {/* Spans 1 col on desktop */}
      <div className="col-span-2 md:col-span-1">
        <h4 className="font-semibold mb-4 font-gelica">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#" className="hover:text-foreground transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4: Legal */}
      {/* Spans 2 cols on mobile (1/3 width) */}
      {/* Spans 1 col on desktop */}
      <div className="col-span-2 md:col-span-1">
        <h4 className="font-semibold mb-4 font-gelica">Legal</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#" className="hover:text-foreground transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar: Copyright & Socials (This part remains the same) */}
    <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-muted-foreground">
      <p>&copy; 2025 Bravio by nevolabs. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-foreground transition">
          Twitter
        </a>
        <a href="#" className="hover:text-foreground transition">
          LinkedIn
        </a>
        <a href="#" className="hover:text-foreground transition">
          GitHub
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}