"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Heart,
  Rocket,
  Users,
  GraduationCap,
  Coffee,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import BorderGlow from "@/components/ui/BorderGlow"

// WebGL hero background — load after hydration so it never blocks the
// initial paint / navigation. Visual is unchanged; it fades in a beat later.
const ShaderBackground = dynamic(() => import("@/components/ui/shader-background"), {
  ssr: false,
  loading: () => null,
})

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "AI/ML",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
  },
  {
    id: 4,
    title: "Technical Recruiter",
    department: "HR",
    location: "USA",
    type: "Full-time",
    experience: "2+ years",
  },
  {
    id: 5,
    title: "Cloud Architect",
    department: "Infrastructure",
    location: "Canada",
    type: "Full-time",
    experience: "6+ years",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Clear career paths and regular promotion opportunities",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access to courses, certifications, and conferences",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Opportunity to work with international clients and teams",
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-32 pb-20">
          <ShaderBackground />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Join Our Team
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
                Build Your Career at{" "}
                <span className="gradient-text">UniqueHire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Join a team of passionate professionals dedicated to transforming businesses through technology. We&apos;re always looking for talented individuals to help us shape the future.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <a href="#openings">
                  <Button
                    size="lg"
                    className="group bg-[#043b73] text-white hover:bg-[#043b73]/90"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
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
                Why Join Us
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Benefits & Perks
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                We believe in taking care of our team members and providing an environment where they can thrive.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BorderGlow
                    className="h-full"
                    glowColor={index % 2 === 0 ? "218 90% 55%" : "25 100% 50%"} // Blue or Orange
                    backgroundColor="hsl(var(--card))"
                    borderRadius={16}
                  >
                    <div className="group h-full rounded-2xl p-6 transition-all duration-300">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                          index % 2 === 0 ? "bg-[#043b73]/10" : "bg-[#FF6B00]/10"
                        }`}
                      >
                        <benefit.icon
                          className={`h-7 w-7 ${
                            index % 2 === 0 ? "text-[#043b73]" : "text-[#FF6B00]"
                          }`}
                        />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold">{benefit.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
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
                  Our Culture
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-balance">
                  A Place Where You Can Grow & Thrive
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At UniqueHire, we foster a culture of innovation, collaboration, and continuous learning. We believe that our people are our greatest asset, and we invest in their growth and well-being.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Inclusive and diverse workplace",
                    "Regular team building activities",
                    "Open door policy with leadership",
                    "Recognition and rewards programs",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#043b73]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#043b73] to-[#043b73]/60 p-6 text-white">
                    <p className="text-4xl font-bold">500+</p>
                    <p className="mt-2 text-sm opacity-90">Team Members</p>
                  </div>
                  <div className="aspect-[3/2] rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-[#FF6B00]/5 p-6">
                    <p className="text-2xl font-bold text-[#FF6B00]">4.5/5</p>
                    <p className="mt-2 text-sm text-muted-foreground">Employee Rating</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/2] rounded-2xl bg-gradient-to-br from-[#043b73]/20 to-[#043b73]/5 p-6">
                    <p className="text-2xl font-bold text-[#043b73]">95%</p>
                    <p className="mt-2 text-sm text-muted-foreground">Retention Rate</p>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/60 p-6 text-white">
                    <p className="text-4xl font-bold">5</p>
                    <p className="mt-2 text-sm opacity-90">Countries</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 lg:py-28 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Open Positions
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Current Opportunities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Explore our current openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="mt-16 space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <BorderGlow
                    glowColor="218 90% 55%"
                    backgroundColor="hsl(var(--card))"
                    glowIntensity={1.5}
                  >
                    <Card className="group border-0 bg-transparent shadow-none">
                      <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-[#043b73] transition-colors">
                            {job.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </span>
                          </div>
                          <div className="mt-3">
                            <Badge variant="secondary">{job.experience}</Badge>
                          </div>
                        </div>
                        <Link href="/contact">
                          <Button className="group/btn bg-[#043b73] text-white hover:bg-[#043b73]/90">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">
                Don&apos;t see a role that fits?{" "}
                <Link href="/contact" className="font-medium text-[#043b73] hover:underline">
                  Send us your resume
                </Link>{" "}
                and we&apos;ll keep you in mind for future opportunities.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
