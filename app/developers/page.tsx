"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel"

const team = [
  {
    name: "Kanithi Gunasagar",
    role: "Core Developer",
    description: "Architected and developed the core infrastructure of the UniqueHire platform. Dedicated to delivering scalable, high-performance web solutions.",
    image: "/images/Gunasagar.jpeg",
    linkedinUrl: "#",
    githubUrl: "#",
    mailUrl: "mailto:gunasagarkanithi@gmail.com",
  },
  {
    name: "Saikamal Suro",
    role: "Core Developer",
    description: "Designed core systems and structured the technical capabilities of this website, ensuring a robust and reliable user experience.",
    image: "/images/SaikamalSuro.jpeg",
    linkedinUrl: "#",
    githubUrl: "#",
    mailUrl: "mailto:info@uniquehire.com",
  },
  {
    name: "Sai Ganesh Padhy",
    role: "Core Developer",
    description: "Contributed to engineering essential backend services and ensuring continuous performance optimization.",
    image: "/images/SaiGaneshPadhy.jpeg",
    linkedinUrl: "#",
    githubUrl: "#",
    mailUrl: "mailto:info@uniquehire.com",
  },
  {
    name: "Koona Saivardhan",
    role: "Core Developer",
    description: "Built the advanced animations, interactive 3D elements, and modern front-end UI that power this complete digital experience.",
    image: "/images/Saivardhan.jpeg",
    linkedinUrl: "#",
    githubUrl: "#",
    mailUrl: "mailto:info@uniquehire.com",
  }
]

export default function DevelopersPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24 bg-gradient-to-b from-background to-secondary/20">
      {/* Background glow integration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-0 right-1/4 h-1/2 w-1/3 blur-[120px] bg-[#043b73]/20 rounded-full" />
         <div className="absolute bottom-1/4 left-1/4 h-1/3 w-1/3 blur-[120px] bg-[#FF6B00]/10 rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block rounded-full border border-[#043b73]/20 bg-[#043b73]/10 px-4 py-1.5 text-sm font-semibold text-[#043b73] mb-6">
            Meet the Engineering Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The Developers Behind <br/>
            <span className="bg-gradient-to-r from-blue-600 to-[#FF6B00] bg-clip-text text-transparent">UniqueHire</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Get to know the dedicated individuals who designed, architected, and brought this entire platform to life.
          </p>
        </motion.div>

        <div className="mt-12 w-full flex justify-center">
          <TestimonialCarousel 
            items={team.map((dev) => ({
              name: dev.name,
              title: dev.role,
              description: dev.description,
              imageUrl: dev.image,
              linkedinUrl: dev.linkedinUrl,
              githubUrl: dev.githubUrl,
              mailUrl: dev.mailUrl,
            }))}
          />
        </div>
      </div>
    </main>
      <Footer />
    </>
  )
}
