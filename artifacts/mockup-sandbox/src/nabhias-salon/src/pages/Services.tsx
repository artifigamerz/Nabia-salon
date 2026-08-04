import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES, Service } from "@/data/services";
import { Sparkles, ArrowRight, Clock } from "lucide-react";

type Category = "All" | Service["category"];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const categories: Category[] = ["All", "Hair", "Skin", "Nails", "Bridal", "Mehndi"];

  const filteredServices = activeTab === "All" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Our Services" 
            subtitle="Explore our comprehensive range of premium beauty treatments, each designed to elevate your natural beauty."
          />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-secondary hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/5">
                    <Sparkles className="h-10 w-10 text-primary/30" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                  {service.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-secondary mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-border/50 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={16} className="mr-2 text-primary" />
                    {service.duration}
                  </div>
                  <div className="font-semibold text-secondary">
                    {service.price}
                  </div>
                </div>
                
                <Link href={`/book?service=${service.id}`}>
                  <Button className="w-full group-hover:bg-primary/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
