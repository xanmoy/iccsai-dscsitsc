export function AboutConference() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              About ICCSAI 2025
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Where Cyber Security Meets Artificial Intelligence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The International Conference on Cyber Security and Artificial Intelligence (ICCSAI) 2025 brings together
                researchers, practitioners, and industry experts to share cutting-edge research, innovations, and
                applications at the intersection of cyber security and artificial intelligence.
              </p>
              <p>
                This premier forum aims to foster collaboration, exchange ideas, and address the challenges and
                opportunities in these rapidly evolving fields. Join us for two days of keynote speeches, technical
                sessions, panel discussions, and networking opportunities.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Engage with leading researchers and practitioners</li>
                <li>Discover the latest advancements in AI-driven security</li>
                <li>Network with peers from academia and industry</li>
                <li>Explore opportunities for collaboration</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
            <img src="/placeholder.svg?height=500&width=800" alt="Conference" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

