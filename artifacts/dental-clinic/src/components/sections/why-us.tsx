import { motion } from "framer-motion";
import { Microscope, HeartHandshake, Clock, CreditCard } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "State-of-the-Art Tech",
    description: "From 3D scanners to painless laser dentistry, we invest in the best technology to ensure precise, comfortable treatments."
  },
  {
    icon: HeartHandshake,
    title: "Gentle & Painless",
    description: "Dental anxiety is real. Our highly trained staff uses specialized techniques to ensure a completely pain-free experience."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "We respect your time. With early morning and evening appointments, finding time for your smile is easier than ever."
  },
  {
    icon: CreditCard,
    title: "Affordable Plans",
    description: "Premium care shouldn't break the bank. We accept most insurances and offer flexible, 0% interest financing options."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Not your average dental clinic.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We set out to create a dental practice that we would actually want to visit. That means no long waits, no clinical smells, and absolutely no judgment—just exceptional care in a premium environment.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/15 transition-colors"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
