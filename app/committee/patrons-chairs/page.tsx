"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Patrons & Chairs
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The conference is organized by the Department of Computer Science and
                        Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports
                        Complex, Kolkata, India. The event is supported by JIS Group.
                    </p>
                </div>
            </motion.div>

            {/* Render HeadData Sections */}

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {" "}
                <h2 className="text-2xl font-bold pt-20 text-center mb-8">
                    Chief Patron
                </h2>
                <div className="mt-16 flex flex-col sm:flex-row gap-6 sm:justify-center sm:gap-12">
                    {headData.map(({ title, member }, index) => (
                        <motion.div
                            key={`${title}-${index}`} // Ensure uniqueness by appending index
                            className="flex flex-col items-center space-y-6 border rounded-lg p-6 w-full sm:w-96"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-center">{title}</h2>
                            {member.map((member, i) => (
                                <div
                                    key={`${member.name}-${i}`}
                                    className="flex flex-col items-center"
                                >
                                    {/* <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={128}
                                            height={128}
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="text-center mt-2">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {member.affiliation}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </motion.section>

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
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 text-center lg:grid-cols-3 gap-6 place-items-center"> */}
                    <div className={`grid ${members.length === 1 ? "place-content-center" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        } text-center gap-6 place-items-center`}>
                        {members.map((member, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center space-y-4 border rounded-lg p-6 w-80"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="object-cover"
                                    />
                                </div> */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {member.affiliation}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            ))}
        </div>
    );
}

const collegeName = "";
// Committee Data
type Member = {
    name: string;
    image: string;
    affiliation: string;
};

type HeadData = {
    title?: string;
    member: Member[];
    id: number;
};
type CommitteeData = {
    title: string;
    members: Member[];
};

const headData: HeadData[] = [
    {
        // title: "Co-Convenor",
        id: 1,
        member: [
            {
                name: "Sardar Taranjit Singh",
                image:
                    "/placeholder.svg?height=128&width=128",
                affiliation:
                    "Mangaing Director, JIS Group",
            },
        ],
    },
    
];
const committeeData = [
    {
        title: "Patron(s)",
        members: [
            {
                name: "Sardar Haranjit Singh",
                
                affiliation: "Joint MD, JIS Group ",
            },
            {
                name: "Sardar Amrik Singh",
               
                affiliation: "Deputy MD, JIS Group",
            },
            {
                name: "Ms. Manpreet Kaur",
                
                affiliation: " CEO, JIS Group",
            },
            {
                name: "Sardar Simarpreet Singh",
                
                affiliation: "Director, JIS Group",
            },
            {
                name: "Ms. Jaspreet Kaur",
                
                affiliation: "Director, JIS Group",
            },
            {
                name: "Sardar Harjot Singh",
                
                affiliation: "Director, JIS Group",
            },
            {
                name: "Sardar Amanjot Singh",
                
                affiliation: "Director, JIS Group",
            },
            {
                name: "Sardar Anmol Singh Narula",
                
                affiliation: "Director, JIS Group",
            },
        ],
    },
    {
        title: "Honorary Chair",
        members: [
            {
                name: "Prof. (Dr.) Jyotsna Kumar Mandal",
                affiliation: "Professor, Department of Computer Science & Engineering, Kalyani University, India",
            },
        ],
    },
    {
        title: "General Chair(s)",
        members: [
            {
                name: "Prof. (Dr.) Ajay Kumar Ray",
                affiliation: "Director, JISIASR, Kolkata, India",
            },
            {
                name: "Prof. (Dr.) Neeraj Saxena",
                affiliation: "Pro-Chancellor, JIS University, Kolkata, India",
            },
            {
                name: "Prof. (Dr.) Bhabes Bhattacharya ",
                affiliation: "Vice Chancellor, JIS University, Kolkata, India",
            },
        ],
    },
    {
        title: "Conference Chair",
        members: [
            {
                name: "Prof. (Dr.) Saradindu Panda",

                affiliation: "Principal, SurTech, Kolkata, India",
            },
            
        ],
    },
    {
        title: "Program Chair(s)",
        members: [
            {
                name: "Dr. Debasis Giri",
                image:
                    "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449601/Anoy_Chowdhury_pwhxrj.jpg",
                affiliation: "Department of Information Technology, MAKAUT, India",
            },
            {
                name: "Dr. Soumitra Roy",
                affiliation: "Department of Computer Science & Engineering, SurTech, Kolkata, India",
            },
            {
                name: "Dr. Debashis Das",
                affiliation: "Department of Computer Science & Engineering, SurTech, Kolkata, India",
            },
        ],
    },
    {
        title: "Organizing Chair(s)",
        members: [
            {
                name: "Dr. Amrut Ranjan Jena",
                affiliation: "Head of the Department, Computer Science & Engineering, SurTech, Kolkata India",
            },
            {
                name: "Mrs. Madhusmita Mishra",
                affiliation: "Teacher-in charge, Departmet of Computer Science & Engineering (AIML), SurTech, Kolkata, India",
            },
            {
                name: "Dr. Amitava Halder",
                affiliation: "Department of Computer Science & Engineering, SurTech, Kolkata, India",
            },
        ],
    },
    {
        title: "Industry Chair(s)",
        members: [
            {
                name: "Dr. Tanushyam Chattopadhyay",
                affiliation: "Principal Scientist at AI Lab, Adani Enterprise Ltd.",
            },
            {
                name: "Dr. Piyush Kanti Bhunre",
                affiliation: "Data Scientist, Ericsson India Global Services Pvt. Ltd",
            },
        ],
    },
    {
        title: "Executive Chair",
        members: [
            {
                name: "Mr. Soumik Jash",
                affiliation: "Account Officer, SurTech, India",
            },
        ],
    },
    
];
