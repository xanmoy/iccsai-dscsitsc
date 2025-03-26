"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoreCommitteePage() {
    return (
        <div className="container px-4 py-12 md:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Committee</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Meet the Core team behind ICCSAI 2025 who are working to make this conference a success.
                    </p>
                </div>
            </motion.div>

            {/* Render Committee Sections */}
            {committeeData.map(({ title, members }, index) => (
                <motion.section
                    key={title}
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {members.map((member, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center space-y-4 border rounded-lg p-6 w-80"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                    <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            ))}
        </div>

    )
}

// Committee Data
const committeeData = [
    {
        title: "Technical Committee",
        members: [
            { name: "Mr. Sohom Mukherjee", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Chandrima Sinha Roy", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Arnab Hazra", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Finance Committee",
        members: [
            { name: "Mr. Sanjoy Bhattacharjee", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Amal Kumar Saha", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Registration Committee",
        members: [
            { name: "Mrs. Mousumi Ojha", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Rebeka Sultana", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Sayani Roy", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Event Management Committee",
        members: [
            { name: "Mr. Anoy Chowdhury", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Abhishek Bysack", image: "/placeholder.svg?height=128&width=128", affiliation: "System Administration" },
            { name: "Ms. Chandrika Panja", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department" },
            { name: "Ms. Debopriya Biswas", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Deepta Debnath", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Debasmita Roy Chowdhury", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Basic Science & Humanities" },
            { name: "Mrs. Nibedita Biswas", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Basic Science & Humanities" },
        ],
    },
    {
        title: "Food Committee",
        members: [
            { name: "Mr. Sanjoy Bhattacharjee", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Mr. Manoj Pandey", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering"
            }
        ],
    },
    {
        title: "Transport Committee",
        members: [
            { name: "Dr. Amitava Halder", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Mrs. Sayani Ghosh Saha", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
            {
                name: "Mr. Maheswar Das", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering"
            }
        ],
    },
    {
        title: "Website Committee",
        members: [
            { name: "Mr. Sourav Singha", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Ms. Sayani Roy", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering"
            },
            {
                name: "Mr. Tanmoy Ganguly", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering"
            }
        ],
    },
    {
        title: "Publicity Committee",
        members: [
            {
                name: "Mr. Aviroop Dewan", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
            {
                name: "Mrs. Sayani Ghosh Saha", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
            {
                name: "Ms. Suparna Rej", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
            {
                name: "Mr. Kripa Shankar Tiwary", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
        ],
    },
]
