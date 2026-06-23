"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react"

const locations = [
  { city: "Bangalore", country: "India" },
  { city: "Hyderabad", country: "India" },
  { city: "USA", country: "" },
  { city: "Canada", country: "" },
  { city: "UAE", country: "" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Product Development",
  "Application Management",
  "Infrastructure Services",
  "Staffing Solutions",
]

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="UniqueHire"
                width={180}
                height={48}
                className="h-10 w-auto"
                style={{ width: "auto", height: "40px" }}
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A digital transformation IT consulting & services company established in 2014, helping organizations build strong teams and compete globally.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="UniqueHire on LinkedIn"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-[#043b73] hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="UniqueHire on Twitter"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-[#043b73] hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="UniqueHire on Facebook"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-[#043b73] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#043b73]" />
                <a
                  href="mailto:info@uniquehire.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
                >
                  info@uniquehire.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#043b73]" />
                <span className="text-sm text-muted-foreground">
                  +91 80 1234 5678
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#043b73]" />
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc, index) => (
                    <span key={loc.city} className="text-sm text-muted-foreground">
                      {loc.city}
                      {loc.country && `, ${loc.country}`}
                      {index < locations.length - 1 && " •"}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UniqueHire. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link
              href="/developers"
              className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
            >
              Developed Team
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-[#043b73]"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
