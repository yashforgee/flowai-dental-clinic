import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Reviews", href: "#reviews" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <div className="flex flex-col">
              <span className={cn("text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-primary" : "text-white")}>
                BrightSmile
              </span>
              <span className={cn("text-xs font-semibold tracking-widest uppercase transition-colors", isScrolled ? "text-gray-500" : "text-white/80")}>
                Dental
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className={cn("flex items-center gap-2 text-sm font-medium transition-colors", isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-white/90")}>
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <Button 
                onClick={() => scrollTo("#booking")}
                variant={isScrolled ? "default" : "secondary"}
                className={cn(
                  "rounded-full font-semibold px-6",
                  !isScrolled && "bg-white text-primary hover:bg-white/90"
                )}
              >
                Book Appointment
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center gap-8"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 mt-8">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-lg font-medium text-gray-600">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <Button 
                size="lg" 
                onClick={() => scrollTo("#booking")}
                className="rounded-full font-semibold px-8 mt-2"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
