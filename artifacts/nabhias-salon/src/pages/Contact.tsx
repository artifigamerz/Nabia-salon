import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="We'd love to hear from you. Visit our salon or reach out for inquiries and bookings."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border h-full flex flex-col">
              <h3 className="text-3xl font-serif text-secondary mb-8">Salon Details</h3>
              
              <div className="space-y-8 flex-grow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nabhia's Salon<br />
                      Ghauri Town Phase 4A,<br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Phone / WhatsApp</h4>
                    <p className="text-muted-foreground">[Phone Number]</p>
                    <p className="text-muted-foreground">[WhatsApp Number]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Email</h4>
                    <p className="text-muted-foreground">[Email Address]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Opening Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: [Opening Hours]</p>
                    <p className="text-muted-foreground">Sunday: [Hours] / Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border flex justify-center gap-4">
                <a href="[Instagram Link]" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="[Facebook Link]" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Map / Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Map Placeholder */}
            <div className="bg-white p-2 rounded-3xl shadow-sm border border-border overflow-hidden h-[300px] relative">
              <div className="absolute inset-0 bg-muted/50 flex flex-col items-center justify-center m-2 rounded-2xl border border-dashed border-border/80">
                <MapPin className="text-primary/50 w-12 h-12 mb-4" />
                <p className="text-secondary font-medium mb-2">Google Maps Embed</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">View on Maps</Button>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border flex-grow">
              <h3 className="text-2xl font-serif text-secondary mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                <textarea placeholder="How can we help you?" className="w-full h-32 p-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"></textarea>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
