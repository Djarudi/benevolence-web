import { BookOpen, Dumbbell, Users, Monitor } from "lucide-react";
import gallery1 from "@/assets/gallery-7.jpg";
import gallery4 from "@/assets/gallery-9.jpg";
import gallery6 from "@/assets/gallery-13.jpg";
import gallery7 from "@/assets/gallery-20.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    price: "$5",
    description: "We cover school fees and provide essential school materials to underprivileged children, ensuring every child has access to the tools of learning.",
    image: gallery1,
    donateLabel: "Support",
    donateUrl: "https://donate.benevolenceislove.org/checkout/benevolenceislove?rid=28329989",
  },
  {
    icon: Dumbbell,
    title: "Sports & Talent Development",
    price: "$8",
    description: "Our structured sports programs help children develop confidence, discipline, teamwork, and leadership skills while discovering their talents.",
    image: gallery4,
    donateLabel: "Get Involved",
    donateUrl: "https://donate.benevolenceislove.org/checkout/benevolenceislove?rid=28330036",
  },
  {
    icon: Users,
    title: "Parent Workshops",
    price: "$2",
    description: "We extend support to parents through workshops, ensuring a holistic approach to empowerment and community development.",
    image: gallery6,
    donateLabel: "Donate",
    donateUrl: "https://donate.benevolenceislove.org/checkout/benevolenceislove?rid=28330088",
  },
  {
    icon: Monitor,
    title: "ICT and Electronics",
    price: "$10",
    description: "We introduce children to robotics, electronics, and coding, equipping them with future-ready digital skills and fostering innovation and creativity.",
    image: gallery7,
    donateLabel: "Buy Us Tools",
    donateUrl: "https://donate.benevolenceislove.org/checkout/benevolenceislove?rid=28330108",
  },
];

const Programs = () => (
  <div>
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Programs</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
          Empowering the future begins with education and community.
        </p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed italic">
            "Providing school materials and school fees to underprivileged children is not just an act of generosity; it is an investment in potential, a key to unlocking doors of opportunity."
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {programs.map((program, i) => (
            <div key={program.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
              <div className="flex-1">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-72 object-cover rounded-2xl shadow-md"
                />
              </div>
              <div className="flex-1 space-y-4">
                <program.icon className="text-primary" size={36} />
                <h3 className="font-heading text-2xl font-bold text-foreground">{program.title} <span className="text-primary">({program.price})</span></h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                <a
                  href={program.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  {program.donateLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
