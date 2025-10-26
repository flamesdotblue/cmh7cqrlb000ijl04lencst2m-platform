import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-400/20 text-emerald-300 p-2 rounded-lg">
              <Rocket size={18} />
            </div>
            <span className="font-semibold">FluxGrid Digital</span>
          </div>
          <p className="mt-3 text-white/70 max-w-md">We help brands compound growth through creative excellence, rigorous experimentation, and channel mastery.</p>
          <div className="mt-4 text-white/50">© {new Date().getFullYear()} FluxGrid Digital. All rights reserved.</div>
        </div>
        <div>
          <div className="text-white/70 font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-white/60">
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#work" className="hover:text-white transition">Work</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/70 font-medium">Contact</div>
          <ul className="mt-3 space-y-2 text-white/60">
            <li>hello@fluxgrid.digital</li>
            <li>+1 (555) 012-9970</li>
            <li>Global / Remote</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
