"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  ShoppingCart, 
  Store,
  Smartphone,
  Globe,
  CreditCard,
  Truck,
  BarChart3,
  Megaphone,
  CheckCircle,
  Layers,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const channels = [
  { name: "Physical Stores", icon: Store },
  { name: "Kiosk", icon: Layers },
  { name: "Online", icon: Globe },
  { name: "Mobile Apps", icon: Smartphone },
]

const innovations = [
  {
    title: "Digital Payments",
    description: "Seamless payment solutions across all platforms",
    icon: CreditCard,
  },
  {
    title: "Hyper-local Logistics",
    description: "Fast and efficient local delivery networks",
    icon: Truck,
  },
  {
    title: "Analytics Driven Engagement",
    description: "Data-powered customer insights and personalization",
    icon: BarChart3,
  },
  {
    title: "Digital Advertisements",
    description: "Targeted marketing campaigns for maximum reach",
    icon: Megaphone,
  },
]

const benefits = [
  "Seamless shopping experience across multiple formats",
  "Global marketplace presence for retailers of all sizes",
  "Technology enabled innovations integration",
  "Unified customer experience regardless of touch point",
  "E-commerce solutions tailored to your business",
]

export default function RetailPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#043b73]/10 via-background to-[#FF6B00]/5 py-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#043b73]/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#FF6B00]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#043b73]/10 px-4 py-2">
                <ShoppingCart className="h-5 w-5 text-[#043b73]" />
                <span className="text-sm font-medium text-[#043b73]">Retail & e-Commerce</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Retail and <span className="text-[#043b73]">e-Commerce</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Omni channel is the new buzzword as retailers seek to offer a seamless shopping experience 
                across multiple formats and stores - physical, kiosk, online and mobile apps.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#043b73] text-white hover:bg-[#043b73]/90">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Omni Channel Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Omni Channel <span className="text-[#FF6B00]">Experience</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Seamless shopping experience across multiple formats and stores
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 text-center transition-all hover:shadow-xl"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FF6B00]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/70 text-white shadow-lg">
                      <channel.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold">{channel.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Transformation */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  The E-Commerce <span className="text-[#043b73]">Revolution</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The e-commerce market has changed the way business is transacted, whether in retail or 
                  business-to-business, locally or globally. Prior to the Internet, success in retail was 
                  said to hinge on location, location and location.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Now, the Internet is a global marketplace, affording even the smallest retailer a national — 
                  if not a global — presence. Brick-and-mortar locations now have websites, and new companies 
                  now sell products that were unthinkable prior to the Internet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The scope of the e-commerce marketplace is difficult to measure. The e-commerce market has 
                  become such a vital part of the economy that is difficult to pinpoint exactly where e-commerce 
                  begins and the old world economy ends.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border hover:border-[#043b73]/30 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#043b73] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Innovations */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Technology Enabled <span className="text-[#043b73]">Innovations</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These innovations have helped growth in the sector
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-xl hover:border-[#043b73]/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#043b73]/10">
                    <innovation.icon className="h-6 w-6 text-[#043b73]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{innovation.title}</h3>
                  <p className="text-sm text-muted-foreground">{innovation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Banner */}
        <section className="py-16 bg-[#043b73]">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <Zap className="h-16 w-16 text-white/80" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">
                  Unify the Customer Experience
                </p>
                <p className="text-white/90">
                  UniqueHire provides e-commerce solutions that helps our clients unify the customer experience 
                  regardless of the touch point.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/80 p-12"
            >
              <ShoppingCart className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Transform Your Retail Business
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partner with UniqueHire to create seamless omni-channel experiences for your customers.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#FF6B00] hover:bg-white/90">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
