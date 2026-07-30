import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 bg-white border-t border-slate-300 py-6 px-4 md:px-8 font-sans antialiased text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-medium">
        
        {/* Brand Group */}
        <div className="flex items-center gap-2">
          {/* Medical Cross Graphic Icon */}
          <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
            <div className="absolute w-[5px] h-[15px] bg-slate-200 rounded-xs"></div>
            <div className="absolute w-[15px] h-[5px] bg-slate-200 rounded-xs"></div>
            <span className="absolute top-0 right-0 text-[10px] leading-none text-emerald-500 font-bold select-none">
              ↗
            </span>
          </div>
          <span className="text-slate-900 font-bold tracking-tight">
            Dr. Shubham Tungenwar
          </span>
        </div>

        {/* Navigation Item Array */}
        <nav className="flex items-center gap-6 text-slate-500">
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          <a href="#privacy" className="hover:text-slate-500 transition">Privacy</a>
        </nav>

        {/* Legal Text Field */}
        <div className="text-slate-400 font-normal">
          &copy; {currentYear} Dr. Shubham Tungenwar
        </div>

      </div>
    </footer>
  );
}
