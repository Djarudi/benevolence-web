import { BookOpen, Dumbbell, Users, Monitor, Heart } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    price: "$5",
    description:
      "We cover school fees and provide essential school materials to underprivileged children, ensuring every child has access to the tools of learning.",
    donateLabel: "Support Education",
    donateUrl:
      "https://donate.benevolenceislove.org/checkout/benevolenceisloved?rid=28329989",
  },
  {
    icon: Dumbbell,
    title: "Sports & Talent Development",
    price: "$8",
    description:
      "Our structured sports programs help children develop confidence, discipline, teamwork, and leadership skills while discovering their talents.",
    donateLabel: "Get Involved",
    donateUrl:
      "https://donate.benevolenceislove.org/checkout/benevolenceisloved?rid=28330036",
  },
  {
    icon: Users,
    title: "Parent Workshops",
    price: "$2",
    description:
      "We extend support to parents through workshops, ensuring a holistic approach to empowerment and community development.",
    donateLabel: "Donate Now",
    donateUrl:
      "https://donate.benevolenceislove.org/checkout/benevolenceisloved?rid=28330088",
  },
  {
    icon: Monitor,
    title: "ICT and Electronics",
    price: "$10",
    description:
      "We introduce children to robotics, electronics, and coding, equipping them with future-ready digital skills and fostering innovation and creativity.",
    donateLabel: "Buy Us Tools",
    donateUrl:
      "https://donate.benevolenceislove.org/checkout/benevolenceisloved?rid=28330108",
  },
];

const Donate = () => (
  <div>
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
          Make a Difference
        </h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
          Your generosity changes lives. Choose a program to support and help
          us empower communities.
        </p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-secondary/50 rounded-2xl border border-border p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <program.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {program.title}
              </h3>
              <p className="text-3xl font-bold text-primary mt-2">
                {program.price}
              </p>
              <p className="text-sm text-muted-foreground mt-1 mb-1">
                per month
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mt-2">
                {program.description}
              </p>
              <a
                href={program.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                {program.donateLabel}
              </a>
            </div>
          ))}
        </div>

        {/* General donation */}
        <div className="max-w-xl mx-auto mt-16 text-center">
          <Heart className="mx-auto text-primary mb-4" size={40} />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            General Donation
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't decide? Make a general contribution and we'll allocate it
            where it's needed most.
          </p>
          <a
            href="https://donate.benevolenceislove.org/checkout/benevolenceisloved?rid=28330123&is_free_trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Donate Now
          </a>
        </div>

        {/* Membership */}
        <div className="max-w-xl mx-auto mt-12 text-center border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            Become a Member
          </h2>
          <p className="text-muted-foreground mb-6">
            Join our community of supporters with a recurring membership and
            make a lasting impact.
          </p>
          <a
            href="https://donate.benevolenceislove.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Memberships
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Donate;
