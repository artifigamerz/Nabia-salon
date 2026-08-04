import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/data/services";
import { FAQS } from "@/data/faq";
import { 
  CheckCircle, Sparkles, Droplets, HeartHandshake, 
  Clock, MapPin, Star, ShieldCheck, UserCheck, 
  ArrowRight, MessageCircle
} from "lucide-react";
import heroImg from "@assets/ChatGPT_Image_Aug_4,_2026,_06_51_53_PM_1785851568590.png";
import bridalImg from "@assets/Screenshot_2026-08-03_235547_1785783530053.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const featuredServices = SERVICES.filter(s => ['bridal-makeup', 'hair-coloring', 'hydra-facial'].includes(s.id));
  const hairServices = SERVICES.filter(s => s.category === 'Hair').slice(0, 6);
  const skinServices = SERVICES.filter(s => s.category === 'Skin' || s.category === 'Nails').slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary text-sm md:text-base tracking-[0.2em] uppercase mb-6 block font-medium">
              ✦ Welcome to Islamabad's Premier Salon ✦
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight max-w-4xl mx-auto">
              Where Beauty Meets <span className="text-primary italic">Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Share your details and our team will contact you shortly to discuss the best service for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Book Appointment
                </Button>
              </Link>
              <a href="https://wa.me/920512158965" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-secondary">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Badges */}
      <section className="bg-secondary text-primary py-8 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Sparkles, text: "Premium Products" },
              { icon: UserCheck, text: "Expert Stylists" },
              { icon: ShieldCheck, text: "Hygienic Environment" },
              { icon: HeartHandshake, text: "Personalized Care" }
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <badge.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" strokeWidth={1.5} />
                <span className="text-sm md:text-base text-white/90 tracking-wide">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Curated Signatures" 
            subtitle="Discover our most sought-after treatments, executed with precision and artistry."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 z-10 transition-opacity group-hover:opacity-0"></div>
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2 text-secondary">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{service.description}</p>
                  <Link href="/book">
                    <span className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors">
                      Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 rounded-l-full blur-3xl transform translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={heroImg} 
                  alt="Nabhia's Salon Interior" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-tl-[90px] rounded-br-[90px] z-0 -translate-x-2 translate-y-2"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-primary"></span>
                <span className="text-primary tracking-widest text-sm uppercase font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-secondary mb-6 leading-tight">
                Crafting Confidence Through Care
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-8">
                <p>
                  At Nabhia's Salon, we believe that true beauty stems from confidence. Located in the heart of Ghauri Town, Islamabad, we've created a sanctuary where the modern woman can pause, refresh, and emerge renewed.
                </p>
                <p>
                  Our philosophy is rooted in personalized attention. From the moment you step through our doors, our expert artisans work closely with you to understand your unique style, ensuring every treatment reflects your individual beauty.
                </p>
              </div>
              
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lead Stylist</p>
                    <p className="font-serif font-medium text-secondary">[Owner Name]</p>
                  </div>
                </div>
                
                <Link href="/about">
                  <Button variant="link" className="px-0">Read Our Story <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Bridal Section (Dramatic) */}
      <section className="relative py-32 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bridalImg} 
            alt="Luxury Bridal Makeup" 
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary tracking-widest text-sm uppercase font-medium mb-4 block">
              ✦ Bridal Artistry ✦
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Your Dream Bridal Look Awaits
            </h2>
            <p className="text-xl text-white/80 font-light mb-10 leading-relaxed">
              We specialize in creating timeless, breathtaking bridal transformations. Our signature packages ensure you look radiant, flawless, and completely yourself on your special day.
            </p>
            <ul className="space-y-4 mb-10 text-white/90">
              {["Customized Bridal Makeup & Styling", "Pre-bridal Skincare Regimens", "Premium Quality Products", "Dedicated Bridal Suite"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/book">
              <Button size="lg" className="text-lg">
                Enquire About Bridal Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Hair & Skin Carousels (Horizontal scroll simulated with CSS) */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <SectionHeading title="Explore Our Expertise" />
        </div>
        
        {/* Hair Carousel */}
        <div className="mb-16 relative">
          <div className="container mx-auto px-4 mb-6 flex justify-between items-end">
            <h3 className="font-serif text-2xl text-secondary">Hair Care & Styling</h3>
          </div>
          <div className="flex overflow-x-auto pb-8 pt-4 px-4 snap-x hide-scrollbar">
            <div className="flex gap-6 min-w-max mx-auto container">
              {hairServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-center bg-white p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-serif text-xl mb-2">{service.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">{service.description}</p>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-secondary">{service.price}</span>
                    <Link href={`/book?service=${service.id}`} className="text-primary hover:underline">Book</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skin Carousel */}
        <div className="relative">
          <div className="container mx-auto px-4 mb-6 flex justify-between items-end">
            <h3 className="font-serif text-2xl text-secondary">Skin & Beauty</h3>
          </div>
          <div className="flex overflow-x-auto pb-8 pt-4 px-4 snap-x hide-scrollbar">
            <div className="flex gap-6 min-w-max mx-auto container">
              {skinServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-center bg-white p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-serif text-xl mb-2">{service.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">{service.description}</p>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-secondary">{service.price}</span>
                    <Link href={`/book?service=${service.id}`} className="text-primary hover:underline">Book</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Process */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading title="The Nabhia's Experience" subtitle="A seamless journey from booking to your beautiful reveal." />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2 z-0"></div>
            
            {[
              { num: "01", title: "Book", desc: "Schedule your preferred time online or via WhatsApp." },
              { num: "02", title: "Consult", desc: "Discuss your goals with our expert stylists." },
              { num: "03", title: "Experience", desc: "Relax and enjoy premium treatments in luxury." },
              { num: "04", title: "Reveal", desc: "Step out with confidence and radiant beauty." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 text-center bg-white p-6"
              >
                <div className="w-16 h-16 mx-auto bg-background border border-primary text-primary rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl mb-3 text-secondary">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Stories" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col"
              >
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-secondary italic mb-8 flex-grow">
                  "[Client Review Placeholder] The service was impeccable and the atmosphere is so relaxing. I absolutely loved my results and will definitely be coming back."
                </p>
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-secondary font-serif">
                    CN
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-secondary">[Client Name]</h4>
                    <span className="text-xs text-muted-foreground">[Service Received]</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="outline">Read All Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Statistics */}
      <section className="py-20 bg-secondary text-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-secondary to-secondary"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "[X]+", label: "Happy Clients" },
              { val: "[X]+", label: "Services Offered" },
              { val: "[X]+", label: "Years Experience" },
              { val: "[X]+", label: "5-Star Reviews" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.val}</div>
                <div className="text-sm uppercase tracking-widest text-primary/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" />
          
          <div className="mt-12 space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.slice(0, 5).map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-secondary hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-10">
            <Link href="/faq">
              <Button variant="link" className="text-primary">View All FAQs <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Contact CTA */}
      <section className="py-24 bg-accent/20 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-3xl shadow-lg border border-border"
          >
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Step into elegance. Book your appointment today and let our expert team pamper you with our premium salon services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                  Book Online
                </Button>
              </Link>
              <span className="text-muted-foreground font-serif italic text-sm">or</span>
              <a href="tel:[Phone Number]">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10">
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
