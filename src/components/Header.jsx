import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  
  const navItems = ['About', 'Services', 'Experience', 'Gallery', 'Testimonials', 'Contact'];

  useEffect(() => {
    // 1. Target the element right before the white section (usually your Hero section)
    // Assumes your first section has an id of "hero" or change to match your layout
    const heroSection = document.getElementById('hero') || document.querySelector('section');
    
    if (!heroSection) return;

    // 2. Setup observer to trigger when the hero section leaves the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If hero is NOT intersecting, it means we scrolled past it into the white area
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // triggers when 10% of the section is visible
      }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  // Dynamic style tokens based on scroll position
  const theme = {
    header: isScrolledPastHero 
      ? "bg-white/80 text-gray-900 border-b border-gray-200" 
      : "bg-transparent text-white",
    title: isScrolledPastHero ? "text-gray-900" : "text-white",
    links: isScrolledPastHero ? "text-gray-700 hover:text-green-600" : "text-white/90 hover:text-white",
    hamburger: isScrolledPastHero ? "bg-gray-900" : "bg-white"
  };

  return (
    <header className={`fixed top-0 w-full backdrop-blur-lg py-3 px-4 md:px-6 shadow-sm z-50 transition-all duration-300 ${theme.header}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Logo & Doctor Info */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100">
            <img src={Logo} alt="Shree Venkateshwara Logo" className="h-5 lg:h-12 w-auto object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className={`text-base md:text-2xl font-bold tracking-wide leading-tight transition-colors duration-300 ${theme.title}`}>
              Dr. Shubham Tungenwar
            </h1>
            <p className="text-[11px] md:text-xs text-green-600 font-semibold tracking-wide">
              Robotic Joint Replacement & Sports Injury Specialist
            </p>
          </div>
        </div>

        {/* Right Section: Desktop Navigation & CTA Button */}
        <div className="flex items-center gap-4 lg:gap-8">
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`group relative text-md font-medium transition-colors duration-300 py-1 ${theme.links}`}
              >
                {item}
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden sm:flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all shadow-sm cursor-pointer">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            Book Appointment
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/20" 
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 rounded transition-all duration-300 transform origin-left ${theme.hamburger} ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
              <span className={`w-full h-0.5 rounded transition-all duration-300 ${theme.hamburger} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 rounded transition-all duration-300 transform origin-left ${theme.hamburger} ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay Menu */}
      <div className={`absolute top-full left-0 w-full bg-[#16447d] border-t border-white/10 shadow-xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-base font-medium py-1 text-white hover:text-green-400 transition-colors border-b border-white/5 last:border-0"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Mobile CTA */}
          <button className="sm:hidden w-full flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all shadow-sm mt-2">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
