"use client"

import { AlertTriangle, Video, DollarSign, Zap, Smartphone } from "lucide-react"

// Problem section showcasing the connectivity crisis statistics
export function Problem() {
  const stats = [
    { value: "600M+", label: "Students in low-bandwidth or no-internet zones globally" },
    { value: "72%", label: "Rural learners report frequent class disruptions due to connectivity" },
    { value: "5 Mbps", label: "Minimum bandwidth required for uninterrupted live HD video streaming" },
    { value: "40%", label: "Drop in student engagement when buffering exceeds 3 seconds per lesson" },
  ]

  const rootCauses = [
    { icon: Video, text: "Video-first platforms assume broadband" },
    { icon: DollarSign, text: "Data plans cost 10–40% of rural income" },
    { icon: Zap, text: "Power outages interrupt downloads" },
    { icon: AlertTriangle, text: "No offline fallback in mainstream apps" },
    { icon: Smartphone, text: "Content not optimised for low-end devices" },
  ]

  // Internet access data for the bar chart
  const accessData = [
    { region: "Urban India", percentage: 82 },
    { region: "Urban Global", percentage: 87 },
    { region: "Rural India", percentage: 31 },
    { region: "Rural Africa", percentage: 18 },
    { region: "Rural SE Asia", percentage: 24 },
  ]

  return (
    <section id="problem" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            The Problem
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Connectivity Crisis in Education
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Over 600 million students worldwide study in regions where internet connectivity is either 
            unavailable, unstable, or unaffordable. Modern e-learning platforms are built for broadband—they 
            mandate continuous HD video streams that collapse entirely on 2G/3G networks.
          </p>
        </div>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bar chart and root causes */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Internet access chart */}
          <div className="p-6 rounded-xl bg-background border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              % Students with Reliable Internet Access
            </h4>
            <div className="space-y-4">
              {accessData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.region}</span>
                    <span className="text-foreground font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Root causes */}
          <div className="p-6 rounded-xl bg-background border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Root Causes
            </h4>
            <div className="space-y-4">
              {rootCauses.map((cause, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <cause.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground">{cause.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital divide callout */}
        <div className="mt-12 p-6 rounded-xl bg-destructive/10 border border-destructive/20 text-center">
          <p className="text-lg text-foreground">
            This creates a deep <span className="font-semibold text-destructive">digital divide</span>: 
            urban students thrive while rural learners are systematically excluded.
          </p>
        </div>
      </div>
    </section>
  )
}
