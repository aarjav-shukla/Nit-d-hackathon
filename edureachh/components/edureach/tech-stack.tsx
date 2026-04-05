import { Monitor, Server, Plug, CloudCog } from "lucide-react"

// Tech stack section showing all technologies used
export function TechStack() {
  const stacks = [
    {
      icon: Monitor,
      title: "Frontend",
      color: "primary",
      technologies: [
        { name: "React.js (PWA)", description: "Component-based UI; installable offline app" },
        { name: "Tailwind CSS", description: "Utility-first; purged to <5KB in prod" },
        { name: "Service Workers", description: "Offline caching of lessons & assets" },
        { name: "IndexedDB", description: "Client-side storage for answers & progress" },
        { name: "Network Info API", description: "Real-time bandwidth detection in browser" },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "accent",
      technologies: [
        { name: "Node.js + Express", description: "Lightweight REST & WebSocket server" },
        { name: "Socket.io", description: "Real-time lesson presence & sync events" },
        { name: "Redis", description: "Session queue & prefetch job scheduling" },
        { name: "MongoDB Atlas", description: "Flexible document store for lesson content" },
        { name: "FFmpeg", description: "Server-side video → audio transcoding" },
      ],
    },
    {
      icon: Plug,
      title: "APIs & Services",
      color: "chart-3",
      technologies: [
        { name: "Twilio SMS API", description: "SMS lesson delivery & MCQ collection" },
        { name: "AWS S3 + CloudFront", description: "Edge-cached content delivery globally" },
        { name: "Firebase FCM", description: "Push notifications when content is ready" },
        { name: "WebRTC", description: "Peer-to-peer fallback for local classroom" },
        { name: "JWT + OAuth 2.0", description: "Secure auth; works offline with token cache" },
      ],
    },
    {
      icon: CloudCog,
      title: "DevOps & Infra",
      color: "chart-5",
      technologies: [
        { name: "Docker + Kubernetes", description: "Containerised, auto-scaling deployment" },
        { name: "Nginx", description: "Reverse proxy + Brotli compression" },
        { name: "GitHub Actions", description: "CI/CD — lint, test, deploy on every push" },
        { name: "Vercel Edge Fn.", description: "Sub-50ms serverless API at edge locations" },
        { name: "Sentry", description: "Error monitoring; offline error buffering" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built with Modern, Lightweight Technologies
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Every technology choice prioritises low payload, graceful degradation, and offline 
            resilience—not just developer convenience.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-${stack.color}/20 flex items-center justify-center`}>
                  <stack.icon className={`w-5 h-5 text-${stack.color}`} />
                </div>
                <h4 className="text-lg font-bold text-foreground">{stack.title}</h4>
              </div>
              <div className="space-y-3">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start gap-2">
                    <span className="text-primary font-mono text-sm">▸</span>
                    <div>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      <span className="text-sm text-muted-foreground"> — {tech.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance stats */}
        <div className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">{"< 50 KB"}</div>
              <p className="text-sm text-muted-foreground">Total first-load payload</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">~1.2 MB</div>
              <p className="text-sm text-muted-foreground">Lesson audio file</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">{"< 800 bytes"}</div>
              <p className="text-sm text-muted-foreground">SMS lesson size</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            All optimised for sub-100kbps networks
          </p>
        </div>
      </div>
    </section>
  )
}
