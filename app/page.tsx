"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { StatsSection } from "@/components/sections/stats-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("uh_visited")
    if (alreadyVisited) {
      setIsLoading(false)
      return
    }
    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("uh_visited", "1")
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Animated background is mounted globally in the root layout
          (ConstellationBackground), visible behind every section. */}

      <LoadingScreen isLoading={isLoading} />
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
