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
            { name: "Mr. Sohom Mukherjee", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450449/SohomMukherjee_kjvs7e.png", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Chandrima Sinha Roy", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449751/ChandrimaSinhaRoy_qc4faz.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Arnab Hazra", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449689/ArnabHazra_zdxjoc.jpg", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Finance Committee",
        members: [
            { name: "Mr. Sanjoy Bhattacharjee", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450383/SanjoyBhattacharjee_rc9lwy.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Amal Kumar Saha", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449396/AmalKumarSaha_uzvo7d.jpg", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Registration Committee",
        members: [
            { name: "Mrs. Mousumi Ojha", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450247/Mousumi_Ojha_nyrzqn.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Rebeka Sultana", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450347/Rebeka_Sultana_pfmlhy.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Sayani Roy", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450501/SayaniRoy_d1ggpw.jpg", affiliation: "Department of Computer Science & Engineering" },
        ],
    },
    {
        title: "Event Management Committee",
        members: [
            { name: "Mr. Anoy Chowdhury", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449601/Anoy_Chowdhury_pwhxrj.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mr. Abhishek Bysack", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449332/AbhishekBysack_ug9dq0.jpg", affiliation: "System Administration" },
            { name: "Ms. Chandrika Panja", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department" },
            { name: "Ms. Debopriya Biswas", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449785/DebapriyaBiswas_pzk6lp.jpg", affiliation: "Department of Computer Science & Engineering" },
            { name: "Ms. Deepta Debnath", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450146/DeeptaDebnath_uwrnte.png", affiliation: "Department of Computer Science & Engineering" },
            { name: "Mrs. Debasmita Roy Chowdhury", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450065/DebasmitaRoyChowdhury_dxapmb.jpg", affiliation: "Department of Basic Science & Humanities" },
            { name: "Ms. Nibedita Biswas", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450314/NibeditaBiswas_nkjkg0.jpg", affiliation: "Department of Basic Science & Humanities" },
        ],
    },
    {
        title: "Food Committee",
        members: [
            { name: "Mr. Sanjoy Bhattacharjee", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450383/SanjoyBhattacharjee_rc9lwy.jpg", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Mr. Manoj Pandey", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450271/ManojPandey_xelmmj.jpg", affiliation: "Department of Computer Science & Engineering"
            }
        ],
    },
    {
        title: "Transport Committee",
        members: [
            { name: "Dr. Amitava Halder", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449545/AmitavaHalder_evziah.jpg", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Mrs. Sayani Ghosh Saha", image: "/placeholder.svg?height=128&width=128", affiliation: "Admin Department"
            },
            {
                name: "Mr. Maheswar Das", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450203/MaheshwarDas_fztqyb.jpg", affiliation: "Department of Computer Science & Engineering"
            }
        ],
    },
    {
        title: "Website & Design Committee",
        members: [
            { name: "Mr. Sourav Singha", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering" },
            {
                name: "Ms. Sayani Roy", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450501/SayaniRoy_d1ggpw.jpg", affiliation: "Department of Computer Science & Engineering"
            },
            {
                name: "Mr. Tanmoy Ganguly", image: "/placeholder.svg?height=128&width=128", affiliation: "Department of Computer Science & Engineering"
            },
            {
                name: "Mrs. Chandrima Sinha Roy", image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449751/ChandrimaSinhaRoy_qc4faz.jpg", affiliation: "Department of Computer Science & Engineering"
            },
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
