"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoreCommitteePage() {
    return (
        <div>

            
        <div className="container px-4 py-12 md:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Program Committee</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Meet the Technical team behind ICCSAI 2025 who are working to make this conference a success.
                    </p>
                </div>
            </motion.div>

            {/* Render Committee Sections */}
            {committeeData.map(({ title, members }, index) => (
                <motion.section
                    key={title}
                    className="mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    {/* <h2 className="text-2xl font-bold text-center mb-8">{title}</h2> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {members.map((member, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center space-y-4 border rounded-lg p-6 w-80"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                    <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover" />
                                </div> */}
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
        </div>
    )
}

// Committee Data
const committeeData = [
    {
        title: "Coming Soon",
        members: [
            { name: "Dr. Daya Sagar Gupta", affiliation: "Indian Institute of Technology, Patna, India" },
            { name: "Dr. Shyamapada Mukherjee", affiliation: "National Institute of Technology, Rourkela, India" },
            { name: "Dr. Debasis Das", affiliation: "Indian Institute of Technology, Jodhpur, India" },
            { name: "Dr. Sanjaya Kumar Panda", affiliation: "National Institute of Technology, Warangle, India" },
            { name: "Dr. Sangram Ray", affiliation: "National Institute of Technology, Sikkim, India" },
            { name: "Dr. Sk. Hafizul Islam", affiliation: "Indian Institute of Information Technology, Kalyani, India" },
            { name: "Dr. Soumya Das", affiliation: "Eindhoven University of Technology, Netherlands" },
            { name: "Dr. Md. Azharuddin", affiliation: "Aliah University, Kolkata , India" },
            { name: "Dr. Pratyay Kuila", affiliation: "National Institute of Technology, Sikkim, India" },
            { name: "Dr. Sumanta Ray", affiliation: "The West Bengal National University of Juridical Science, Kolkata, India" },
            { name: "Dr. Mantosh Biswas", affiliation: "University of Delhi, India" },
            { name: "Dr. Ruhul Amin", affiliation: "International Institute of Information Technology, Naya Raipur, India" },
            { name: "Prof. (Dr.) Abid Yahya", affiliation: "Botswana International University of Science & Technology" },
            { name: "Mr. Bodhisattwa Mukherjee", affiliation: "Principal Software Engineer, Oracle" },
            { name: "Mrs. Moumi Mukherjee", affiliation: "Business & Integration Architect Associate Manager, Accenture" },
            { name: "Dr. Shamik Palit", affiliation: "University of Stirling RAK Campus, United Arab Emirates" },
            { name: "Dr. Mahdin Mahboob", affiliation: "Stony Brook University, New York, USA" },
            { name: "Dr. Megha Quamara", affiliation: "King's College London, United Kingdom" },
            { name: " Dr. Amjad Osmani", affiliation: "Qazvin branch Azad university, Iran" },
        ],
    },
]