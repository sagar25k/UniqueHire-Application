"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  GraduationCap, 
  UserCheck, 
  BookOpen, 
  Rocket, 
  Target,
  DollarSign,
  Zap,
  Code,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Hire",
    description: "We carefully select candidates who show strong potential in both technical and soft skills. Our selection process includes rigorous screening, interviews, and assessment stages to ensure only the most capable individuals move forward.",
    icon: UserCheck,
    color: "#043b73",
  },
  {
    step: "02",
    title: "Train",
    description: "Once selected, candidates enter our intensive training program, tailored specifically to meet your organization's unique demands. With industry-leading instructors, state-of-the-art technology, and real-world simulations, we ensure candidates are equipped with all the technical, functional, and behavioral skills required.",
    icon: BookOpen,
    color: "#FF6B00",
  },
  {
    step: "03",
    title: "Deploy",
    description: "After successful training, candidates are deployed directly to your teams, where they begin contributing to your projects immediately. We facilitate seamless onboarding and monitor performance to ensure alignment with your expectations.",
    icon: Rocket,
    color: "#043b73",
  },
]

const benefits = [
  {
    title: "Tailored to Your Needs",
    description: "Every organization has unique requirements. Our HTD model is built around your specific needs and technologies, ensuring our candidates are a perfect fit.",
    icon: Target,
  },
  {
    title: "Cost-Effective",
    description: "Skip the lengthy hiring process and reduce onboarding times and costs with ready-to-perform candidates who are already trained to meet your standards.",
    icon: DollarSign,
  },
  {
    title: "Talent That Performs from Day One",
    description: "Our candidates are prepared to make an impact from day one, as they're already familiar with your tools, processes, and company culture.",
    icon: Zap,
  },
]

const technicalSkills = [
  "JAVA Full Stack",
  "Mobile Application Development",
  "Angular & Reactive Native",
  "IBM Mainframes",
  "Storage & Infrastructure",
  "No Code Low Code Platform",
  "Wavemaker",
  "Hybris",
]

const softSkills = [
  "Communication",
  "Team Collaboration",
  "Problem Solving",
  "Leadership",
  "Time Management",
  "Adaptability",
]

export default function HTDPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B00]/10 via-background to-[#043b73]/5 py-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#FF6B00]/20 blur-3xl" />
            <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-[#043b73]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B00]/10 px-4 py-2">
                <GraduationCap className="h-5 w-5 text-[#FF6B00]" />
                <span className="text-sm font-medium text-[#FF6B00]">Hire Train Deploy</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Empowering Businesses with <span className="text-[#FF6B00]">Ready-to-Perform</span> Talent
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                In today&apos;s fast-paced market, finding skilled, job-ready candidates is a challenge. Our Hire, Train, 
                and Deploy (HTD) model is designed to solve this issue by preparing professionals who not only match 
                your skill requirements but are also trained specifically to fit your organization&apos;s culture, processes, and needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90">
                    Start HTD Program
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-[#043b73]">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white leading-relaxed"
            >
              &quot;To bridge the skill gap by identifying talent, training them in industry-relevant skills, and deploying 
              them seamlessly into your workforce. We&apos;re here to enhance your workforce readiness and provide 
              high-quality, agile solutions that fuel business growth.&quot;
            </motion.p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                How It <span className="text-[#043b73]">Works</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our streamlined three-step process ensures quality talent delivery
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-1/2 hidden h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-[#043b73] via-[#FF6B00] to-[#043b73] lg:block" />
              
              <div className="grid gap-8 lg:grid-cols-3">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="relative z-10 rounded-3xl border bg-card p-8 shadow-lg transition-all hover:shadow-xl">
                      <div 
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="h-10 w-10" />
                      </div>
                      <div className="text-center">
                        <span className="text-5xl font-bold text-muted-foreground/20">{step.step}</span>
                        <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
                        <p className="mt-4 text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                        <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why Choose Our <span className="text-[#FF6B00]">HTD Model</span>?
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:border-[#FF6B00]/30"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF6B00]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B00]/10">
                      <benefit.icon className="h-7 w-7 text-[#FF6B00]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Modules Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Training <span className="text-[#043b73]">Modules</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Have successfully covered the below trainings with our customers. Our training programs cover 
                a wide range of skills, including but not limited to:
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Technical Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#043b73]/10">
                    <Code className="h-6 w-6 text-[#043b73]" />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {technicalSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#043b73]" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/10">
                    <MessageSquare className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#FF6B00]" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Each module is carefully designed to give candidates a comprehensive understanding of 
                  the skills they&apos;ll need to succeed in their roles.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/80">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Transform Your Workforce?
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partner with UniqueHire&apos;s HTD program and get access to talent that&apos;s ready to perform from day one.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
