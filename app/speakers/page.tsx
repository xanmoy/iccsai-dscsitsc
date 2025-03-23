import Image from "next/image";

interface Speaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  bio?: string;
  image: string;
}

interface SpeakerSection {
  title: string;
  speakers: Speaker[];
}

const speakerSections: SpeakerSection[] = [
  {
    title: "Keynote Address",
    speakers: [
      {
        id: "keynote-1",
        name: "Dr. Goutam Paul",
        designation: "Professor",
        institution: "Indian Statistical Institute, Kolkata, India ",
        bio: "Cryptology & Security Research Unit (CSRU)",
        image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587175/unnamed_ankf5o.jpg",
      },
      {
        id: "keynote-2",
        name: "Prof. (Dr.) Prasanta Kumar Jana",
        designation: "Professor",
        institution: "Indian Institute of Technology (ISM), Dhanbad, India",
        bio: "Department of Computer Science & Engineering",
        image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587271/unnamed_1_hvvuzg.jpg",
      },
    ],
  },
  {
    title: "Plenary Speakers",
    speakers: [
      {
        id: "plenary-1",
        name: "Coming Soon",
        designation: "Coming Soon",
        institution: "Coming Soon",
        bio: "Coming Soon",
        image: "/placeholder.svg?height=128&width=128",
      },
    ],
  },
  {
    title: "Invited Talk",
    speakers: [
      {
        id: "invited-1",
        name: "Dr. Arijit Karati",
        designation: "Professor",
        institution: "National Sun Yat-sen University (NSYSU), Taiwan",
        bio: "Department of Computer Science & Engineering",
        image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587317/unnamed_2_y8rlyf.jpg",
      },
    ],
  },
  {
    title: "Distinguished Speakers",
    speakers: [
      {
        id: "distinguished-1",
        name: "Dr. Tanushyam Chattopadhyay",
        designation: "Senior Researcher",
        institution: "Adani AI Lab, India",
        // bio: "Industry leader in AI security and privacy-preserving machine learning techniques.",
        image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587371/unnamed_3_f7emra.jpg",
      },
    ],
  },
];

export default function SpeakersPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Speakers</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet our distinguished speakers who will share their expertise and insights at ICCSAI 2025.
          </p>
        </div>
      </div>

      {speakerSections.map((section) => (
        <section key={section.title} className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">{section.title}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {section.speakers.map((speaker) => (
              <div key={speaker.id} className="flex flex-col items-center space-y-4 border rounded-lg p-6 w-80">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.institution}</p>
                  <p className="mt-2 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}
