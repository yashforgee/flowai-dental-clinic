import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import patient1Image from "@assets/generated_images/patient-1.jpg";
import patient2Image from "@assets/generated_images/patient-2.jpg";
import patient3Image from "@assets/generated_images/patient-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    treatment: "Cosmetic Veneers",
    quote: "I've had severe dental anxiety my entire life. The team at BrightSmile changed everything for me. The environment is so calming, and Dr. Wilson walked me through every step. I finally have the smile I've always dreamed of.",
    image: patient1Image,
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chang",
    treatment: "Dental Implants",
    quote: "Incredible experience from start to finish. The facility is spotless and feels more like a high-end spa than a clinic. The implant procedure was completely painless, and the results look completely natural.",
    image: patient2Image,
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    treatment: "Invisalign",
    quote: "The level of care and professionalism here is unmatched. They respect your time—I've never waited more than 5 minutes in the lobby. My Invisalign journey was seamless, and the staff is incredibly friendly.",
    image: patient3Image,
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Patient Stories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
              Don't just take our word for it.
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-white hover:text-primary hover:border-primary transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-[350px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center h-full">
                
                <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-secondary shadow-lg mb-6">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary font-medium text-sm mt-1">{testimonials[currentIndex].treatment}</p>
                </div>

                <div className="w-full md:w-2/3 relative flex flex-col justify-center h-full">
                  <Quote className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 text-secondary -z-10" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
