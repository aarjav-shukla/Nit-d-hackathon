import { Header } from "@/components/edureach/header"
import { Hero } from "@/components/edureach/hero"
import { Problem } from "@/components/edureach/problem"
import { Personas } from "@/components/edureach/personas"
import { Solution } from "@/components/edureach/solution"
import { Features } from "@/components/edureach/features"
import { Architecture } from "@/components/edureach/architecture"
import { TechStack } from "@/components/edureach/tech-stack"
import { Roadmap } from "@/components/edureach/roadmap"
import { Footer } from "@/components/edureach/footer"

// EduReach - Bridging the Bandwidth Gap in Education
// An offline-first, bandwidth-adaptive learning platform
export default function EduReachPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Fixed navigation header */}
      <Header />
      
      {/* Hero section with tagline and key features */}
      <Hero />
      
      {/* Problem statement with connectivity crisis statistics */}
      <Problem />
      
      {/* User personas - students, teachers, parents */}
      <Personas />
      
      {/* Solution overview with core principles */}
      <Solution />
      
      {/* Six key features that make EduReach different */}
      <Features />
      
      {/* Technical architecture and data flow */}
      <Architecture />
      
      {/* Tech stack with all technologies */}
      <TechStack />
      
      {/* Impact metrics and development roadmap */}
      <Roadmap />
      
      {/* Footer with tagline and credits */}
      <Footer />
    </main>
  )
}
