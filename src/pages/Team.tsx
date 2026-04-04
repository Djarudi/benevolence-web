import { User } from "lucide-react";

const teamMembers = [
  { name: "Djarudi Habimana", role: "Founder | President" },
  { name: "Dylan Robin Nziza Mugenga", role: "Vice President" },
  { name: "Jules Ntakirutimana", role: "Secretary General" },
  { name: "Fabrice Iradukunda", role: "Sports & Talents Development Coordinator" },
  { name: "Jean Pierre Hakizuwera", role: "Project Coordinator" },
  { name: "Patient Asiimwe", role: "Member" },
  { name: "Shaffy Amir Manzi", role: "Member" },
  { name: "Marie Doris Kirezi Gasasira", role: "Finance and Administration Officer" },
  { name: "Galille Mugenzi Kayumba", role: "Goodwill Ambassador - Europe" },
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
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="text-primary" size={32} />
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
