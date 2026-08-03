import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-wide text-primary">
                Nabhia's
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Where beauty meets elegance. A luxury salon experience in the heart of Islamabad, dedicated to enhancing your natural radiance.
            </p>
            <div className="flex space-x-4">
              <a href="[Instagram Link Placeholder]" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="[Facebook Link Placeholder]" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span>Ghauri Town Phase 4A,<br />Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <span>[Phone Number]</span>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail size={18} className="mr-3 text-primary shrink-0" />
                <span>[Email Address]</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground text-sm">
                <Clock size={18} className="mr-3 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>Mon - Sat: [Opening Hours]</span>
                  <span className="text-primary mt-1">Sunday: Closed / [Hours]</span>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/book">
                <button className="w-full py-3 px-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-lg text-sm font-semibold">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {currentYear} Nabhia's Salon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
