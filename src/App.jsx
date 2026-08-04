import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import ScrollReveal from './components/ScrollReveal';
import { Scroll } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Listen to browser URL changes so the back buttons work naturally
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        setCurrentView('gallery');
      } else {
        setCurrentView('home');
      }
    };

    // Run once on load and attach listener
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show Gallery Page view
  if (currentView === 'gallery') {
    return <Gallery />;
  }

  // Otherwise show the default single page website layout
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      <Header />

      <main className="w-full">

          <section id="home">
            <About />
          </section>

        <ScrollReveal>
          <section id="services">
            <Services />
          </section>
        </ScrollReveal>

          <section id="experience">
            <Experience />
          </section>

        <ScrollReveal>
          <section id="results">
            <Results />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="testimonials">
            <Testimonials />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contact">
            <Contact />
          </section>
        </ScrollReveal>
      </main>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
