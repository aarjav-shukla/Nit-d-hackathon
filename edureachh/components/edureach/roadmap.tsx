"use client"

import { TrendingDown, Users, Globe } from "lucide-react"

// Impact and roadmap section
export function Roadmap() {
  const impactStats = [
    { value: "80%", label: "Reduction in dropout due to connectivity loss", icon: TrendingDown },
    { value: "95%", label: "Less data vs standard video-based platform", icon: TrendingDown },
    { value: "600M+", label: "Students globally who could benefit from EduReach", icon: Users },
  ]

  const phases = [
    {
      phase: "Phase 1",
      title: "MVP",
      timeline: "0–3 months",
      color: "primary",
      tasks: [
        "Core PWA with offline lesson playback",
        "Bandwidth detector + mode switcher",
        "Basic teacher dashboard + attendance",
      ],
    },
    {
      phase: "Phase 2",
      title: "Beta",
      timeline: "3–6 months",
      color: "accent",
      tasks: [
        "SMS fallback via Twilio integration",
        "Smart prefetch engine launch",
        "Async quiz sync + progress tracking",
      ],
    },
    {
      phase: "Phase 3",
      title: "Scale",
      timeline: "6–12 months",
      color: "chart-3",
      tasks: [
        "Multi-language content support (10+ languages)",
        "AI-powered content compression",
        "Pilot with 10,000 students across 3 states",
      ],
    },
    {
      phase: "Phase 4",
      title: "Growth",
      timeline: "Year 2",
      color: "chart-5",
      tasks: [
        "NGO & government school partnerships",
        "WhatsApp Bot + USSD integration",
        "Target: 1 million students, 5 states",
      ],
    },
  ]

  // Data usage comparison
  const dataUsage = [
    { label: "EduReach Offline", value: 0, color: "primary" },
    { label: "EduReach Audio", value: 15, color: "accent" },
    { label: "Standard SD Video", value: 60, color: "muted-foreground" },
  ]

  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Impact & Roadmap
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Measurable Outcomes · Phased Execution
          </h3>
        </div>

        {/* Impact statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Data usage comparison */}
        <div className="mb-16 p-6 rounded-xl bg-background border border-border">
          <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
            Data Usage Comparison (MB/hour)
          </h4>
          <div className="max-w-xl mx-auto space-y-4">
            {dataUsage.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{item.label}</span>
                  <span className="text-muted-foreground">{item.value === 0 ? "0 MB" : `${item.value} MB/hr`}</span>
                </div>
                <div className="h-4 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${(item.value / 60) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development roadmap */}
        <div>
          <h4 className="text-xl font-bold text-foreground mb-8 text-center">Development Roadmap</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border relative"
              >
                {/* Phase indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium bg-${phase.color}/20 text-${phase.color}`}>
                    {phase.phase}
                  </span>
                </div>
                <h5 className="text-lg font-bold text-foreground mb-1">{phase.title}</h5>
                <p className="text-sm text-muted-foreground mb-4">{phase.timeline}</p>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`text-${phase.color} mt-0.5`}>•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
