import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "[Client Name]",
      service: "Bridal Makeup",
      date: "[Date]",
      text: "[Client Review Placeholder] I had my bridal makeup done at Nabhia's and it was an absolute dream. The team was so attentive and understood exactly what I wanted. The makeup lasted all night and looked flawless in photos."
    },
    {
      id: 2,
      name: "[Client Name]",
      service: "Hair Coloring & Styling",
      date: "[Date]",
      text: "[Client Review Placeholder] Best balayage I've ever had! The colorist took her time to consult with me and ensure the shade complemented my skin tone. The salon's atmosphere is incredibly relaxing."
    },
    {
      id: 3,
      name: "[Client Name]",
      service: "Hydra Facial",
      date: "[Date]",
      text: "[Client Review Placeholder] My skin has never felt this glowing and hydrated. The esthetician was very gentle and used premium products. A truly luxurious experience from start to finish."
    },
    {
      id: 4,
      name: "[Client Name]",
      service: "Keratin Treatment",
      date: "[Date]",
      text: "[Client Review Placeholder] Transformed my frizzy hair into silky smooth perfection. The staff is highly professional and the salon maintains excellent hygiene standards."
    },
    {
      id: 5,
      name: "[Client Name]",
      service: "Party Makeup",
      date: "[Date]",
      text: "[Client Review Placeholder] Got my makeup done for a family wedding and received so many compliments. It was exactly the soft glam look I asked for. Highly recommend!"
    },
    {
      id: 6,
      name: "[Client Name]",
      service: "Luxury Manicure",
      date: "[Date]",
      text: "[Client Review Placeholder] A wonderful pampering session. The attention to detail is unmatched in Islamabad. The massage during the manicure was incredibly relaxing."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Experiences" 
          subtitle="Read what our lovely clients have to say about their time at Nabhia's Salon."
        />

        {/* Rating Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-border text-center mb-16"
        >
          <h3 className="text-5xl font-serif text-secondary mb-4">5.0</h3>
          <div className="flex justify-center text-primary mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground mb-6">Based on [X] reviews</p>
          <a href="[Google Reviews Link Placeholder]" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">Leave a Review on Google</Button>
          </a>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-secondary italic mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <h4 className="font-serif font-medium text-secondary">{review.name}</h4>
                <p className="text-sm text-primary">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-accent/20 p-12 rounded-3xl">
          <h2 className="text-3xl font-serif text-secondary mb-4">Experience it Yourself</h2>
          <p className="text-muted-foreground mb-8">Book an appointment and discover the Nabhia's standard of beauty and care.</p>
          <Link href="/book">
            <Button size="lg">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
