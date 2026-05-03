"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { HeroBackground } from "@/components/ui/hero-background"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HeroSection } from "@/components/sections/hero-section"
import { SplineSection } from "@/components/sections/spline-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { StatsSection } from "@/components/sections/stats-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { CTASection } from "@/components/sections/cta-section"

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
  loading: () => null,
})

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
      {/* ── Fixed animated background — visible behind every section ── */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      <LoadingScreen isLoading={isLoading} />
      <Navbar />

      <main>
        <HeroSection />

        {/* Full-screen Spline 3D section — sits between the globe hero and
            the services content; picks up brand blue/orange/white colours */}
        <SplineSection />

        {/* OGL particle layer floats above the fixed background */}
        <div className="relative" style={{ isolation: "isolate" }}>
          <Particles
            particleColors={["#043b73", "#FF6B00", "#93c5fd", "#fed7aa", "#3b82f6", "#fbbf24", "#60a5fa", "#fb923c"]}
            particleCount={1200}
            particleSpread={6}
            speed={0.04}
            particleBaseSize={220}
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={false}
            sizeRandomness={2.5}
            cameraDistance={8}
            disableRotation={false}
            pixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
          />
          <div className="relative z-10">
            <ServicesSection />
            <AboutSection />
            <StatsSection />
            <IndustriesSection />
            <WhyChooseUsSection />
            <PartnersSection />
            <CTASection />
          </div>
        </div>
      </main>

      <div className="relative">
        <Particles
          particleColors={["#043b73", "#FF6B00", "#93c5fd", "#fed7aa", "#60a5fa", "#fb923c"]}
          particleCount={400}
          particleSpread={6}
          speed={0.03}
          particleBaseSize={180}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={false}
          sizeRandomness={2.0}
          cameraDistance={8}
          disableRotation={false}
          pixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
        />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </>
  )
}
