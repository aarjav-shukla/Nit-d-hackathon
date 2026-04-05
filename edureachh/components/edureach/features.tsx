import { Activity, WifiOff, MessageSquare, Zap, Monitor, RefreshCw } from "lucide-react"

// Key features section with detailed descriptions
export function Features() {
  const features = [
    {
      icon: Activity,
      title: "Adaptive Mode Switching",
      color: "primary",
      points: [
        "Monitors Network Information API every 5 seconds",
        "HD (>4Mbps) → SD (1–4Mbps) → Audio (200–1000kbps)",
        "Slides+Text (50–200kbps) → SMS synopsis (<50kbps)",
        "Seamless — student never notices the switch",
      ],
    },
    {
      icon: WifiOff,
      title: "Offline-First PWA",
      color: "accent",
      points: [
        "Installable on Android/iOS — no app store needed",
        "Service Workers cache lessons, assets, quizzes",
        "IndexedDB stores progress, answers, notes",
        "Background sync pushes data when online returns",
      ],
    },
    {
      icon: MessageSquare,
      title: "SMS Fallback (Twilio)",
      color: "chart-3",
      points: [
        "Key concepts delivered as 160-char SMS bursts",
        "MCQ answers accepted via reply SMS",
        "Teacher broadcasts schedule & links via SMS",
        "Works on any phone with no data plan at all",
      ],
    },
    {
      icon: Zap,
      title: "Smart Prefetch Engine",
      color: "chart-5",
      points: [
        "Predicts next 2 lessons using engagement history",
        "Schedules downloads during detected good-signal windows",
        "Compresses video to audio-only for background fetch",
        "Respects user-set data budget (e.g. 50MB/day cap)",
      ],
    },
    {
      icon: Monitor,
      title: "Bandwidth-Aware UI",
      color: "chart-4",
      points: [
        "First load < 50 KB — critical CSS only",
        "Images served as WebP at adaptive resolution",
        "Animations/transitions disabled on slow connections",
        "Lazy-loads all non-critical components",
      ],
    },
    {
      icon: RefreshCw,
      title: "Async Sync Engine",
      color: "chart-2",
      points: [
        "All student actions queued locally in IndexedDB",
        "Synced to server the moment connection returns",
        "Conflict resolution via server-side timestamp merge",
        "Teacher sees attendance & quiz results in real time",
      ],
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Key Features
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Makes EduReach Different
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Six interlocking features work together to ensure no student is left behind, 
            regardless of device, data plan, or signal strength.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}`} />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-4">{feature.title}</h4>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
