'use client';

import React from 'react';

const PILLARS = [
  {
    number: "01",
    title: "Origin",
    description: "Founded in 2024 out of a small Atelier in Northern Italy, set out to strip away traditional fashion noise in pursuit of pure, functional form."
  },
  {
    number: "02",
    title: "Material",
    description: "Sourced exclusively from certified organic mills across Europe. Every yard of linen and virgin wool is 100% traceable from field to final stitch."
  },
  {
    number: "03",
    title: "Ethos",
    description: "Zero excess inventory model. We produce in small, intentional runs—guaranteeing living wages for artisans while eliminating industrial waste."
  }
];

export default function AboutPillarsSection() {
  return (
    <section className="w-full bg-white text-neutral-900 font-sans border-t border-neutral-100 py-20 md:py-32 px-6 md:px-12" id='story'>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
            About the Brand
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2 max-w-xl text-neutral-900">
            Built on intentional design, uncompromising materials, and modern transparency.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 border-t border-neutral-100 pt-12">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.number} 
              className="flex flex-col justify-between group"
            >
              <div>
                <span className="block text-xs font-mono text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors">
                  [{pillar.number}]
                </span>
                <h3 className="text-lg uppercase tracking-wider font-medium text-neutral-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}