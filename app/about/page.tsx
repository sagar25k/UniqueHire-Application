"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Eye, Award, Users, Globe2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CTASection } from "@/components/sections/cta-section"
import GlassCard from "@/components/ui/glass-card"
import { IdentityCardBody, RevealCardContainer } from "@/components/ui/animated-profile-card"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously pushing boundaries with cutting-edge technologies and methodologies.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical business practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional quality in every project and interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with clients as true partners to achieve shared goals.",
  },
]

const timeline = [
  { year: "2014", event: "Founded in Bangalore with a vision to transform IT consulting" },
  { year: "2016", event: "Expanded operations to Hyderabad and started international projects" },
  { year: "2018", event: "Opened offices in USA and Canada to serve North American clients" },
  { year: "2020", event: "Launched AI-driven recruitment platform and expanded to UAE" },
  { year: "2022", event: "Crossed 500+ employees and served 100+ enterprise clients" },
  { year: "2024", event: "Celebrating 10 years of digital transformation excellence" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                About UniqueHire
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
                Transforming Businesses Through{" "}
                <span className="gradient-text">Technology & Talent</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                UniqueHire is a digital transformation IT consulting & services company established in 2014 by recruitment leaders with strong corporate and consulting experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 place-items-center">
              <RevealCardContainer
                accent="#043b73" // UniqueHire Blue
                textOnAccent="#ffffff"
                mutedOnAccent="rgba(255,255,255,0.7)"
                base={
                  <IdentityCardBody
                    fullName="Our Mission"
                    place="Transforming Organizations"
                    about="To empower organizations worldwide with transformative technology solutions and exceptional talent, enabling them to achieve their business objectives and stay ahead in the digital age."
                    avatarUrl="/images/uh-logo.png"
                    avatarText="UM"
                    scheme="plain"
                    displayAvatar={false}
                  />
                }
                overlay={
                  <IdentityCardBody
                    fullName="Our Mission"
                    place="Transforming Organizations"
                    about="To empower organizations worldwide with transformative technology solutions and exceptional talent, enabling them to achieve their business objectives and stay ahead in the digital age."
                    avatarUrl="/images/uh-logo.png"
                    avatarText="UM"
                    scheme="accented"
                    displayAvatar={true}
                    cardCss={{ backgroundColor: "var(--accent-color)" }}
                  />
                }
              />

              <RevealCardContainer
                accent="#FF6B00" // UniqueHire Orange
                textOnAccent="#ffffff"
                mutedOnAccent="rgba(255,255,255,0.7)"
                base={
                  <IdentityCardBody
                    fullName="Our Vision"
                    place="Trusted Global Partner"
                    about="To be the most trusted global partner for digital transformation, recognized for our innovative solutions, world-class talent network, and unwavering commitment to client success."
                    avatarUrl="/images/uh-logo.png"
                    avatarText="UV"
                    scheme="plain"
                    displayAvatar={false}
                  />
                }
                overlay={
                  <IdentityCardBody
                    fullName="Our Vision"
                    place="Trusted Global Partner"
                    about="To be the most trusted global partner for digital transformation, recognized for our innovative solutions, world-class talent network, and unwavering commitment to client success."
                    avatarUrl="/images/uh-logo.png"
                    avatarText="UV"
                    scheme="accented"
                    displayAvatar={true}
                    cardCss={{ backgroundColor: "var(--accent-color)" }}
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-secondary/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                  Our Story
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-balance">
                  A Decade of Excellence in Digital Transformation
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Founded in 2014 by recruitment leaders with extensive corporate and consulting experience, UniqueHire began with a simple yet powerful vision: to bridge the gap between exceptional talent and transformative technology.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Over the years, we have grown from a small team in Bangalore to a global organization with offices across India, USA, Canada, UAE, and Australia. Our commitment to excellence and innovation has helped us serve over 100 enterprise clients worldwide.
                </p>
                <div className="mt-8 flex flex-wrap gap-8">
                  <div>
                    <p className="text-4xl font-bold text-[#043b73]">10+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#FF6B00]">500+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#043b73]">100+</p>
                    <p className="text-sm text-muted-foreground">Enterprise Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#043b73]/10 to-[#FF6B00]/10 p-8">
                  <div className="relative h-full rounded-2xl bg-card p-6 shadow-xl">
                    <Globe2 className="mx-auto h-32 w-32 text-[#043b73]/20" />
                    <div className="mt-6 space-y-4">
                      {["India", "USA", "Canada", "UAE", "Australia"].map((country, i) => (
                        <motion.div
                          key={country}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#043b73]" />
                          <span className="font-medium">{country}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Our Journey
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Milestones That Define Us
              </h2>
            </motion.div>

            <div className="relative mt-16">
              <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-border lg:block" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col lg:flex-row ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="rounded-2xl border bg-card p-6">
                        <p className="text-2xl font-bold text-[#043b73]">{item.year}</p>
                        <p className="mt-2 text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#043b73] text-white shadow-lg">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div className="hidden flex-1 lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Our Values
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What We Stand For
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <GlassCard
                    title={value.title}
                    description={value.description}
                    icon={value.icon}
                    themeColor={index % 2 === 0 ? "#043b73" : "#FF6B00"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
