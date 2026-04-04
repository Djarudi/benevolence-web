import { Target, Eye, Heart } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={aboutHero} alt="Children raising hands in classroom" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
      </div>
    </section>

    {/* About Content */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Benevolence Is Love is a community-based organization dedicated to empowering vulnerable children to grow, learn, and thrive. We believe every child deserves a safe space to explore their potential through education and sports.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Our programs combine academic support and structured sports activities, helping children develop confidence, discipline, teamwork, and leadership skills. We work closely with schools, communities, and local partners to ensure that every child has the opportunity to learn, play, and build a brighter future.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At BIL, we measure success not only in grades or medals but in smiles, personal growth, and the positive changes we see in each child's life.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
            <Target className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To empower vulnerable children through education and sports, nurturing their academic growth, physical well-being, character, and life skills so they can become confident, resilient, and responsible members of society.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
            <Eye className="mx-auto mb-4 text-accent" size={40} />
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A future where every child has equal access to learning and sports opportunities, enabling them to reach their full potential and thrive in life with hope, confidence, and resilience.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
            <Heart className="mx-auto mb-4 text-warm" size={40} />
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These mission and vision statements collectively reflect our core values and aspirations, guiding our efforts to make a positive difference in the lives of vulnerable families and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
