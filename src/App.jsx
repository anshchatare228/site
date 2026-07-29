import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services"
import Experience from "./components/Experience"
import Results from "./components/Results"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Global Navbar */}
      <Header />
      
      {/* Single Page Sections */}
      <main className="w-full">
        
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="experience">
          <Results />
        </section>

      </main>
    </div>
  );
}
