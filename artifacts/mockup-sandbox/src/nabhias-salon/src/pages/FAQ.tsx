import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/faq";
import { Phone } from "lucide-react";

export default function FAQ() {
  // Split FAQs into two columns for desktop
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, midPoint);
  const rightFaqs = FAQS.slice(midPoint);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about our services, booking process, and policies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {leftFaqs.map((faq, idx) => (
                <AccordionItem key={`left-${idx}`} value={`left-${idx}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-secondary hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {rightFaqs.map((faq, idx) => (
                <AccordionItem key={`right-${idx}`} value={`right-${idx}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-secondary hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Still have questions? */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-secondary mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-8">
            If you couldn't find the answer to your question, our friendly staff is always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:[Phone Number]">
              <Button variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" /> Call Us Directly
              </Button>
            </a>
            <Link href="/contact">
              <Button className="w-full sm:w-auto">Contact Support</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
