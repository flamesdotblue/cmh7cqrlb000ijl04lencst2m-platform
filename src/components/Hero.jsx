import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0" />

      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-400/20 text-emerald-300 p-2 rounded-lg">
              <Rocket size={20} />
            </div>
            <span className="text-lg font-semibold tracking-wide">FluxGrid Digital</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-emerald-300 hover:text-black transition">
              Get Proposal <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Scale your brand with data-driven, creative-first digital marketing
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              We engineer full-funnel growth with strategy, content, and performance media. From startup to enterprise, we turn attention into measurable revenue.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center gap-2 bg-emerald-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-emerald-300 transition"
              >
                Start a project <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="pointer-events-auto inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-md font-semibold hover:border-white/40 hover:bg-white/5 transition"
              >
                See our work
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { kpi: '450%', label: 'Avg. ROAS' },
                { kpi: '120M+', label: 'Monthly Impressions' },
                { kpi: '30+', label: 'Active Markets' },
              ].map((item) => (
                <div key={item.label} className="">
                  <div className="text-2xl font-bold">{item.kpi}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-lg">Full-stack growth services</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Performance media (Paid Social, Search, Programmatic)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Brand systems, content, and conversion-led creative
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Analytics, attribution, experimentation & CRO
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  SEO/Content, lifecycle & community
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
