import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ehpLogo from "@assets/logo-blue-black.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <img src={ehpLogo} alt="EHP Logo" className="h-10" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-800 hover:text-primary transition-colors font-medium">About</a>
            <a href="#benefits" className="text-gray-800 hover:text-primary transition-colors font-medium">Benefits</a>
            <a href="#testimonials" className="text-gray-800 hover:text-primary transition-colors font-medium">Testimonials</a>
            <a href="#book" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-md transition-colors">
              Book a Call
            </a>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={closeMenu} className="text-gray-800 hover:text-primary transition-colors font-medium px-4 py-2">About</a>
              <a href="#benefits" onClick={closeMenu} className="text-gray-800 hover:text-primary transition-colors font-medium px-4 py-2">Benefits</a>
              <a href="#testimonials" onClick={closeMenu} className="text-gray-800 hover:text-primary transition-colors font-medium px-4 py-2">Testimonials</a>
              <a href="#book" onClick={closeMenu} className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 mx-4 rounded-md transition-colors text-center">
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
