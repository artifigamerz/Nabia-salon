import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a
        href="https://wa.me/920512158965"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
        {/* Pulse effect ring */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </a>

      {/* Call Button - Bottom Right */}
      <a
        href="tel:[Phone Number]"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8"
        aria-label="Call Us"
      >
        <Phone size={28} />
      </a>
    </>
  );
}
