"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "TCS", logo: "/images/partners/tcs.png" },
  { name: "Morgan Stanley", logo: "/images/partners/morgan-stanley.png" },
  { name: "Oracle", logo: "/images/partners/oracle.png" },
  { name: "Infosys", logo: "/images/partners/infosys.png" },
  { name: "Cognizant", logo: "/images/partners/cognizant.png" },
  { name: "Mindtree", logo: "/images/partners/mindtree.png" },
  { name: "Atos Syntel", logo: "/images/partners/atos-syntel.png" },
  { name: "Sony", logo: "/images/partners/sony.png" },
  { name: "CSS Corp", logo: "/images/partners/csscorp.png" },
  { name: "EdgeVerve", logo: "/images/partners/edgeverve.png" },
  { name: "ITC Infotech", logo: "/images/partners/itc-infotech.png" },
  { name: "HPE Pointnext", logo: "/images/partners/hpe-pointnext.png" },
]

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-[#043b73]/10 px-4 py-1.5 text-sm font-medium text-[#043b73] mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Companies That <span className="text-[#043b73]">Trust</span> Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We proudly collaborate with industry-leading organizations to deliver exceptional results
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center w-max pr-12"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Two identical copies; animating to -50% loops seamlessly */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative h-16 w-40 flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats below partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#043b73]">12+</p>
            <p className="text-sm text-muted-foreground mt-1">Global Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF6B00]">500+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#043b73]">15+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF6B00]">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
