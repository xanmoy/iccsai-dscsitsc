import { Shield, Brain, Lock, Cloud, CheckSquare, Cpu, AudioLines, ShieldCheck, } from "lucide-react"

export function ConferenceTracks() {
  const tracks = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cyber Security in Infrastructure",
      description: "Integrity, Trust Management, Attacks, Cryptography, quantum Security, Distributed System, Zero Trust, Embedded System ",
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI driven Cyber Security",
      description: "Automation, Gamification, Smart-grid, Big Data, A.I Governance, Threat Prediction, Cyber Warfare,",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Cyber Security for Emerging Technologies",
      description: "Blockchain, Digital Forensics, E-health, Web Service, Embedded & Digital Twin",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Cyber Security in IoT Applications",
      description: "Security, IoT, Cloud, Forensics, Automation, Encryption, Privacy, IOT and Cloud Forensic",
    },
    
    {
      icon: <AudioLines className="h-6 w-6 text-primary" />,
      title: "Cyber Security in Wireless Communication Network",
      description: "5G/6G in Cybersecurity, WSN, Edge, VANETs, UAV, Wireless Network, Threats",
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
              <h3 className="text-xl text-center font-bold">{track.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
