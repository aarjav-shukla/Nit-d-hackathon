import { Wifi, Globe } from "lucide-react"

// Footer section with tagline and credits
export function Footer() {
  return (
    <footer className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main tagline */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground max-w-3xl mx-auto text-balance">
            EduReach — Because geography and data plans should never decide who gets an education.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Wifi className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">EduReach</span>
            </div>

            {/* Event info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>PS ID: EC606</span>
              <span className="hidden sm:inline">•</span>
              <span>Eclipse 6.0</span>
              <span className="hidden sm:inline">•</span>
              <span>EdTech | Accessibility & Inclusion</span>
            </div>

            {/* Hosted by */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              Hosted by ACM Chapter, <br className="sm:hidden" />Thapar Institute of Engineering & Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
