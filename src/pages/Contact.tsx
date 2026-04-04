import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-accent">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground">Contact Us</h1>
          <p className="text-accent-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Get in touch today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:info@benevolenceislove.org" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@benevolenceislove.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm">Contact us via social media</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
