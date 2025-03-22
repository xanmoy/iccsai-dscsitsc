import { Shield, Brain, Lock, Cloud, CheckSquare, Cpu } from "lucide-react"

export function ConferenceTracks() {
  const tracks = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cyber Security",
      description: "Network Security, Cryptography, Security Protocols, Intrusion Detection",
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI for Security",
      description: "Threat Intelligence, Anomaly Detection, Security Analytics, Automated Response",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Secure AI",
      description: "Adversarial Machine Learning, Privacy-Preserving AI, Robust AI Systems",
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Security",
      description: "Secure Cloud Computing, Virtualization Security, Containerization",
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-primary" />,
      title: "Ethical AI",
      description: "Responsible AI, Fairness, Accountability, Transparency, Ethics",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "IoT Security",
      description: "Secure IoT Architectures, IoT Threat Modeling, Smart Device Security",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
          <div className="space-y-2 max-w-3xl">
            <h2 className="section-title gradient-heading">Conference Tracks</h2>
            <p className="section-description">
              ICCSAI 2025 covers a wide range of topics at the intersection of cyber security and artificial
              intelligence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 rounded-xl p-6 border bg-card shadow-sm card-hover"
            >
              <div className="rounded-full bg-primary/10 p-3">{track.icon}</div>
              <h3 className="text-xl font-bold">{track.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
