import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import heroImg from "@assets/generated_images/hero.jpg";
import salonDetails from "@assets/generated_images/salon-details.jpg";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="text-primary tracking-widest text-sm uppercase font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif text-secondary mb-8 leading-tight">
              A Legacy of <br/><span className="text-primary italic">Elegance</span>
            </h1>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Founded on the belief that every woman deserves a space to unwind and be celebrated, Nabhia's Salon has grown into Islamabad's premier destination for luxury beauty services.
              </p>
              <p>
                Located in the serene surroundings of Ghauri Town Phase 4A, we've carefully designed our salon to feel like a retreat. The soft cream walls, warm gold lighting, and unhurried atmosphere reflect our approach to beauty: considered, elegant, and deeply personal.
              </p>
              <p>
                Under the guidance of [Owner Name], our team of expert artisans treats beauty as a craft. Whether it's a transformative bridal look or a restorative hydra facial, we commit to using only the finest products and techniques to bring your vision to life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src={heroImg} 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square rounded-[30px] overflow-hidden shadow-xl border-8 border-background z-20">
              <img 
                src={salonDetails} 
                alt="Salon Details" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-secondary to-secondary"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Philosophy</h2>
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic mb-10">
              "True beauty is not about changing who you are. It's about enhancing your natural grace and ensuring you walk out feeling more confident than when you arrived."
            </p>
            <div className="w-24 h-[1px] bg-primary/50 mx-auto"></div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div>
          <SectionHeading title="What Sets Us Apart" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                icon: HeartHandshake,
                title: "Personalized Craft",
                desc: "No two clients are the same. We take the time to understand your features, preferences, and lifestyle to deliver a bespoke result."
              },
              {
                icon: Sparkles,
                title: "Premium Products",
                desc: "We refuse to compromise on quality. Our shelves are stocked with international, high-end brands that nourish and protect."
              },
              {
                icon: ShieldCheck,
                title: "Uncompromising Hygiene",
                desc: "Your safety and comfort are paramount. We maintain rigorous sterilization protocols across all tools, stations, and treatments."
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <val.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-secondary mb-4">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
