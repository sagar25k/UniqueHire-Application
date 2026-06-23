"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Users, Globe, GraduationCap, Briefcase, Building2, TestTube, ShoppingCart, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InteractiveMenu } from "@/components/ui/interactive-menu"
import { GetStartedButton } from "@/components/ui/get-started-button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const servicesItems = [
  { name: "GCCs", href: "/services/gccs", icon: Globe },
  { name: "HTD", href: "/services/htd", icon: GraduationCap },
  { name: "Professional Consulting", href: "/services/consulting", icon: Briefcase },
  { name: "Banking & Financial", href: "/services/banking", icon: Building2 },
  { name: "Testing Services", href: "/services/testing", icon: TestTube },
  { name: "Retail & e-Commerce", href: "/services/retail", icon: ShoppingCart },
  { name: "Infrastructure", href: "/services/infrastructure", icon: Server },
]

const profileItems = [
  { name: "Team", href: "/team", icon: Users },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 mx-auto max-w-7xl z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full ${
          scrolled
            ? "opacity-0 pointer-events-none scale-75 -translate-y-4"
            : "border border-white/60 bg-gradient-to-r from-[#043b73]/12 via-white/45 to-[#FF6B00]/12 shadow-[0_14px_48px_-10px_rgba(4,59,115,0.35)] backdrop-blur-2xl opacity-100 scale-100 translate-y-0"
        }`}
      >
        {/* animated colored glow behind the glass */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-2 -z-10 rounded-full opacity-70 blur-2xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,59,115,0.30), rgba(255,107,0,0.18) 50%, rgba(4,59,115,0.30))",
          }}
        />
        {/* Glassy shine layer (clipped to the bar only) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          {/* bright top inner highlight */}
          <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          {/* brand tint at the ends */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#043b73]/15 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FF6B00]/15 to-transparent" />
          {/* periodic shine sweep */}
          <motion.div
            className="absolute top-0 h-full w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            initial={{ x: "-200%" }}
            animate={{ x: ["-200%", "500%"] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
          />
        </div>
        <nav className="relative flex items-center justify-between px-6 py-3">
          {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/logo.png"
              alt="UniqueHire"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
              loading="eager"
              style={{ width: "auto", height: "40px" }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation using Framer Motion mix-blend Animated Tabs */}
        <ul
          className="hidden md:flex relative items-center"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {/* Home */}
          <Link href="/">
            <li
              onMouseEnter={(e) => {
                setPosition({
                  width: e.currentTarget.offsetWidth,
                  opacity: 1,
                  left: e.currentTarget.offsetLeft,
                });
              }}
              className="relative z-10 block cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white"
            >
              Home
            </li>
          </Link>
          
          {/* About */}
          <Link href="/about">
            <li
              onMouseEnter={(e) => {
                setPosition({
                  width: e.currentTarget.offsetWidth,
                  opacity: 1,
                  left: e.currentTarget.offsetLeft,
                });
              }}
              className="relative z-10 block cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white"
            >
              About
            </li>
          </Link>

          {/* Services */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <li
                onMouseEnter={(e) => {
                  setPosition({
                    width: e.currentTarget.offsetWidth,
                    opacity: 1,
                    left: e.currentTarget.offsetLeft,
                  });
                }}
                className="relative z-10 flex items-center gap-1 cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white outline-none"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 mt-2 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 p-2">
              {servicesItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild className="p-3 cursor-pointer rounded-lg hover:bg-[#043b73]/10 transition-colors">
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-[#043b73]" />
                    <span className="font-medium text-foreground/80">{item.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Careers */}
          <Link href="/careers">
            <li
              onMouseEnter={(e) => {
                setPosition({
                  width: e.currentTarget.offsetWidth,
                  opacity: 1,
                  left: e.currentTarget.offsetLeft,
                });
              }}
              className="relative z-10 block cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white"
            >
              Careers
            </li>
          </Link>

          {/* Profile (Team) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <li
                onMouseEnter={(e) => {
                  setPosition({
                    width: e.currentTarget.offsetWidth,
                    opacity: 1,
                    left: e.currentTarget.offsetLeft,
                  });
                }}
                className="relative z-10 flex items-center gap-1 cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white outline-none"
              >
                Profile
                <ChevronDown className="h-4 w-4" />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-40 mt-2 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 p-2">
              {profileItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild className="p-3 cursor-pointer rounded-lg hover:bg-[#043b73]/10 transition-colors">
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-[#043b73]" />
                    <span className="font-medium text-foreground/80">{item.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact */}
          <Link href="/contact">
            <li
              onMouseEnter={(e) => {
                setPosition({
                  width: e.currentTarget.offsetWidth,
                  opacity: 1,
                  left: e.currentTarget.offsetLeft,
                });
              }}
              className="relative z-10 block cursor-pointer px-5 py-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-white"
            >
              Contact
            </li>
          </Link>

          <motion.li
            animate={position}
            className="absolute z-0 h-9 rounded-full bg-gradient-to-b from-[#FF6B00] to-[#e85d00] shadow-[0_4px_16px_rgba(255,107,0,0.45)]"
          />
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t bg-background md:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              {navItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#043b73]"
                        : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {/* Services Section in Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-t pt-3 mt-3"
              >
                <p className="text-sm font-medium text-muted-foreground mb-2">Services</p>
                {servicesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-2 text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#043b73]"
                        : "text-foreground/70"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </motion.div>
              {navItems.slice(2).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#043b73]"
                        : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {/* Profile Section in Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="border-t pt-3 mt-3"
              >
                <p className="text-sm font-medium text-muted-foreground mb-2">Profile</p>
                {profileItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 py-2 text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#043b73]"
                        : "text-foreground/70"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <GetStartedButton className="w-full" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>

      {/* Floating Interactive Menu (Displays when Scrolled) */}
      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 -translate-y-12 scale-90 pointer-events-none"
        }`}
      >
        <InteractiveMenu />
      </div>
    </>
  )
}
