import {
  Header,
  Hero,
  Problem,
  Personas,
  Solution,
  Features,
  Architecture,
  TechStack,
  Roadmap,
  Footer,
} from "@/components/edureach"

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
