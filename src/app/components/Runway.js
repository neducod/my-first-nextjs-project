'use client'; // Required in Next.js App Router for stateful components

import React, { useState } from 'react';

const LOOKS = [
  {
    id: 1,
    title: "Look 01 / Sculptural Outerwear",
    designer: "Collection 2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 2,
    title: "Look 02 / Draped Wool Tailoring",
    designer: "Collection 2026",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Look 03 / Structured Monochrome",
    designer: "Collection 2026",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "aspect-[3/4]"
  }
];

export default function SingleStreamFeed() {
  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase border-b border-neutral-100">
        <span className="font-medium tracking-tight">Runway Feed</span>
        <span className="text-neutral-400">Vol. 01</span>
      </header>

      {/* Main Feed Container */}
      <main className="w-full max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-36">
        {LOOKS.map((item) => (
          <article 
            key={item.id} 
            className="group relative flex flex-col items-center"
          >
            {/* Image Container with Padding */}
            <div className="w-full bg-neutral-50 p-4 sm:p-8 md:p-12 transition-colors duration-500 hover:bg-neutral-100/60">
              <div className={`relative w-full overflow-hidden ${item.aspectRatio}`}>
                {/* Standard img tag formatted to suppress Next.js linter warnings */}
                {/* eslint-disable-next-next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Subtle Caption Below Image */}
            <div className="w-full mt-6 flex justify-between items-baseline text-xs text-neutral-500 font-mono tracking-tight px-1">
              <span>{item.title}</span>
              <button 
                onClick={() => setActiveInfo(activeInfo === item.id ? null : item.id)}
                className="hover:text-black transition-colors underline underline-offset-4 decoration-neutral-300"
              >
                {activeInfo === item.id ? 'Close' : 'Details'}
              </button>
            </div>

            {/* Expandable Details Drawer */}
            {activeInfo === item.id && (
              <div className="w-full mt-4 p-4 text-xs font-mono bg-neutral-50 text-neutral-600 border-l border-neutral-300 transition-all duration-300">
                <p>Designer: {item.designer}</p>
                <p className="mt-1">Composition: 100% Organic Virgin Wool</p>
              </div>
            )}
          </article>
        ))}
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 text-center text-xs text-neutral-400 border-t border-neutral-100 font-mono">
        End of Stream
      </footer>
    </div>
  );
}