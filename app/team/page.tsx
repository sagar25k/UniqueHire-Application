"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import CircularTestimonials from "@/components/ui/circular-testimonials"

const teamMembers = [
  {
    name: "Bala M",
    designation: "Founder & Director",
    src: "/images/team/bala.jpg",
    quote:
      "With 2 decades of IT industry experience in Contract Staffing and Corporate Hiring, I founded UniqueHire to provide the vision and leadership that builds world-class talent pipelines. Previously with ATTRA, iGATE, and IBM — I grew our team from 4 to 500+ employees in just 3 years.",
  },
  {
    name: "Vamshi Krishna",
    designation: "Co-Founder & Director",
    src: "/images/team/vamshi.jpg",
    quote:
      "My extensive background in IT consulting and leadership has significantly enriched UniqueHire, enhancing both its strategic direction and operational efficiency. My deep expertise spans across various facets of information technology and management.",
  },
  {
    name: "Rajesh Kaidam",
    designation: "Co-Founder & Director",
    src: "/images/team/rajesh.jpg",
    quote:
      "As a Result-oriented Recruitment Leader with over 15 years' experience across IT Services, Product Development, and IT Staffing, I strategize and drive Talent Acquisition across all geographies including North America, UK, Europe & APAC.",
  },
  {
    name: "Ravikumar Kancharana",
    designation: "CEO",
    src: "/images/team/ravi.jpg",
    quote:
      "With two decades of IT experience across sales, customer management, and delivery management in Banking, Finance, and Payments domains — I shape and execute UniqueHire's long-term strategy, aligning business goals with market opportunities.",
  },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#043b73]/5 via-transparent to-[#FF6B00]/5" />
            <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#043b73]/10 blur-3xl" />
            <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block rounded-full bg-[#043b73]/10 px-4 py-1.5 text-sm font-medium text-[#043b73]"
              >
                Our Leadership
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Meet the <span className="text-[#043b73]">Visionaries</span>
                <br />
                Behind <span className="text-[#FF6B00]">UniqueHire</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
              >
                Our leadership team brings decades of combined experience in IT consulting,
                staffing, and digital transformation to drive innovation and excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Circular Testimonials — Team Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <CircularTestimonials
                testimonials={teamMembers}
                autoplay={true}
                colors={{
                  name: "hsl(var(--foreground))",
                  designation: "#FF6B00",
                  testimony: "hsl(var(--muted-foreground))",
                  arrowBackground: "#043b73",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#FF6B00",
                }}
                fontSizes={{
                  name: "28px",
                  designation: "15px",
                  quote: "17px",
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {[
                { value: "100+", label: "Years Combined Experience" },
                { value: "500+", label: "Team Members" },
                { value: "5", label: "Industry Leaders" },
                { value: "3", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-[#043b73]">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
