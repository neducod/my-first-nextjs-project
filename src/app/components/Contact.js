'use client';

import React from 'react';

const HOURS = [
  { days: "Mon — Fri", time: "10:00 — 18:00" },
  { days: "Saturday", time: "11:00 — 17:00" },
  { days: "Sunday", time: "By Appointment" },
];

export default function StudioContactSection() {
  return (
    <section className="w-full bg-white text-neutral-900 font-sans border-t border-neutral-100 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
            Flagship Presence
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2 text-neutral-900">
            Studio & Showroom
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Monochromatic Map Thumbnail */}
          <div className="lg:col-span-7 group">
            <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden border border-neutral-200/60">
              {/* Map Canvas Background */}
              <div 
                className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-700 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80")`
                }}
              />
              
              {/* Architectural Overlay Lines & Pin */}
              <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-neutral-900 opacity-20" />
                  <div className="w-3 h-3 bg-neutral-900 rounded-full border-2 border-white shadow-sm z-10" />
                </div>
              </div>

              {/* Map Footer Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-neutral-200/80 text-[10px] font-mono tracking-widest uppercase">
                45.4642° N, 9.1900° E
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Address */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                [ Location ]
              </h3>
              <p className="text-base font-normal text-neutral-900 leading-relaxed">
                Via Montenapoleone 18
                <br />
                20121 Milano, MI
                <br />
                Italy
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                [ Hours ]
              </h3>
              <ul className="space-y-2 text-sm font-normal">
                {HOURS.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b border-neutral-100 pb-2 text-neutral-700">
                    <span>{item.days}</span>
                    <span className="font-mono text-neutral-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Appointment Note & Contact Action */}
            <div className="pt-2 border-t border-neutral-200">
              <p className="text-xs text-neutral-500 font-mono mb-4">
                * Private viewings and garment fittings by appointment only.
              </p>
              <a 
                href="mailto:studio@brand.com" 
                className="inline-block text-xs uppercase tracking-widest font-mono text-neutral-900 border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
              >
                Request Private Visit →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}