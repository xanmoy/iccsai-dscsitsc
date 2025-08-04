"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Program Committee
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the Technical team behind ICCSAI 2025 who are working to make
              this conference a success.
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
              {[...members]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((member, i) => (
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
    </div>
  );
}

// Committee Data
const committeeData = [
  {
    title: "Coming Soon",
    members: [
      { name: "Abdul Wahid", affiliation: "University of Galway, Ireland" },
      {
        name: "Abeg Kumar Jaiswal",
        affiliation: "Government Autonomous College Rourkela, India",
      },
      {
        name: "Abid Yahya",
        affiliation:
          "Botswana International University of Science & Technology, Botswana",
      },
      {
        name: "Abhishek Hazra",
        affiliation:
          "Indian Institute of Information Technology, Sri City, India",
      },
      {
        name: "Ajay Kumar Mallick",
        affiliation: "National Institute of Technology, Hamirpur, India",
      },
      { name: "Amar Kaswan", affiliation: "Hexagon Geosystems" },
      {
        name: "K. Ambedkar",
        affiliation: "Geethanjali College of Engineering and Technology, India",
      },
      { name: "Amit Kumar", affiliation: "Galgotias University, India" },
      {
        name: "Amjad Osmani",
        affiliation: "Qazvin branch Azad university, Iran",
      },
      {
        name: "Anuja Dixit",
        affiliation:
          "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India",
      },
      {
        name: "Ashish Kr. Luhach",
        affiliation: "The PNG University of Technology, Papua New Guinea",
      },
      {
        name: "Bander Ali Saleh Al-rimy",
        affiliation: "University of Portsmouth, UK",
      },
      { name: "Bodhisattwa Mukherjee", affiliation: "Oracle, India" },
      { name: "Choudhary Shyam Prakash", affiliation: "SOA University, India" },
      {
        name: "Daya Sagar Gupta",
        affiliation: "Indian Institute of Technology, Patna, India",
      },
      {
        name: "Debasish Mukherjee",
        affiliation: "Illinois Advanced Research Center at Singapore",
      },
      {
        name: "Debasis Das",
        affiliation: "Indian Institute of Technology, Jodhpur, India",
      },
      { name: "Dinesh Kumar Prabhakar", affiliation: "BIT Sindri, India" },
      { name: "Ginny", affiliation: "Qualcomm" },
      {
        name: "Ibrahim Ghafir",
        affiliation: "University of Bradford, England",
      },
      {
        name: "Imran Rasheed",
        affiliation: "KL University, Vijayawada, India",
      },
      { name: "Indrajeet Gupta", affiliation: "Bennett University, India" },
      { name: "Jayraj Singh", affiliation: "NIIT University, India" },
      {
        name: "Jitesh Pradhan",
        affiliation: "National Institute of Technology Jamshedpur, India",
      },
      {
        name: "Kartick Sutradhar",
        affiliation:
          "Indian Institute of Information Technology, Sri City, India",
      },
      {
        name: "Lalatendu Muduli",
        affiliation: "Utkal University, Bhubaneswar, Odisha, India",
      },
      {
        name: "Mahdin Mahboob",
        affiliation: "Stony Brook University, New York, USA",
      },
      {
        name: "Mahendra Krishnapatnam",
        affiliation: "Persistent Systems, India",
      },
      {
        name: "Mahendra Singh",
        affiliation:
          "ICMR-National Institute of Cancer Prevention and Research, India",
      },
      {
        name: "Manoj Kumar Mishra",
        affiliation: "Banaras Hindu University, India",
      },
      { name: "Mantosh Biswas", affiliation: "University of Delhi, India" },
      {
        name: "Md. Azharuddin",
        affiliation: "Aliah University, Kolkata , India",
      },
      {
        name: "Megha Quamara",
        affiliation: "King's College London, United Kingdom",
      },
      {
        name: "Mohammad Shameem",
        affiliation:
          "King Fahd University of Petroleum and Minerals, Saudi Arabia",
      },
      {
        name: "Mou Dasgupta",
        affiliation: "National Institute of Technology, Raipur, India",
      },
      { name: "Moumi Mukherjee", affiliation: "Accenture, India" },
      {
        name: "Mudassir Rafi",
        affiliation: "King Khalid University, Abha, Saudi Arabia",
      },
      {
        name: "Naushad Varish",
        affiliation: "GITAM University, Hyderabad, India",
      },
      {
        name: "Pradeepika Verma",
        affiliation: "Indian Institute of Technology, Patna",
      },
      {
        name: "Pratik Ranjan",
        affiliation: "Motihari College of Engineering, Motihari, India",
      },
      {
        name: "Pratyay Kuila",
        affiliation: "National Institute of Technology, Sikkim, India",
      },
      { name: "Praveen Lalwani", affiliation: "VIT BHOPAL University, India" },
      {
        name: "Preeti Chandrakar",
        affiliation: "National Institute of Technology, Raipur, India",
      },
      {
        name: "Preeti Soni",
        affiliation: "National Institute of Technology, Hamirpur, India",
      },
      {
        name: "Priyambada Subudhi",
        affiliation:
          "Indian Institute of Information Technology, Sri City, India",
      },
      { name: "Priyanka", affiliation: "SRM University-AP, India" },
      {
        name: "Rahul Mishra",
        affiliation:
          "National Institute of Advanced Manufacturing Technology, Ranchi, India",
      },
      { name: "Rajesh Purkait", affiliation: "SOA University, India" },
      {
        name: "Rakesh Ranjan Kumar",
        affiliation: "C V Raman Global University Bhubneswar, India",
      },
      {
        name: "Rifaqat Ali",
        affiliation: "National Institute of Technology, Hamirpur, India",
      },
      {
        name: "Ritesh Kumar",
        affiliation: "Indian Institute of Information Technology, Surat, India",
      },
      {
        name: "Ruhul Amin",
        affiliation:
          "International Institute of Information Technology, Naya Raipur, India",
      },
      {
        name: "S.Rajanarayanan",
        affiliation:
          "Vinayaka Missions Kirupananda Variyar Engineering College, India",
      },
      {
        name: "Sangram Ray",
        affiliation: "National Institute of Technology, Sikkim, India",
      },
      {
        name: "Sanjaya Kumar Panda",
        affiliation: "National Institute of Technology, Warangal, India",
      },
      {
        name: "Santosh Kumar Das",
        affiliation: "Sarala Birla University, Ranchi, India",
      },
      {
        name: "Saugata Roy",
        affiliation:
          "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India",
      },
      {
        name: "Shamik Palit",
        affiliation: "University of Stirling RAK Campus, UAE",
      },
      {
        name: "Shipra kumari",
        affiliation: "Turning Point Academy, and TPA-Data Tech Odisha, India",
      },
      {
        name: "Shyamapada Mukherjee",
        affiliation: "National Institute of Technology, Rourkela, India",
      },
      {
        name: "Siba Mishra",
        affiliation: "C V Raman Global University Bhubneswar, India",
      },
      {
        name: "Sk. Hafizul Islam",
        affiliation:
          "Indian Institute of Information Technology, Kalyani, India",
      },
      {
        name: "Soumya Das",
        affiliation: "Eindhoven University of Technology, Netherlands",
      },
      {
        name: "Srikanth Jannu",
        affiliation: "Vaagdevi Engineering College, Warangal, India",
      },
      {
        name: "Srinath Chandramohan",
        affiliation: "InsurTech practice at Ernst & Young, USA",
      },
      {
        name: "Sudeep Varshney",
        affiliation: "Sharda University, Greater Noida, India",
      },
      {
        name: "Sudhanshu Kumar Jha",
        affiliation: "University of Allahabad, India",
      },
      {
        name: "Sumanta Ray",
        affiliation:
          "The West Bengal National University of Juridical Science, Kolkata, India",
      },
      { name: "Suneet Gupta", affiliation: "Bennett University, India" },
      {
        name: "Sunil Gautam",
        affiliation: "Nirma University Ahmedabad, India",
      },
      { name: "Suresh Dara", affiliation: "VIT-AP University, India" },
      {
        name: "Surendra Singh",
        affiliation:
          "Maulana Azad National Institute of Technology, Bhopal, India",
      },
      {
        name: "Tapas Kumar Mishra",
        affiliation: "SRM University AP, Andhra Pradesh, India",
      },
      {
        name: "Krishan Berwal",
        affiliation: "National Institute of Technology, Kurukshetra, India",
      },
      { name: "Goutham Reddy", affiliation: "ACE Health and Wellness, India" },
      {
        name: "Mahendra Pratap Yadav",
        affiliation: "Indian Institute of Information Technology, Pune, India",
      },
      { name: "Vijayan Asari", affiliation: "University of Dayton, Ohio, USA" },
      {
        name: "Sartaj Ul Hasan",
        affiliation: "Indian Institute of Technology, Jammu, India",
      },
      {
        name: "Sonam Maurya",
        affiliation: "Indian Institute of Information Technology, Pune, India",
      },
      {
        name: "VijayaLakshmi A",
        affiliation: "B V Raju Institute of Technology, Hyderabad, India",
      },
      {
        name: "Anoop Patel",
        affiliation: "National Institute of Technology, Kurukshetra, India",
      },
      { name: "Anil Kumar Verma", affiliation: "Thapar University, India" },
      {
        name: "Vincenzo Piuri",
        affiliation: "Universita Degli Studi di Milano, Italy",
      },
      {
        name: "Keshav Dahal",
        affiliation: "University of the West Scotland, UK",
      },
      { name: "Marko Hölbl", affiliation: "University of Maribor, Slovenia" },
      {
        name: "Arun PV",
        affiliation:
          "Indian Institute of Information Technology, Sricity, India",
      },
      {
        name: "Odelu Vanga",
        affiliation:
          "Indian Institute of Information Technology, Sricity, India",
      },
      {
        name: "Sujit Das",
        affiliation: "National Institute of Technology, Warangal, India",
      },
      {
        name: "Devesh C Jinwala",
        affiliation:
          "Sardar Vallabhbhai National Institute of Technology, Surat, India",
      },
      {
        name: "Swapan Maiti",
        affiliation:
          "Visvesvaraya National Institute of Technology, Nagpur, India",
      },
      {
        name: "Vijay Kumar Chahar",
        affiliation: "National Institute of Technology, Hamirpur, India",
      },
      { name: "Kamlesh Tiwari", affiliation: "BITS PILANI, India" },
      {
        name: "Satyaki Roy",
        affiliation: "The University of Alabama in Huntsville, Alabama",
      },
      {
        name: "Kriti Bhushan",
        affiliation: "National Institute of Technology, Kurukshetra, India",
      },
      {
        name: "Fagen Li",
        affiliation:
          "University of Electronic Science and Technology of China, Chengdu",
      },
      { name: "Sunirmal Khatua", affiliation: "University of Calcutta, India" },
      {
        name: "Kirti Kumari",
        affiliation:
          "Indian Institute of Information Technology, Ranchi, India",
      },
      {
        name: "Dilip Singh Sisodia",
        affiliation: "National Institute of Technology, Raipur, India",
      },
      {
        name: "Sunita Dhavale",
        affiliation: "Defence Institute of Advanced Technology, India",
      },
      {
        name: "Pramit Mazumdar",
        affiliation:
          "Indian Institute of Information Technology, Vadodara, India",
      },
      {
        name: "Jayakrushna Sahoo",
        affiliation:
          "Indian Institute of Information Technology, Kottayam, India",
      },
      {
        name: "Sweta Jain",
        affiliation:
          "Maulana Azad National Institute of Technology, Bhopal, India",
      },
      {
        name: "Bhupendra Singh",
        affiliation: "Indian Institute of Information Technology, Pune, India",
      },
      {
        name: "Tandra Pal",
        affiliation: "National Institute of Technology, Durgapur, India",
      },
      {
        name: "Mueen Uddin",
        affiliation: "University of Doha for Science and Technology, Qatar",
      },
      { name: "Akber Khan", affiliation: "Jamia Milia Islamia, India" },
      {
        name: "Prema Kumar Veerapaneni",
        affiliation: "JP Morgan Chase & Co., USA",
      },
      {
        name: "Rituraj Soni",
        affiliation: "Engineering College Bikaner, India",
      },
      { name: "Satnam Kaur", affiliation: "Punjab Engineering College, India" },
      {
        name: "Santhi Thilagam",
        affiliation: "National Institute of Technology, Kurukshetra, India",
      },
      { name: "Biswapati Jana", affiliation: "Vidyasagar University, India" },
      { name: "Wajdi Alhakami", affiliation: "Taif University, Saudi Arabia " },
      {
        name: "Weisheng Si",
        affiliation: "Western Sydney University, Australia",
      },
      {
        name: "Yossi Oren",
        affiliation: "Ben-Gurion University, Israel",
      },
      {
        name: "Christophe Doche",
        affiliation: "Sydney Institute, Australia",
      },
      {
        name: "Crispin Almodovar",
        affiliation: "Central Queensland University, Australia",
      },
      {
        name: "Dr. Md Whaiduzzaman",
        affiliation: "Torrens University, USA",
      },
      {
        name: "Dr. Muddesar Iqbal",
        affiliation: "Prince Sultan University, Saudi Arabia",
      },
      {
        name: "Fahad Alzahrani",
        affiliation: "Umm Al-Qura University, Saudi Arabia",
      },
      {
        name: "Fatih Kurugollu",
        affiliation: "University of Sharjah, UAE",
      },
      {
        name: "Frank Jiang",
        affiliation: "Deakin University, Australia",
      },
      {
        name: "Hui Li",
        affiliation: "Peking University, China",
      },
      {
        name: "Jairo Giraldo",
        affiliation: "University of Utah, USA",
      },
      {
        name: "Kyu Hyung Lee",
        affiliation: "University of Georgia, USA",
      },
      {
        name: "Muhammad Rudyanto Arief",
        affiliation: "Universitas Amikom Yogyakarta, Indonesia",
      },
      {
        name: "Panagiotis Radoglou-Grammatikis",
        affiliation: "University of Western Macedonia, Greece",
      },
      {
        name: "Prof. Dr. Mohamed Batouche",
        affiliation:
          "Princess Nourah bint Abdulrahman University, Saudi Arabia",
      },
      {
        name: "Quan Zhou",
        affiliation: "Hunan University, China",
      },
      {
        name: "Rasha Kashef",
        affiliation: "Toronto Metropolitan University (TMU), Canada",
      },
      {
        name: "Shefiq Abdulla",
        affiliation: "University of Calicut, Dubai, United Arab Emirates",
      },
      {
        name: "Yannan Li",
        affiliation: "University of Wollongong, Australia",
      },
      {
        name: "Shuqiang Wang",
        affiliation:
          "Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences, China",
      },
      {
        name: "Aboozar Taherkhani",
        affiliation: "De Montfort University, UK",
      },
      {
        name: "Tansel Dokeroglu",
        affiliation: "TED University, Turkey",
      },
      {
        name: "Yazhou Ren",
        affiliation:
          "University of Electronic Science and Technology of China, China",
      },
      {
        name: "Darryl K. Ahner",
        affiliation: "United States Military Academy, USA",
      },
      {
        name: "Raha Akhavan-Tabatabaei",
        affiliation: "North Carolina State University Fitts, USA",
      },
      {
        name: "Shaurya Sengar",
        affiliation: "Senior Staff Software Engineer (IC7), Meta, USA",
      },
      {
        name: "Diksha Rangwani",
        affiliation: "National Institute of Technology, Sikkim, India",
      },
      {
        name: "Aniket Gharpure",
        affiliation: "Wellington Management Company, USA",
      }
    ],
  },
];
