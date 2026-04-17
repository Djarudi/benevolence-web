import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("subscribers").insert({ email });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Already subscribed", description: "This email is already on our list." });
        } else {
          throw error;
        }
      } else {
        toast({ title: "Subscribed!", description: "Thank you for subscribing. You'll hear from us soon!" });
      }
      setEmail("");
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-3 flex items-center gap-2">
              <Heart className="text-primary" size={24} /> Benevolence is Love
            </h3>
            <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
              Empowering vulnerable children through education and sports, nurturing their academic growth, physical well-being, character, and life skills.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/benevolenceislove" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/benevolenceislove" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@djarudih1374" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://rw.linkedin.com/in/benevolenceislove" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3">Stay Updated</h4>
            <p className="text-primary-foreground/70 text-sm mb-3">Subscribe to get updates on our programs and events.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
            <div className="mt-4">
              <h4 className="font-heading font-semibold mb-2">Contact</h4>
              <ul className="space-y-1 text-sm text-primary-foreground/70">
                <li>Kigali, Rwanda</li>
                <li>
                  <a href="mailto:info@benevolenceislove.org" className="hover:text-primary transition-colors">
                    info@benevolenceislove.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Benevolence is Love. All rights reserved.</p>
          <p className="mt-2">
            Developed by{" "}
            <a href="https://isaie.cwanda.site" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">
              cwanda.site
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
