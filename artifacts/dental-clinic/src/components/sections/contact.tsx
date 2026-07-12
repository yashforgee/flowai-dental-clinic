import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Find us in the heart of the city.
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Prestige Avenue<br />
                    Suite 400<br />
                    Metropolis, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Contact Us</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+15551234567" className="hover:text-primary transition-colors">(555) 123-4567</a><br />
                    <a href="tel:+15551234568" className="hover:text-primary transition-colors">(555) 123-4568</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:hello@brightsmile.com" className="hover:text-primary transition-colors">hello@brightsmile.com</a><br />
                    <a href="mailto:booking@brightsmile.com" className="hover:text-primary transition-colors">booking@brightsmile.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex justify-between w-32"><span>Mon - Fri:</span> <span>8am - 6pm</span></li>
                    <li className="flex justify-between w-32"><span>Saturday:</span> <span>9am - 3pm</span></li>
                    <li className="flex justify-between w-32 text-gray-400"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto w-full bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-gray-300">
            {/* Using a placeholder iframe for the map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1685040000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
