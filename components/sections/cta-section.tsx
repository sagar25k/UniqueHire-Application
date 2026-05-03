"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#043b73] to-[#043b73]/80" />
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/10"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-20 top-20 h-16 w-16 rounded-full bg-[#FF6B00]/30"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 h-12 w-12 rounded-full bg-white/10"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 bottom-10 h-24 w-24 rounded-full bg-[#FF6B00]/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B00]" />
              Let&apos;s Work Together
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance"
          >
            Let Us Power Your Talent Strategy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed"
          >
            Ready to transform your business with cutting-edge technology and world-class talent? Get in touch with our team today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-white text-[#043b73] hover:bg-white/90"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Explore Careers
              </Button>
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            <a
              href="mailto:info@uniquehire.com"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span>info@uniquehire.com</span>
            </a>
            <div className="hidden h-6 w-px bg-white/30 sm:block" />
            <a
              href="tel:+918012345678"
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span>+91 80 1234 5678</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
