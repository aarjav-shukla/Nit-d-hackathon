import { Button } from "@/components/ui/button"
import { Wifi, WifiOff, MessageSquare, Zap } from "lucide-react"

// Hero section with tagline, description, and key feature badges
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="text-xs font-medium text-primary"></span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="text-xs text-muted-foreground"></span>
          </div> */}

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            EduReach
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4">
            Bridging the Bandwidth Gap in Education
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Offline-first · Adaptive streaming · SMS fallback · Smart prefetch
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8">
              Explore the Platform
            </Button>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <WifiOff className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Offline-first</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Wifi className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Adaptive streaming</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">SMS fallback</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Zap className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Smart prefetch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
