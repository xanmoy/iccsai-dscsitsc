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
            { name: "Dr. Amjad Osmani", affiliation: "Qazvin branch Azad university, Iran" },
            { name: "Dr. Megha Quamara", affiliation: "King's College London, United Kingdom" },
            { name: "Dr. Mahdin Mahboob", affiliation: "Stony Brook university, New York, USA" },
            { name: "Dr. Shamik Palit", affiliation: "University of Stirling RAK Campus, UAE" },
            { name: "Dr. Sandeep Singh Sengar", affiliation: "Cardiff Metropolitan University, United Kingdom" },
            { name: "Mrs. Moumi Mukherjee", affiliation: "Accenture, India" },
            { name: "Mr. Bodhisattwa Mukherjee", affiliation: "Oracle, India" },
            { name: "Dr. Abid Yahya", affiliation: "Botswana International University of Science & Technology, Botswana" },
            { name: "Dr. Ruhul Amin", affiliation: "International Institute of Information Technology, Naya Raipur, India" },
            { name: "Dr. Mantosh Biswas", affiliation: "University of Delhi, India" },
            { name: "Dr. Sumanta Ray", affiliation: "The West Bengal National University of Juridical Science, Kolkata, India" },
            { name: "Dr. Pratyay Kuila", affiliation: "National Institute of Technology, Sikkim, India" },
            { name: "Dr. Md. Azharuddin", affiliation: "Aliah University, Kolkata , India" },
            { name: "Dr. Soumya Das", affiliation: "Eindhoven University of Technology, Netherlands" },
            { name: "Dr. Sangram Ray", affiliation: "National Institute of Technology, Sikkim, India" },
            { name: "Dr. Sanjaya Kumar Panda", affiliation: "National Institute of Technology, Warangal, India" },
            { name: "Dr. Debasis Das", affiliation: "Indian Institute of Technology, Jodhpur, India" },
            { name: "Dr. Shyamapada Mukherjee", affiliation: "National Institute of Technology, Rourkela, India" },
            { name: "Dr. Daya Sagar Gupta", affiliation: "Indian Institute of Technology, Patna, India" },
            { name: "Dr. Sk. Hafizul Islam", affiliation: "Indian Institute of Information Technology, kalyani, India" },
            { name: "Dr. Ajay Kumar Mallick", affiliation: "National Institute of Technology, Hamirpur, India" },
            { name: "Dr. Ritesh Kumar", affiliation: "Indian Institute of Information Technology, Surat, India" },
            { name: "Dr. Mudassir Rafi", affiliation: "King Khalid University, Abha, Saudi Arabia" },
            { name: "Dr. Surendra Singh", affiliation: "Maulana Azad National Institute of Technology, Bhopal, India" },
            { name: "Dr. Mahendra Krishnapatnam", affiliation: "Persistent Systems, India" },
            { name: "Dr. Srinath Chandramohan", affiliation: "InsurTech practice at Ernst & Young, USA" },
            { name: "Dr. Rakesh Ranjan Kumar", affiliation: "C V Raman Global University Bhubneswar, India" },
            { name: "Dr. S.Rajanarayanan", affiliation: "Vinayaka Missions Kirupananda Variyar Engineering College, India" },
            { name: "Dr. Siba Mishra", affiliation: "C V Raman Global University Bhubneswar, India" },
            { name: "Dr. Sudeep Varshney", affiliation: "Sharda University, Greater Noida, India" },
            { name: "Dr. Jayraj Singh", affiliation: "NIIT University, India" },
            { name: "Dr. Rahul Mishra", affiliation: "National Institute of Advanced Manufacturing Technology, Ranchi, India" },
            { name: "Dr. Sudhanshu Kumar Jha", affiliation: "University of Allahabad, India" },
            { name: "Dr. Rajesh Purkait", affiliation: "SOA University, India" },
            { name: "Dr. Bander Ali Saleh Al-rimy", affiliation: "University of Portsmouth, UK" },
            { name: "Dr. Ibrahim Ghafir", affiliation: "University of Bradford, England" },
            { name: "Dr. Ashish Kr. Luhach", affiliation: "The PNG University of Technology, Papua New Guinea" },
            { name: "Dr. Mou Dasgupta", affiliation: "National Institute of Technology, Raipur, India" },
            { name: "Dr. Suresh Dara", affiliation: "VIT-AP University, India" },
            { name: "Dr. Suneet Gupta", affiliation: "Bennett University, India" },
            { name: "Dr. Shipra kumari", affiliation: "Turning Point Academy, and TPA-Data Tech Odisha, India" },
            { name: "Dr. Srikanth Jannu", affiliation: "Vaagdevi Engineering College, Warangal, India" },
            { name: "Dr. Priyanka", affiliation: "SRM University-AP, India" },
            { name: "Dr. Praveen Lalwani", affiliation: "VIT BHOPAL University, India" },
            { name: "Dr. Tapas Kumar Mishra", affiliation: "SRM University AP, Andhra Pradesh, India" },
            { name: "Dr. Manoj Kumar Mishra", affiliation: "Banaras Hindu University, India" },
            { name: "Dr. Preeti Chandrakar", affiliation: "National Institute of Technology, Raipur, India" },
            { name: "Dr. Naushad Varish", affiliation: "GITAM University, Hyderabad, India" },
            { name: "Dr. Rifaqat Ali", affiliation: "National Institute of Technology, Hamirpur, India" },
            { name: "Dr. Santosh Kumar Das", affiliation: "Sarala Birla University, Ranchi, India" },
            { name: "Dr. Abeg Kumar Jaiswal", affiliation: "Government Autonomous College Rourkela, India" },
            { name: "Dr. Pratik Ranjan", affiliation: "Motihari College of Engineering, Motihari, India" },
            { name: "Dr. Choudhary Shyam Prakash", affiliation: "SOA University, India" },
            { name: "Dr. Sunil Gautam", affiliation: "Nirma University Ahmedabad, India" },
            { name: "Dr. Amit Kumar", affiliation: "Galgotias University, India" },
            { name: "Dr. Indrajeet Gupta", affiliation: "Bennett University, India" },
            { name: "Dr. Lalatendu Muduli", affiliation: "Utkal University, Bhubaneswar, Odisha, India" },
            { name: "Dr. Mohammad Shameem", affiliation: "King Fahd University of Petroleum and Minerals, Saudi Arabia" },
            { name: "Dr. Pradeepika Verma", affiliation: "Indian Institute of Technology, Patna" },
            { name: "Dr. Debasish Mukherjee", affiliation: "Illinois Advanced Research Center at Singapore" },
            { name: "Dr. Jayraj Singh", affiliation: "NIIT University, India" },
            { name: "Dr. K. Ambedkar", affiliation: "Geethanjali College of Engineering and Technology, India" },
            { name: "Dr. Abdul Wahid", affiliation: "University of Galway, Ireland" },
            { name: "Dr. Imran Rasheed", affiliation: "KL University, Vijayawada, India" },
            { name: "Dr. Jitesh Pradhan", affiliation: "National Institute of Technology Jamshedpur, India" },
            { name: "Dr. Dinesh Kumar Prabhakar", affiliation: "BIT Sindri, India" },
            { name: "Dr. Kartick Sutradhar", affiliation: "Indian Institute of Information Technology, Sri City, India" },
            { name: "Dr. Abhishek Hazra", affiliation: "Indian Institute of Information Technology, Sri City, India" },
            { name: "Dr. Priyambada Subudhi", affiliation: "Indian Institute of Information Technology, Sri City, India" },
            { name: "Dr. Saugata Roy", affiliation: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India" },
            { name: "Dr. Anuja Dixit", affiliation: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India" },
            { name: "Dr. Ginny", affiliation: "Qualcomm" },
            { name: "Dr. Amar Kaswan", affiliation: "Hexagon Geosystems" },
            { name: "Dr. Preeti Soni", affiliation: "National Institute of Technology, Hamirpur, India" },
            { name: "Dr. Mahendra Singh", affiliation: "ICMR-National Institute of Cancer Prevention and Research, India" }
        ],
    },
]