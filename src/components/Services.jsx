import React from 'react';
import { Megaphone, BarChart, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'Multi-network paid social, paid search, and programmatic with creative iteration for compounding ROAS.'
  },
  {
    icon: Globe,
    title: 'Brand & Content Systems',
    desc: 'Distinctive brand platforms, narrative-driven content, and UGC engines tailored to your ICP.'
  },
  {
    icon: BarChart,
    title: 'Analytics & CRO',
    desc: 'End-to-end tracking, MMM/MTA guidance, experimentation pipelines, and conversion rate optimization.'
  },
  {
    icon: Sparkles,
    title: 'SEO & Lifecycle',
    desc: 'Technical SEO, topical authority programs, email/SMS flows, and community that compounds reach.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-[#050607]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Solutions engineered for scale</h2>
            <p className="mt-3 text-white/70 max-w-2xl">We blend rigorous analysis with standout creative to build systems that drive repeatable growth across the entire customer journey.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 rounded-md text-sm hover:bg-white/5 transition">Book a discovery call</a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-emerald-400/20 text-emerald-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <span className="text-xs text-white/50 group-hover:text-white/80 transition">Explore →</span>
                </div>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">{s.desc}</p>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Audit & Strategy', text: '90-minute audit, channel map, and 6-month growth plan.' },
            { label: 'Creative Sprint', text: 'Ad concepts, hooks, and assets aimed at fast testing.' },
            { label: 'Growth Retainer', text: 'Ongoing execution, weekly insights, and compounding ROI.' }
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-emerald-300 font-medium">{item.label}</div>
              <div className="mt-2 text-white/80 text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
