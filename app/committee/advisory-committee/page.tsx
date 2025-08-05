"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreCommitteePage() {
  return (
    <div className="container px-4 py-12 h-max md:min-h-screen md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Advisory Committee
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the Advisory team behind ICCSAI 2025 who are working to make
            this conference a success.
          </p>
        </div>
      </motion.div>

      {/* Render Committee Sections */}
      {committeeData.map(({ title, members }, index) => (
        <motion.section
          key={title}
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center mb-10">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {members.map((member, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center space-y-4 border rounded-xl p-6 w-full max-w-xs shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
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

// Committee Data
const committeeData = [
  {
    title: "International Advisory committee",
    members: [
      {
        name: "Prof. Gautam Srivastava",
        affiliation: "Brandon University, Brandon, Manitoba, Canada",
      },
      {
        name: "Prof. Mohammad Obaidet",
        affiliation: "The University of Jordan, Jordan",
      },
      {
        name: "Prof. Rajkumar Buyya",
        affiliation: "The University of Melbourne, Australia",
      },
      {
        name: "Prof. Kouichi Sakurai,",
        affiliation: "Kyushu University, Japan",
      },
      {
        name: "Prof. YoungHo Park",
        affiliation: "Kyungpook National University, Korea",
      },
      {
        name: "Prof. Sherali Zeadally",
        affiliation: "University of Kentucky, USA",
      },
      {
        name: "Prof. (Dr.) Rick S. Blum",
        affiliation: "Lehigh University, Pennsylvania, United States",
      },
      {
        name: "Prof. (Dr.) Sundararaja Sitharama Iyengar",
        affiliation: "Florida International University, Miami, USA",
      },
      {
        name: "Prof. (Dr.) Anand Nayyar",
        affiliation: "Duy Tan University, Da Nang, Viet Nam",
      },
      {
        name: "Prof. (Dr.) Farrukh A. Khan",
        affiliation: "King Saud University",
      },
      {
        name: "Prof. (Dr.) Chun-I Fan",
        affiliation: "National Sun Yat-Sen University, Taiwan",
      },
      {
        name: "Prof. (Dr.) Danda B. Rawat",
        affiliation: "Howard University, Washington DC, USA",
      },
      {
        name: "Dr. Sachin Kumar",
        affiliation:
          "Akian College of Science and Engineering, American University of Armenia, Yerevan, The Republic of Armenia",
      },
      {
        name: "Prof. (Dr.) Sivaram Murugan",
        affiliation:
          "Sivas University of Science and Technology, Sivas, Turkey",
      },
      {
        name: "Dr. Aaisha Makkar",
        affiliation: "University of Derby, UK",
      },
      {
        name: "Guoliang Xue",
        affiliation: "Arizona State University, Arizona, USA",
      },
      {
        name: "Kim-Kwang Raymond Choo",
        affiliation: "University of Texas at San Antonio, USA",
      },
      {
        name: "Adam Joinson",
        affiliation: "University of Bath, UK",
      },
      {
        name: "Michael Waidner",
        affiliation: "TU Darmstadt, ATHENE, Fraunhofer SIT, Germany",
      },
      {
        name: "Wanlei Zhou",
        affiliation: "City University of Macau, Macao",
      },
      {
        name: "Wei Zhao",
        affiliation: "Shenzhen University of Advanced Technology, China",
      },
      {
        name: "Dr Nour Moustafa",
        affiliation: "University of New South Wales (UNSW Canberra)",
      },
      {
        name: "Steven Furnell",
        affiliation: "University of Nottingham, UK",
      },
      {
        name: "Christopher Leckie",
        affiliation: "The University of Melbourne, Australia",
      },
      {
        name: "John Yen",
        affiliation: "The Pennsylvania State University, USA",
      },
      {
        name: "Sherman SM Chow",
        affiliation: "The Chinese University of Hong Kong, China",
      },
      {
        name: "Joseph K. Liu",
        affiliation: "Monash University, Australia",
      },
      {
        name: "Teng Joon Lim",
        affiliation: "University of Sydney, Australia",
      },
      {
        name: "Ruilong Deng",
        affiliation: "Zhejiang University, China",
      },
      {
        name: "Weizhi Meng",
        affiliation: "Lancaster University, United Kingdom",
      },
      {
        name: "Tianqing Zhu",
        affiliation: "City University of Macau, Macao",
      },
      {
        name: "Ron Vetter",
        affiliation: "University of North Carolina Wilmington, USA",
      },
      {
        name: "Jordan Shropshire",
        affiliation: "University of South Alabama, USA",
      },
      {
        name: "Bowei Xi",
        affiliation: "Purdue University, Indiana, USA",
      },
      {
        name: "Mass Soldal Lund",
        affiliation: "Norwegian Defence University College, Norway",
      },
      {
        name: "Amit Dhiman",
        affiliation: "Hcl America",
      }
    ],
  },
  {
    title: "National Advisory Committee",
    members: [
      {
        name: "Prof. (Dr.) Jyotsna Kumar Mandal",
        affiliation: "Kalyani University, India",
      },
      {
        name: "Prof. (Dr.) Debdeep Mukhopadhyay",
        affiliation: "Jadavpur University, India",
      },
      {
        name: "Prof. (Dr.) Rajat Subhra Chakraborty",
        affiliation: "Indian Institute of Technology, Kharagpur, India",
      },
      {
        name: "Prof. (Dr.) Sudeep Tanwar",
        affiliation: "Nirma University, India",
      },

      {
        name: "Dr. Arup Kumar Pal",
        affiliation:
          "Indian Institute of Technology (Indian School of Mines), Dhanbad, India",
      },

      {
        name: "Dr. Goutam Paul",
        affiliation: "Professor, Indian Statistical Institute, Kolkata, India",
      },

      {
        name: "Mrs. Atreyee Dey",
        affiliation:
          "Senior Staff Software Engineer Leading Google Search India",
      },
      {
        name: "Dr. Rama Subbanna Somarpu",
        affiliation:
          "Chaitanya Bharathi Institute of Technology, Proddatur, India",
      },
      {
        name: "Aishwarya Natarajan",
        affiliation:
          "Amazon Webservices",
      }
    ],
  },
];
