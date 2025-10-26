import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <Hero />
      <main className="relative z-10">
        <Services />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}
