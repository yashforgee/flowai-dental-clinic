import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Syringe, 
  Stethoscope, 
  Activity, 
  Smile, 
  HeartPulse 
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional grade whitening treatments that brighten your smile up to 8 shades in a single visit."
  },
  {
    icon: Syringe,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth that restore full function and confidence."
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Clear aligners and modern braces to straighten teeth discreetly and comfortably for all ages."
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    description: "Painless endodontic treatments to save infected teeth and eliminate severe tooth pain."
  },
  {
    icon: Stethoscope,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and total smile makeovers designed to give you the perfect, flawless smile."
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    description: "Same-day appointments for severe pain, broken teeth, or other urgent dental situations."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive care for your whole family
          </h2>
          <p className="text-gray-600 text-lg">
            From routine cleanings to complex restorative work, we offer a full spectrum of dental services under one roof using the latest technology.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
