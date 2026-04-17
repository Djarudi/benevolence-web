import oresteImg from "@/assets/team-oreste-ishimwe.png";

const teamMembers = [
  {
    name: "Djarudi Habimana",
    role: "Founder | President",
    image: "https://i.ibb.co/qLFjk0j8/1000280269.jpg",
  },
  {
    name: "Dylan Robin Nziza Mugenga",
    role: "Vice President",
    image: "https://i.ibb.co/svbNWpxy/AA5-Ab-UDNv-Zc-H9o-Q5-ZZa-K2-D6i9-3x5j1-OKMe6m-D5-my-Ezubyrzgf-Cb-AIuv-Fs-YRg-d-C7c-UXNr3nd4-H4g339-M6-SP8.jpg",
  },
  {
    name: "Jules Ntakirutimana",
    role: "Secretary General",
    image: "https://i.ibb.co/xS65CKhq/image.png",
  },
  {
    name: "Fabrice Iradukunda",
    role: "Sports & Talents Development Coordinator",
    image: "https://i.ibb.co/nswbytLH/image.png",
  },
  {
    name: "Jean Pierre Hakizuwera",
    role: "Project Coordinator",
    image: "https://i.ibb.co/Z6bB9h0S/image.png",
  },
  {
    name: "Patient Asiimwe",
    role: "Member",
    image: "https://i.ibb.co/G4v3hFpK/image.png",
  },
  {
    name: "Shaffy Amir Manzi",
    role: "Member",
    image: "https://i.ibb.co/hxQMQRnN/image.png",
  },
  {
    name: "Oreste Ishimwe",
    role: "Finance and Administration Officer",
    image: oresteImg,
  },
  {
    name: "Marie Doris Kirezi Gasasira",
    role: "Member",
    image: "https://i.ibb.co/j9WYDq0r/image.png",
  },
  {
    name: "Galille Mugenzi Kayumba",
    role: "Goodwill Ambassador - Europe",
    image: "https://i.ibb.co/XrP69xV9/image.png",
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
            <div key={member.name} className="bg-secondary/50 rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 bg-muted flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
