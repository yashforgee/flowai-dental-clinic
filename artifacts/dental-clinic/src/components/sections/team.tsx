import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
import doctor1Image from "@assets/generated_images/doctor-1.jpg";
import doctor2Image from "@assets/generated_images/doctor-2.jpg";
import doctor3Image from "@assets/generated_images/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. James Wilson",
    specialty: "Lead Dentist & Founder",
    credentials: "DDS, FAGD",
    bio: "With over 15 years of experience, Dr. Wilson specializes in full-mouth restorations and advanced cosmetic procedures. He believes in a gentle, patient-first approach.",
    image: doctor1Image
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Endodontist",
    credentials: "DMD, MS",
    bio: "Dr. Chen is our root canal specialist. Her precise technique and calming demeanor ensure that even the most complex procedures are painless and stress-free.",
    image: doctor2Image
  },
  {
    name: "Dr. Marcus Thorne",
    specialty: "Orthodontist",
    credentials: "DDS, Board Certified",
    bio: "Specializing in both traditional braces and clear aligners, Dr. Thorne has helped thousands of patients achieve their perfect, confident smile.",
    image: doctor3Image
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Meet The Doctors</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            World-class expertise.
            <br />Compassionate care.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full rounded-2xl group">
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-8 bg-white relative">
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctor.credentials}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {doctor.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
