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

      {/* Technical Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Technical Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Mr. Sohom Mukherjee", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Chandrima Sinha Roy", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Arnab Hazra", affiliation: "Department of Computer Science & Engineering" },
            
          ].map((member, i) => (
            <div key={`advisory-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Finance Committee */} 
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Finance Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Mr. Sanjoy Bhattacharjee", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Amal Kumar Saha", affiliation: "Department of Computer Science & Engineering" },
            
            
          ].map((member, i) => (
            <div key={`advisory-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>
       Committee


      { /* Registration Committee */ }
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Registration Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Mrs. Mousumi Ojha", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Rebeka Sultana", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Sayani Roy", affiliation: "Department of Computer Science & Engineering" },
            
            
          ].map((member, i) => (
            <div key={`advisory-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Management Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Event Management Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Mr. Anoy Chowdhury", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Abhishek Bysack", affiliation: "System Administration" },
            { name: "Ms. Chandrika Panja", affiliation: "Admin Department" },
            { name: "Ms. Debopriya Biswas", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Deepta Debnath", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Debasmita Roy Chowdhury", affiliation: "Department of Basic Science & Humanities" },
            { name: "Mrs. Nibedita Biswas", affiliation: "Department of Basic Science & Humanities" },
            
          ].map((member, i) => (
            <div key={`technical-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Food Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Food Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Mr. Sanjoy Bhattacharjee", affiliation: "Department of Computer Science & Engineering" },
            {
              name: "Mr. Manoj Pandey", affiliation: "Department of Computer Science & Engineering"
            }
          ].map((member, i) => (
            <div key={`core-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transport Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Transport Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Dr. Amitava Halder", affiliation: "Department of Computer Science & Engineering" },
            {
              name: "Mrs. Sayani Ghosh Saha", affiliation: "Admin Department"
            },
            {
              name: "Mr. Maheswar Das", affiliation: "Department of Computer Science & Engineering"
            }
          ].map((member, i) => (
            <div key={`core-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transport Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Website Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Mr. Sourav Singha", affiliation: "Department of Computer Science & Engineering" },
            {
              name: "Ms. Sayani Roy", affiliation: "Department of Computer Science & Engineering"
            },
            {
              name: "Mr. Tanmoy Gangully", affiliation: "Department of Computer Science & Engineering"
            }
          ].map((member, i) => (
            <div key={`core-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publicity Committee */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Publicity Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Mr. Aviroop Dewan", affiliation: "Admin Department" },
            {
              name: "Mrs. Sayani Ghosh Saha", affiliation: "Admin Department"
            },
            {
              name: "Ms. Suparna Rej", affiliation: "Admin Department"
            },
            {
              name: "Mr. Kripa Shankar Tiwary", affiliation: "Admin Department"
            },
          ].map((member, i) => (
            <div key={`core-${i}`} className="flex flex-col space-y-1 border rounded-lg p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

