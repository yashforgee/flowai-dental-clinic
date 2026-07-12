import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Users } from "lucide-react";
import heroDentistImage from "@assets/generated_images/hero-dentist.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-white max-w-2xl pt-12 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Accepting new patients</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Premium care for your <span className="text-blue-200">perfect smile.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Experience world-class dentistry in a modern, relaxing environment. We combine state-of-the-art technology with a gentle touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                onClick={() => scrollTo("#booking")}
                className="bg-white text-primary hover:bg-gray-100 rounded-full h-14 px-8 text-base font-semibold group"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollTo("#services")}
                className="border-white/30 text-white hover:bg-white/10 rounded-full h-14 px-8 text-base font-medium"
              >
                Our Services
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div>
                <h4 className="text-3xl font-bold">15+</h4>
                <p className="text-sm text-white/70 mt-1">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">2k+</h4>
                <p className="text-sm text-white/70 mt-1">Happy Patients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold flex items-center gap-1">4.9<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /></h4>
                <p className="text-sm text-white/70 mt-1">Google Reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src={heroDentistImage} 
                alt="Confident professional dentist in a modern clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-12 -left-8 md:-left-12 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-in fade-in"
            >
              <div className="bg-blue-100 p-3 rounded-full text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Top Rated</p>
                <p className="text-xs text-gray-500">ISO Certified Clinic</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-12 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Patient" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=2" alt="Patient" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  98%
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Satisfaction</p>
                <p className="text-xs text-gray-500">Based on 2k+ surveys</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
