"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const offices = [
  {
    city: "Bangalore",
    country: "India",
    address: "100 Feet Road, Indiranagar, Bangalore - 560038",
    phone: "+91 80 1234 5678",
    email: "bangalore@uniquehire.com",
  },
  {
    city: "Hyderabad",
    country: "India",
    address: "Hitech City, Madhapur, Hyderabad - 500081",
    phone: "+91 40 1234 5678",
    email: "hyderabad@uniquehire.com",
  },
  {
    city: "USA",
    country: "United States",
    address: "123 Tech Drive, San Francisco, CA 94105",
    phone: "+1 415 123 4567",
    email: "usa@uniquehire.com",
  },
  {
    city: "Canada",
    country: "Canada",
    address: "456 Innovation Blvd, Toronto, ON M5V 1K4",
    phone: "+1 416 123 4567",
    email: "canada@uniquehire.com",
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
                Let&apos;s Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Have a project in mind or looking for talent solutions? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#043b73] text-white hover:bg-[#043b73]/90"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>

                {/* Quick Contact */}
                <div className="mt-8 space-y-6">
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#043b73]/10">
                        <Mail className="h-6 w-6 text-[#043b73]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <a
                          href="mailto:info@uniquehire.com"
                          className="mt-1 text-muted-foreground hover:text-[#043b73]"
                        >
                          info@uniquehire.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10">
                        <Phone className="h-6 w-6 text-[#FF6B00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <a
                          href="tel:+918012345678"
                          className="mt-1 text-muted-foreground hover:text-[#FF6B00]"
                        >
                          +91 80 1234 5678
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#043b73]/10">
                        <Clock className="h-6 w-6 text-[#043b73]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="mt-1 text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10">
                        <Globe className="h-6 w-6 text-[#FF6B00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Global Presence</h3>
                        <p className="mt-1 text-muted-foreground">
                          India • USA • Canada • UAE • Australia
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
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
                Our Offices
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Global Locations
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          index % 2 === 0 ? "bg-[#043b73]/10" : "bg-[#FF6B00]/10"
                        }`}
                      >
                        <MapPin
                          className={`h-6 w-6 ${
                            index % 2 === 0 ? "text-[#043b73]" : "text-[#FF6B00]"
                          }`}
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">
                        {office.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {office.country}
                      </p>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {office.address}
                      </p>
                      <div className="mt-4 space-y-2">
                        <a
                          href={`tel:${office.phone}`}
                          className="block text-sm text-muted-foreground hover:text-[#043b73]"
                        >
                          {office.phone}
                        </a>
                        <a
                          href={`mailto:${office.email}`}
                          className="block text-sm text-muted-foreground hover:text-[#043b73]"
                        >
                          {office.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
