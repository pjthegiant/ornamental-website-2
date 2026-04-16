'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Ruler, ShieldCheck, Hammer, 
  ArrowRight, Shield, HardHat, Clock, Mail, 
  ChevronRight, Menu, X 
} from 'lucide-react';

// --- DATA ---
const PROJECT_TYPES = [
  { id: 'fence', label: 'Ornamental Fence', basePrice: 80, unit: 'Linear Feet' },
  { id: 'railing', label: 'Stair/Balcony Railing', basePrice: 60, unit: 'Linear Feet' },
  { id: 'gate', label: 'Custom Gate System', basePrice: 40, unit: 'Linear Feet', minPrice: 1200 },
];

const COMPLEXITY_LEVELS = [
  { id: 'standard', label: 'Standard', multiplier: 1, description: 'Clean, modern lines' },
  { id: 'premium', label: 'Premium', multiplier: 1.5, description: 'Added decorative scrolls' },
  { id: 'custom', label: 'Artisanal', multiplier: 2.2, description: 'Hand-forged intricate details' },
];

const CATEGORIES = ['All', 'Railings', 'Stairs', 'Gates', 'Fences'];

const PROJECTS = [
  { id: 1, category: 'Stairs', title: 'Spiral Masterpiece', src: 'https://images.unsplash.com/photo-1621905235213-91ee7387348e?q=80&w=2000' },
  { id: 2, category: 'Railings', title: 'Modern Balcony Rail', src: 'https://images.unsplash.com/photo-1605117815534-763371b8332d?q=80&w=2000' },
  { id: 3, category: 'Gates', title: 'Automated Estate Gate', src: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=2000' },
  { id: 4, category: 'Fences', title: 'Perimeter Security', src: 'https://images.unsplash.com/photo-1590059346074-9721666e85d9?q=80&w=2000' },
  { id: 5, category: 'Stairs', title: 'Industrial Interior', src: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2000' },
  { id: 6, category: 'Railings', title: 'Ornamental Scroll', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000' },
];

// --- COMPONENTS ---

export default function FullWebsite() {
  const [quoteType, setQuoteType] = useState(PROJECT_TYPES[0]);
  const [length, setLength] = useState(20);
  const [complexity, setComplexity] = useState(COMPLEXITY_LEVELS[0]);
  const [filter, setFilter] = useState('All');
  const [contactStatus, setContactStatus] = useState('idle');

  const estimate = useMemo(() => {
    let total = length * quoteType.basePrice * complexity.multiplier;
    if (quoteType.id === 'gate' && total < (quoteType.minPrice || 0)) {
      total = quoteType.minPrice || 1200;
    }
    return Math.round(total);
  }, [quoteType, length, complexity]);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-charcoal text-offWhite font-sans selection:bg-goldAccent selection:text-charcoal">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-lg border-b border-slateMetal/30">
        <div className="hidden lg:flex justify-between items-center px-12 py-2 text-[10px] tracking-widest text-gray-400 border-b border-slateMetal/10">
          <div className="flex gap-6 italic">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-goldAccent"/> 5475 Riley Lane, SLC, UT</span>
          </div>
          <div className="flex gap-8 font-bold">
            <a href="tel:8015429446" className="hover:text-goldAccent transition-colors">801-542-9446 (MAIN)</a>
            <a href="tel:8012691019" className="hover:text-goldAccent transition-colors">801-269-1019 (ALT)</a>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 lg:px-12 py-6">
          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-black tracking-tighter text-offWhite">ORNAMENTAL DESIGN</span>
            <span className="text-[10px] tracking-[0.4em] text-goldAccent uppercase font-bold">& Fabrication LLC</span>
          </div>
          <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest items-center">
            <a href="#services" className="hover:text-goldAccent transition-colors">SERVICES</a>
            <a href="#quote" className="hover:text-goldAccent transition-colors">ESTIMATOR</a>
            <a href="#portfolio" className="hover:text-goldAccent transition-colors">WORK</a>
            <a href="#quote" className="bg-goldAccent text-charcoal px-6 py-3 hover:bg-white transition-colors">GET QUOTE</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-goldAccent font-bold tracking-[0.3em] uppercase text-xs">Premium Fabrication SLC</span>
            <h1 className="text-6xl lg:text-9xl font-black mt-4 mb-8 leading-none tracking-tighter">
              BEYOND <br/><span className="text-goldAccent italic font-light">METALWORK.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Industrial strength meets architectural beauty. We build custom stairs, railings, and gates that define luxury properties.
            </p>
            <div className="flex gap-4">
              <a href="#quote" className="bg-goldAccent text-charcoal px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">Instant Estimate</a>
              <a href="#portfolio" className="border border-white/20 px-8 py-5 font-bold uppercase tracking-widest text-sm hover:border-goldAccent hover:text-goldAccent transition-colors">View Portfolio</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. QUOTE ENGINE */}
      <section id="quote" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter">Project <span className="text-goldAccent italic font-light">Estimator</span></h2>
              <p className="text-gray-500 mb-12 max-w-md leading-relaxed">Adjust the parameters to get an immediate budgetary ballpark for your fabrication project.</p>
              
              <div className="space-y-12">
                <div>
                  <label className="text-[10px] font-black tracking-widest text-goldAccent uppercase mb-4 block">1. Category</label>
                  <div className="flex flex-wrap gap-4">
                    {PROJECT_TYPES.map(p => (
                      <button key={p.id} onClick={() => setQuoteType(p)} className={`px-6 py-4 text-xs font-bold border transition-all ${quoteType.id === p.id ? 'border-goldAccent bg-goldAccent/10 text-goldAccent' : 'border-slateMetal text-gray-600'}`}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-[10px] font-black tracking-widest text-goldAccent uppercase block">2. Size ({quoteType.unit})</label>
                    <span className="font-bold text-goldAccent">{length}ft</span>
                  </div>
                  <input type="range" min="4" max="300" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full h-1 bg-slateMetal accent-goldAccent appearance-none cursor-pointer" />
                </div>

                <div>
                  <label className="text-[10px] font-black tracking-widest text-goldAccent uppercase mb-4 block">3. Detail Level</label>
                  <div className="space-y-3">
                    {COMPLEXITY_LEVELS.map(c => (
                      <button key={c.id} onClick={() => setComplexity(c)} className={`w-full p-4 border flex justify-between items-center transition-all ${complexity.id === c.id ? 'border-goldAccent text-goldAccent' : 'border-slateMetal text-gray-600'}`}>
                        <span className="text-xs font-bold uppercase tracking-widest">{c.label}</span>
                        <span className="text-[10px] italic opacity-50">{c.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-12 border border-slateMetal flex flex-col justify-center text-center">
               <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4">Ballpark Estimate</span>
               <div className="text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
                <span className="text-2xl align-top text-goldAccent mr-2">$</span>{estimate.toLocaleString()}
               </div>
               <p className="text-xs text-gray-600 italic mb-10 leading-relaxed italic">Includes fabrication and standard powder coating. Final price depends on site variables.</p>
               <a href="#contact" className="bg-goldAccent text-charcoal py-6 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all">Submit for Review</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO */}
      <section id="portfolio" className="py-32 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-none">THE <br/><span className="text-goldAccent">COLLECTION</span></h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-goldAccent text-charcoal' : 'text-gray-500 border border-slateMetal'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            <AnimatePresence>
              {filteredProjects.map(proj => (
                <motion.div key={proj.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative group aspect-[4/5] bg-slateMetal overflow-hidden">
                  <img src={proj.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10">
                    <p className="text-goldAccent text-[10px] font-bold tracking-widest uppercase mb-1">{proj.category}</p>
                    <h3 className="text-xl font-bold uppercase leading-none">{proj.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-10">READY TO <br/><span className="text-goldAccent italic font-light">START?</span></h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-goldAccent/30 flex items-center justify-center text-goldAccent"><MapPin size={20}/></div>
                <div><p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Shop Location</p><p className="text-lg">5475 Riley Lane, SLC, UT 84107</p></div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-goldAccent/30 flex items-center justify-center text-goldAccent"><Phone size={20}/></div>
                <div><p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Direct Lines</p><p className="text-lg">801-542-9446 (Main)</p><p className="text-lg">801-269-1019 (Alt)</p></div>
              </div>
            </div>
          </div>
          <div className="bg-charcoal p-10 border border-slateMetal">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-slateMetal py-4 text-xs outline-none focus:border-goldAccent" />
                <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-slateMetal py-4 text-xs outline-none focus:border-goldAccent" />
              </div>
              <textarea placeholder="PROJECT DESCRIPTION" rows={4} className="w-full bg-transparent border-b border-slateMetal py-4 text-xs outline-none focus:border-goldAccent resize-none" />
              <button className="w-full bg-goldAccent text-charcoal font-black py-6 tracking-[0.3em] text-[10px] uppercase hover:bg-white transition-all">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-slateMetal/20 text-[9px] tracking-[0.5em] text-gray-600 uppercase">
        © {new Date().getFullYear()} ORNAMENTAL DESIGN & FABRICATION LLC | 5475 Riley Lane, Salt Lake City
      </footer>
    </div>
  );
}
