import { Smartphone, Wifi, Settings, Cloud, LayoutDashboard, Database } from "lucide-react"

// Technical architecture and data flow section
export function Architecture() {
  const flowSteps = [
    { icon: Smartphone, label: "Student Device", color: "primary" },
    { icon: Wifi, label: "BW Detector", color: "accent" },
    { icon: Settings, label: "Mode Router", color: "chart-3" },
    { icon: Cloud, label: "Content CDN", color: "chart-4" },
    { icon: LayoutDashboard, label: "Teacher Dashboard", color: "chart-5" },
  ]

  const modeMatrix = [
    { bandwidth: "> 4 Mbps", mode: "HD Video Stream", dataUsage: "~180 MB/hr", status: "Active", statusColor: "primary" },
    { bandwidth: "1–4 Mbps", mode: "SD Video", dataUsage: "~60 MB/hr", status: "Active", statusColor: "primary" },
    { bandwidth: "200k–1 Mbps", mode: "Audio + Slides", dataUsage: "~15 MB/hr", status: "Active", statusColor: "primary" },
    { bandwidth: "50–200 kbps", mode: "Text + Images", dataUsage: "~3 MB/hr", status: "Fallback", statusColor: "accent" },
    { bandwidth: "< 50 kbps", mode: "SMS / Offline", dataUsage: "~0 MB", status: "Fallback", statusColor: "accent" },
  ]

  return (
    <section id="architecture" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            How It Works
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Technical Architecture & Data Flow
          </h3>
        </div>

        {/* System architecture flow */}
        <div className="mb-16">
          <h4 className="text-lg font-semibold text-foreground mb-8 text-center">System Architecture</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-${step.color}/20 flex items-center justify-center mb-2`}>
                    <step.icon className={`w-8 h-8 md:w-10 md:h-10 text-${step.color}`} />
                  </div>
                  <span className="text-xs md:text-sm text-foreground text-center">{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="text-2xl text-muted-foreground hidden md:block">▶</div>
                )}
              </div>
            ))}
          </div>
          {/* Offline sync indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary border border-border">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Offline Sync ↕</span>
            </div>
          </div>
        </div>

        {/* Adaptive mode decision matrix */}
        <div className="p-6 rounded-xl bg-background border border-border overflow-x-auto">
          <h4 className="text-lg font-semibold text-foreground mb-6">Adaptive Mode Decision Matrix</h4>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Bandwidth</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Mode</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Data Usage</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {modeMatrix.map((row, index) => (
                <tr key={index} className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-4 text-sm text-foreground font-mono">{row.bandwidth}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{row.mode}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{row.dataUsage}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium bg-${row.statusColor}/20 text-${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Offline sync note */}
        <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Offline Sync:</span> All student interactions queued in IndexedDB → 
            auto-uploaded to MongoDB when connection resumes. Teacher sees updates live.
          </p>
        </div>
      </div>
    </section>
  )
}
