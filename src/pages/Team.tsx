import { Linkedin } from "lucide-react";
import oresteImg from "@/assets/team-oreste-ishimwe.jpg";
import donDivinImg from "@/assets/team-don-divin-bayubahe.png";
import marieDorisImg from "@/assets/team-marie-doris.jpg";

// TODO(team): fill in `bio` (one or two sentences) and `linkedin` for each member.
// Both are optional — a card renders fine while they are empty, and the bio or the
// LinkedIn icon appears as soon as you add one.
//
// TODO(team): the six `https://i.ibb.co/...` images are hotlinked from a free image
// host and can disappear without warning. Download each one into src/assets/ and
// import it at the top of this file, the way the three local photos below are done.

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Djarudi Habimana",
    role: "Founder and Executive Director",
    image: "https://i.ibb.co/qLFjk0j8/1000280269.jpg",
    bio: "",
    linkedin: "",
  },
  {
    name: "Dylan Robin Nziza Mugenga",
    role: "Deputy Director",
    image: "https://i.ibb.co/svbNWpxy/AA5-Ab-UDNv-Zc-H9o-Q5-ZZa-K2-D6i9-3x5j1-OKMe6m-D5-my-Ezubyrzgf-Cb-AIuv-Fs-YRg-d-C7c-UXNr3nd4-H4g339-M6-SP8.jpg",
    bio: "",
    linkedin: "",
  },
  {
    name: "Jules Ntakirutimana",
    role: "Secretary General",
    image: "https://i.ibb.co/xS65CKhq/image.png",
    bio: "",
    linkedin: "",
  },
  {
    name: "Fabrice Iradukunda",
    role: "Talent & Community Engagement Coordinator",
    image: "https://i.ibb.co/nswbytLH/image.png",
    bio: "",
    linkedin: "",
  },
  {
    name: "Jean Pierre Hakizuwera",
    role: "Project Coordinator",
    image: "https://i.ibb.co/Z6bB9h0S/image.png",
    bio: "",
    linkedin: "",
  },
  {
    name: "Oreste Ishimwe",
    role: "Finance and Administration Officer",
    image: oresteImg,
    bio: "",
    linkedin: "",
  },
  {
    name: "Don Divin Bayubahe",
    role: "Digital Innovation Officer",
    image: donDivinImg,
    bio: "",
    linkedin: "",
  },
  {
    name: "Marie Doris Kirezi Gasasira",
    role: "Gender & Child Protection Officer",
    image: marieDorisImg,
    bio: "",
    linkedin: "",
  },
  {
    name: "Galille Mugenzi Kayumba",
    role: "Goodwill Ambassador - Europe",
    image: "https://i.ibb.co/XrP69xV9/image.png",
    bio: "",
    linkedin: "",
  },
];

const Team = () => (
  <div>
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Team</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
          Meet the heart and soul of our mission – a dedicated team passionate about creating positive change.
        </p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-secondary/50 rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 bg-muted flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>

              {member.bio && (
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{member.bio}</p>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-4 mx-auto inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
