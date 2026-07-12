import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  BrightSmile
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Dental
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium dental care in a modern, relaxing environment. Your smile is our signature.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Meet the Doctors</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Patient Reviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Before & After Gallery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Financing Options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Invisalign & Orthodontics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cosmetic Veneers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Dental Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} BrightSmile Dental Clinic. All rights reserved.</p>
          <p>Designed for premium smiles.</p>
        </div>
      </div>
    </footer>
  );
}
