export default function CommitteePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Committee</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the team behind ICCSAI 2025 who are working to make this conference a success.
          </p>
        </div>
      </div>

      {/* Advisory Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Advisory Committee</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Prof. Robert Williams", affiliation: "Harvard University, USA" },
            { name: "Prof. Elena Rodriguez", affiliation: "University of Cambridge, UK" },
            { name: "Prof. Hiroshi Tanaka", affiliation: "University of Tokyo, Japan" },
            { name: "Prof. Maria Gonzalez", affiliation: "Technical University of Munich, Germany" },
            { name: "Prof. David Chen", affiliation: "National University of Singapore, Singapore" },
            { name: "Prof. Sophia Patel", affiliation: "Indian Institute of Technology, India" },
          ].map((member, i) => (
            <div key={`advisory-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div> */}
      </section>

      {/* Technical Program Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Technical Program Committee</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dr. James Wilson", affiliation: "University of California, Berkeley, USA" },
            { name: "Dr. Aisha Khan", affiliation: "King's College London, UK" },
            { name: "Dr. Carlos Mendez", affiliation: "University of São Paulo, Brazil" },
            { name: "Dr. Li Wei", affiliation: "Tsinghua University, China" },
            { name: "Dr. Anna Kowalski", affiliation: "Warsaw University of Technology, Poland" },
            { name: "Dr. Ahmed Hassan", affiliation: "Cairo University, Egypt" },
            { name: "Dr. Priya Sharma", affiliation: "Indian Institute of Science, India" },
            { name: "Dr. Thomas Mueller", affiliation: "ETH Zurich, Switzerland" },
            { name: "Dr. Yuki Tanaka", affiliation: "Kyoto University, Japan" },
            { name: "Dr. Nicole Brown", affiliation: "University of Melbourne, Australia" },
            { name: "Dr. Raj Patel", affiliation: "University of Toronto, Canada" },
            { name: "Dr. Olga Petrov", affiliation: "Moscow State University, Russia" },
          ].map((member, i) => (
            <div key={`technical-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div> */}
      </section>

      {/* Core Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Core Committee</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Prof. Alexander Lee", role: "General Chair", affiliation: "Stanford University, USA" },
            { name: "Prof. Sophia Chen", role: 'Program  affiliation: "Stanford University, USA' },
            { name: "Prof. Sophia Chen", role: "Program Chair", affiliation: "MIT, USA" },
            { name: "Dr. Michael Johnson", role: "Publications Chair", affiliation: "University of Oxford, UK" },
            {
              name: "Dr. Emily Wong",
              role: "Publicity Chair",
              affiliation: "National University of Singapore, Singapore",
            },
            {
              name: "Prof. Daniel Kim",
              role: "Workshops Chair",
              affiliation: "Seoul National University, South Korea",
            },
            {
              name: "Dr. Olivia Martinez",
              role: "Registration Chair",
              affiliation: "Technical University of Madrid, Spain",
            },
          ].map((member, i) => (
            <div key={`core-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  )
}

