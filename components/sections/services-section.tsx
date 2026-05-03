"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code2, Layers, Server, Users } from "lucide-react"
import { FlippingCard } from "@/components/ui/flipping-card"
import { Button } from "@/components/ui/button"
import Particles from "@/components/ui/particles"

const services = [
  {
    icon: Code2,
    title: "Product Development",
    description:
      "End-to-end product development services from ideation to deployment, using cutting-edge technologies and agile methodologies.",
    color: "#043b73",
  },
  {
    icon: Layers,
    title: "Application Management",
    description:
      "Comprehensive application lifecycle management, maintenance, and modernization services to keep your systems running smoothly.",
    color: "#FF6B00",
  },
  {
    icon: Server,
    title: "Infrastructure Services",
    description:
      "Robust cloud and on-premise infrastructure solutions designed for scalability, security, and optimal performance.",
    color: "#043b73",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "Access top-tier IT talent through our specialized recruitment services, tailored to your unique business needs.",
    color: "#FF6B00",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our collection of tech services spans various needs at every stage of the transformation process.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="w-full flex justify-center">
              <FlippingCard 
                height={340}
                width="100%"
                frontContent={
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div
                      className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl shadow-sm border border-black/5 dark:border-white/5"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon
                        className="h-12 w-12"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{service.title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 opacity-60">
                       Flip to Details
                    </p>
                  </div>
                }
                backContent={
                  <div className="flex h-full flex-col p-6 bg-gradient-to-br from-background to-muted/30">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-black/5 dark:border-white/10">
                      <div
                         className="flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0"
                         style={{ backgroundColor: `${service.color}15` }}
                      >
                         <service.icon
                           className="h-6 w-6"
                           style={{ color: service.color }}
                         />
                      </div>
                      <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm text-foreground flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold text-white transition-all hover:opacity-90 shadow-md"
                      style={{ backgroundColor: service.color }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="group border-[#043b73] text-[#043b73] hover:bg-[#043b73] hover:text-white"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
