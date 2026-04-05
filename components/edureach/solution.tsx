import { Wifi, WifiOff, MessageSquare, Zap, Check } from "lucide-react"

// Solution overview section
export function Solution() {
  const principles = [
    "Offline-first: every lesson accessible without active internet",
    "Bandwidth-aware: auto-detects signal and adapts content format",
    "Device-agnostic: runs on ₹3,000 Android phones and feature phones via SMS",
    "Data-minimal: full lesson under 2 MB vs 200 MB for HD video",
    "Teacher-empowered: async dashboards, offline attendance sync",
  ]

  const features = [
    {
      icon: Wifi,
      title: "Adaptive Streaming",
      description: "Real-time bandwidth detection degrades delivery: HD Video → SD → Audio → Slides+Text → SMS synopsis. Zero manual action.",
    },
    {
      icon: WifiOff,
      title: "Offline PWA",
      description: "Installable Progressive Web App. Full lesson content, quizzes, and notes cached via Service Workers—usable without any connection.",
    },
    {
      icon: MessageSquare,
      title: "SMS Fallback",
      description: "Lesson summaries, MCQs, and class alerts delivered as plain SMS via Twilio API. Works on zero-data feature phones.",
    },
    {
      icon: Zap,
      title: "Smart Prefetch Engine",
      description: "ML-based predictor fetches next lessons during detected connectivity windows, storing them in IndexedDB for seamless offline use.",
    },
  ]

  return (
    <section id="solution" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Solution
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            EduReach — Adaptive Learning Platform
          </h3>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description and principles */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              EduReach is an offline-first, bandwidth-adaptive learning platform designed from the 
              ground up for students on 2G, 3G, and intermittent connections. Unlike existing platforms 
              that simply &quot;downgrade&quot; video quality, EduReach fundamentally rethinks content 
              delivery—shifting from a stream-everything model to a <span className="text-primary font-semibold">sync-what-you-can, learn-always</span> model.
            </p>

            <h4 className="text-xl font-bold text-foreground mb-4">Core Principles</h4>
            <ul className="space-y-3">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h5 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h5>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
