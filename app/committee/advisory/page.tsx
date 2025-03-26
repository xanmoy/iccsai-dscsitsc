"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CoreCommitteePage() {
    return (
        <div className="container px-4 py-12 md:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advisory Committee</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Meet the Advisory team behind ICCSAI 2025 who are working to make this conference a success.
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
    )
}

// Committee Data
const committeeData = [
    {
        title: "Advisory Committee",
        members: [
            { name: "Prof. (Dr.) Jyotsna Kumar Mandal", affiliation: "Department of Computer Science and Engineering, Kalyani University, India" },
        ],
    },
]