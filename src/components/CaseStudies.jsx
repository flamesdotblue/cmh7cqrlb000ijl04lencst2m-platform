import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    brand: 'Nebula Wearables',
    metric: '+312% MoM revenue',
    desc: 'Scaled from 1.2x to 4.8x blended ROAS in 10 weeks with TikTok + YouTube creative testing framework.',
    tags: ['DTC', 'Paid Social', 'CRO'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop'
  },
  {
    brand: 'Arcade Finance',
    metric: '-45% CPA',
    desc: 'Rebuilt funnel and search structure, introduced lead scoring and lifecycle automation to accelerate SQLs.',
    tags: ['SaaS', 'Search', 'Lifecycle'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    brand: 'NorthPeak Outdoors',
    metric: '8.1x ROAS',
    desc: 'UGC engine + creator network with modular ads and landing pages to unlock seasonal scaling windows.',
    tags: ['Retail', 'UGC', 'Programmatic'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-24 bg-[linear-gradient(180deg,rgba(7,10,11,1),rgba(0,0,0,1))]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Selected results</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Every engagement is anchored in measurable outcomes. Here’s a snapshot of recent wins across industries.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-emerald-300 transition">Request full case studies</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.article
              key={c.brand}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="h-44 overflow-hidden">
                <img src={c.image} alt={`${c.brand} visual`} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
              </div>
              <div className="p-6">
                <div className="text-emerald-300 text-sm font-medium">{c.metric}</div>
                <h3 className="mt-1 font-semibold text-lg">{c.brand}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="contact" className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Get a free growth audit</h3>
            <p className="mt-2 text-white/80 text-sm">Share your goals and channels. We’ll return an actionable 3–5 page audit covering opportunities, messaging angles, and a 90-day roadmap.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-300/50" placeholder="Name" />
              <input className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-300/50" placeholder="Email" type="email" />
              <input className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-300/50 sm:col-span-2" placeholder="Website or Product" />
              <textarea rows="4" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-300/50 sm:col-span-2" placeholder="Goals / Challenges" />
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-emerald-400 text-black px-5 py-2.5 rounded-md font-semibold hover:bg-emerald-300 transition">Request audit</button>
            </form>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6">
            <h4 className="text-sm text-white/70">How we work</h4>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Rapid discovery and audit to identify near-term wins.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Creative sprint to build high-velocity testing assets.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Channel rollout with experimentation and clear KPIs.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Weekly insights, monthly roadmapping, and transparent dashboards.</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                ['Avg. CAC drop', '38%'],
                ['A/B velocity', '12 tests/mo'],
                ['Client NPS', '73']
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-xs text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
