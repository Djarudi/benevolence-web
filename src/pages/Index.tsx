import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Trophy } from "lucide-react";
import gallery13 from "@/assets/gallery-13.jpg";
import galleryImg1 from "@/assets/gallery-7.jpg";
import galleryImg2 from "@/assets/gallery-8.jpg";
import galleryImg3 from "@/assets/gallery-9.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Children Supported" },
  { icon: BookOpen, value: "100+", label: "School Fees Paid" },
  { icon: Trophy, value: "10+", label: "Sports Programs" },
  { icon: Heart, value: "50+", label: "Volunteers" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pb-32">
      
      {/* Background Image */}
      <img
        src={gallery13}
        alt="Community group photo with children"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover brightness-100 saturate-75 contrast-90"
      />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-up">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          Empowering Children, Transforming Futures
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          At Benevolence is Love, we break the cycle of poverty through education and sports, one empowered child at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/programs"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity text-lg"
          >
            Get Involved
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground font-semibold backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors text-lg border border-primary-foreground/30"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Floating Stats Board */}
      <div className="absolute bottom-[-60px] left-0 right-0 px-4 z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 text-white" size={28} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section (Original) */}
    <section className="py-16 bg-card mt-20 border-2 border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-secondary/50"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={32} />
              <p className="font-heading text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">About Us</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            At Benevolence is Love, we are driven by a powerful vision of positive change. Our organization is dedicated to empowering vulnerable families by providing essential education support to their children. With a firm belief in the transformative power of education, we strive to break the cycle of poverty and create a brighter future for generations to come.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Gallery</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          With education, we're unlocking a world of opportunities for these young talents.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[galleryImg1, galleryImg2, galleryImg3].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl group">
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View More
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Every contribution matters. Together, we can ensure every child has access to education and the chance to thrive.
        </p>
        <a href="https://donate.benevolenceislove.org/checkout/benevolenceislove?rid=28330123&is_free_trial=true" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold hover:opacity-90 transition-opacity text-lg">
          Donate Now
        </a>
      </div>
    </section>
  </div>
);

export default Index;
