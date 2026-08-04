import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <span className="font-serif text-2xl tracking-wide text-secondary relative">
              Nabhia's
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-primary/50'}`}></span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  location === link.path
                    ? "text-primary font-medium"
                    : isScrolled
                    ? "text-secondary"
                    : "text-secondary/90 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book">
              <Button
                className={`font-semibold rounded-lg shadow-sm hover:shadow-md transition-all ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto pb-24">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xl font-serif border-b border-border pb-4 transition-colors ${
                location === link.path ? "text-primary" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book" className="pt-4">
            <Button className="w-full text-lg py-6 rounded-lg bg-primary text-primary-foreground font-semibold">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
