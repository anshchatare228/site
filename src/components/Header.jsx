import React, { useState } from 'react';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['About', 'Services', 'Experience', 'Testimonials', 'Contact'];

    return (
        <header className="fixed top-0 w-full bg-transparent backdrop-blur-lg text-white py-3 px-4 md:px-6 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section: Logo & Doctor Info */}
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white p-1 rounded-md">
                        <img src={Logo} alt="Shree Venkateshwara Logo" className="h-5 lg:h-12 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-base md:text-lg font-bold tracking-wide leading-tight">
                            Dr. Shubham Tungenwar
                        </h1>
                        <p className="text-[11px] md:text-xs text-[#00c853] font-semibold tracking-wide">
                            Robotic Orthopaedic Surgeon
                        </p>
                    </div>
                </div>

                {/* Right Section: Desktop Navigation & CTA Button */}
                <div className="flex items-center gap-4 lg:gap-8">
                    {/* Desktop Navigation Links with Hover Animation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="group relative text-sm font-medium opacity-90 hover:opacity-100 transition-opacity py-1"
                            >
                                {item}
                                {/* Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00c853] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    <button className="hidden sm:flex items-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white text-sm font-semibold py-2 px-5 rounded-full transition-all shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span> Book Appointment
                    </button>

                    {/* Hamburger Menu Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between relative">
                            <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 transform origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
                            <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 transform origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Overlay Menu */}
            <div className={`absolute top-full left-0 w-full bg-[#16447d] border-t border-white/10 shadow-xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                <div className="px-6 py-4 flex flex-col gap-4">
                    <nav className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium py-1 hover:text-[#00c853] transition-colors border-b border-white/5 last:border-0"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <button className="sm:hidden w-full flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all shadow-sm mt-2">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span> Book Appointment
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
