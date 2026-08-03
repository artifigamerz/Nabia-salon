import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-primary px-4 py-2 flex items-center justify-center relative z-50">
      <p className="text-xs md:text-sm tracking-widest uppercase font-medium">
        ✦ Premium Beauty Services in Islamabad — Book Your Appointment Today ✦
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 text-primary/70 hover:text-primary transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
