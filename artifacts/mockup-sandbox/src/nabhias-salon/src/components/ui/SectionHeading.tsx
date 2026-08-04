import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <div className={`flex items-center gap-4 mb-4 ${alignment === "center" ? "justify-center" : "justify-start"}`}>
        <span className="h-[1px] w-12 bg-primary"></span>
        <span className="text-primary tracking-widest text-sm uppercase font-medium">Nabhia's Salon</span>
        <span className="h-[1px] w-12 bg-primary"></span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
