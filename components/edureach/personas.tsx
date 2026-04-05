import { User, GraduationCap, Users } from "lucide-react"

// User personas section showcasing who EduReach helps
export function Personas() {
  const personas = [
    {
      icon: GraduationCap,
      name: "Priya, 16",
      role: "Rural Student — Rajasthan",
      quote: "I study under a street light — there's no Wi-Fi there.",
      pain: "Misses 3–4 live classes per week due to 2G signal drops; re-watching recorded videos costs extra data she can't afford.",
      need: "Offline-capable lessons accessible after a brief sync window; lightweight quizzes she can attempt without internet.",
      impact: "Scores 18% lower than urban peers; at risk of dropping out by Class 11.",
      color: "primary",
    },
    {
      icon: User,
      name: "Mr. Sharma, 42",
      role: "Teacher — Govt. School, UP",
      quote: "Half my class vanishes mid-lesson — I never know why.",
      pain: "Repeats the same lecture 2–3 times a week for students who disconnected; cannot gauge who is keeping up.",
      need: "Async attendance tracking; ability to push lesson summaries even to students on SMS-only plans.",
      impact: "Spends 35% of class time re-explaining content; burnout rising.",
      color: "accent",
    },
    {
      icon: Users,
      name: "Kavita, 38",
      role: "Parent — Rural Maharashtra",
      quote: "Education shouldn't bankrupt us.",
      pain: "Monthly mobile data bill for her daughter's classes equals ₹800 — nearly 20% of household income.",
      need: "A platform that downloads content during cheap off-peak hours and runs without active internet.",
      impact: "Considering withdrawing daughter from online school to cut costs.",
      color: "chart-3",
    },
  ]

  return (
    <section id="personas" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Who Is Affected
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            User Personas
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three distinct groups bear the brunt of the connectivity gap—each with unique pain 
            points that EduReach is designed to solve.
          </p>
        </div>

        {/* Personas grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-${persona.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <persona.icon className={`w-6 h-6 text-${persona.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{persona.name}</h4>
                  <p className="text-sm text-muted-foreground">{persona.role}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="italic text-muted-foreground border-l-2 border-primary pl-4 mb-6">
                &quot;{persona.quote}&quot;
              </blockquote>

              {/* Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <h5 className="text-xs font-medium uppercase text-destructive mb-1">Pain</h5>
                  <p className="text-sm text-foreground">{persona.pain}</p>
                </div>
                <div>
                  <h5 className="text-xs font-medium uppercase text-primary mb-1">Need</h5>
                  <p className="text-sm text-foreground">{persona.need}</p>
                </div>
                <div>
                  <h5 className="text-xs font-medium uppercase text-accent mb-1">Impact</h5>
                  <p className="text-sm text-foreground">{persona.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
