"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { link } from "fs";
import Link from "next/link";

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
            Core Committee
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the Core team behind ICCSAI 2025 who are working to make this
            conference a success.
          </p>
        </div>
      </motion.div>

      {/* Render HeadData Sections */}

      {/* <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <h2 className="text-2xl font-bold pt-20 text-center mb-8">
          Program Chair
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
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
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
      </motion.section> */}

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
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {member.affiliation}
                  </p>
                {member.link && (
                  <Link
                    href={member.link}
                    className="text-sm text-blue-500 hover:underline p-3"
                    target="_blank"
                  >
                    Visit Profile
                  </Link>
                )}

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
  link?: string;
};


type CommitteeData = {
  title: string;
  members: Member[];
};

// 
const committeeData = [
  {
    title: "Program Chair",
    members: [
      {
        name: "Valentina Emilia Balas",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1745490342/ValentinaEmiliaBalas_ey5grd.jpg",
        affiliation:
          "Aurel Vlaicu University of Arad, Romania",
        link: "https://scholar.google.com/citations?user=XaktX0wAAAAJ&hl=en",
      },
      {
        name: "   Chun-I Fan",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1744136713/Chun-I-Fan_xh5lmj.jpg",
        affiliation:
          "National Sun Yat-Sen University, Taiwan",
        link: "https://scholar.google.com.tw/citations?user=H38E7usAAAAJ&hl=zh-TW",
      },
      {
        name: "  Debasis Giri",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743751888/DebasisGiri_nj2uev.jpg",
        affiliation:
          "Department of Information Technology, Maulana Abul Kalam Azad University of Technology, West Bengal, India",
      },
      
      {
        name: "  Debashis Das",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449860/DebashisDas_wvkkfd.jpg",
        affiliation:
          " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Soumitra Roy",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450529/SoumitraRoy_rsto7k.jpg",
        affiliation:
          " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      
    ],
  },
  {
    title: "Organizing Chair",
    members: [
      {
        name: "  Amrut Ranjan Jena",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449434/AmrutRanjanJena_jm8f3s.jpg",
        affiliation: "Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Madhusmita Mishra",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450183/MadhusmitaMishra_nkpyun.jpg",
        affiliation: "Department of Computer Science & Engineering (AI & ML), Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Amitava Halder",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449545/AmitavaHalder_evziah.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Technical Committee",
    members: [
      {
        name: "  Soham Mukherjee",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1744136948/Soham_Mukherjee_ccfc24.png",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Chandrima Sinha Roy",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1744136846/Chandrima_Sinha_Roy_r8tre3.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Arnab Hazra",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449689/ArnabHazra_zdxjoc.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Finance Committee",
    members: [
      {
        name: "  Sanjoy Bhattacharjee",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450383/SanjoyBhattacharjee_rc9lwy.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Amal Kumar Saha",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449396/AmalKumarSaha_uzvo7d.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Registration Committee",
    members: [
      {
        name: " Mousumi Ojha",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450247/Mousumi_Ojha_nyrzqn.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Rebeka Sultana",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450347/Rebeka_Sultana_pfmlhy.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Sayani Roy",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450501/SayaniRoy_d1ggpw.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Event Management Committee",
    members: [
      {
        name: "  Anoy Chowdhury",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449601/Anoy_Chowdhury_pwhxrj.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "Manisha Das ",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1745172655/ManishaDas_o6znsq.jpg",
        affiliation: "Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Abhishek Bysack",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449332/AbhishekBysack_ug9dq0.jpg",
        affiliation: "System Administration,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Chandrika Panja",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: "Admin Department,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Debapriya Biswas",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449785/DebapriyaBiswas_pzk6lp.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Deepta Debnath",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450146/DeeptaDebnath_uwrnte.png",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Debasmita Roy Chowdhury",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450065/DebasmitaRoyChowdhury_dxapmb.jpg",
        affiliation: "Department of Basic Science & Humanities,Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Nibedita Biswas",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450314/NibeditaBiswas_nkjkg0.jpg",
        affiliation: "Department of Basic Science & Humanities,Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },

    ],
  },
  {
    title: "Food Committee",
    members: [
      {
        name: "  Sanjoy Bhattacharjee",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450383/SanjoyBhattacharjee_rc9lwy.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Manoj Pandey",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450271/ManojPandey_xelmmj.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Transport Committee",
    members: [
      {
        name: "  Amitava Halder",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743449545/AmitavaHalder_evziah.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Sayani Ghosh Saha",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: "Admin Department,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Maheswar Das",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450203/MaheshwarDas_fztqyb.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Website & Design Committee",
    members: [
      {
        name: "  Tanmoy Ganguly",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743506029/WhatsApp_Image_2025-03-22_at_14.55.44_wuv7h1.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Chandrima Sinha Roy",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1744136846/Chandrima_Sinha_Roy_r8tre3.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Sayani Roy",
        image:
          "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743450501/SayaniRoy_d1ggpw.jpg",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Sourav Singha",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: " Department of Computer Science & Engineering, Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
  {
    title: "Publicity Committee",
    members: [
      {
        name: " Sayani Ghosh Saha",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: "Admin Department,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: " Suparna Rej",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: "Admin Department,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
      {
        name: "  Kripa Shankar Tiwary",
        image: "/placeholder.svg?height=128&width=128",
        affiliation: "Admin Department,Dr.  Sudhir Chandra Sur Institute of Technology and Sports Complex, Kolkata, India",
      },
    ],
  },
];