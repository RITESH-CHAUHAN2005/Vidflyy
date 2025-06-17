
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-white text-2xl font-bold">
                <span className="text-red-500">Vid</span>flyy
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering content creators to reach their full potential through strategic YouTube promotion and organic growth solutions.
            </p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Home</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Features</a></li>
              <li><a href="/success-stories" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Success Stories</a></li>
              <li><a href="/pricing" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Video Promotion</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Audience Targeting</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Analytics & Growth</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Channel Optimization</a></li>
              <li><a href="/features" onClick={scrollToTop} className="text-gray-300 hover:text-red-400 transition-colors duration-300">Premium Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@vidflyy.com
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7355518761
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 mt-4"
              >
                Contact Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Vidflyy. All rights reserved. | Empowering YouTube creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
