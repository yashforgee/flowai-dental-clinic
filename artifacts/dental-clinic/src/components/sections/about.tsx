import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clinicInteriorImage from "@assets/generated_images/clinic-interior.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src={clinicInteriorImage} 
                alt="Modern, clean dental clinic interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-[2rem] -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-gray-100 rounded-[2rem] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block w-fit">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm border-b-2 border-primary pb-1">About BrightSmile</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Changing the way you feel about dentistry.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe a visit to the dentist shouldn't be stressful. From our thoughtfully designed environment to our compassionate approach, every detail at BrightSmile is crafted to make you feel relaxed, confident, and cared for like a VIP.
            </p>

            <div className="space-y-4 mt-4">
              {[
                "State-of-the-art diagnostic technology",
                "Calming, spa-like environment",
                "Transparent pricing and treatment plans",
                "Highly experienced specialist team"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-8">
              <a href="#team" className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2 group">
                Meet Our Team
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full border border-gray-200">
                  <span className="font-bold text-gray-400 text-xs text-center leading-tight">ISO<br/>9001</span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full border border-gray-200">
                  <span className="font-bold text-gray-400 text-xs text-center leading-tight">ADA<br/>CERT</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
