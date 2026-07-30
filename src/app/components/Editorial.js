// components/FivePieceCapsule.jsx
import React from 'react';

const CAPSULE_ITEMS = [
  {
    id: '01',
    category: 'Outerwear',
    name: 'Oversized Wool Trench',
    details: 'Heavyweight double-faced wool. Drop shoulders, clean hidden placket.',
    href: '#',
  },
  {
    id: '02',
    category: 'Knitwear',
    name: 'Cashmere Crewneck',
    details: '7-gauge pure cashmere in warm stone. Relaxed silhouette.',
    href: '#',
  },
  {
    id: '03',
    category: 'Tailoring',
    name: 'Pleated Wide Trousers',
    details: 'High-waisted, fluid drape. Pressed creases with clean finished hem.',
    href: '#',
  },
  {
    id: '04',
    category: 'Footwear',
    name: 'Square-Toe Leather Boot',
    details: 'Supple calfskin, stacked leather heel, tonal side zip.',
    href: '#',
  },
  {
    id: '05',
    category: 'Essentials',
    name: 'Heavyweight Cotton Tee',
    details: '240gsm organic jersey. Bound collar and boxy cut.',
    href: '#',
  },
];

export default function FivePieceCapsule() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-stone-900 font-sans tracking-tight selection:bg-stone-200" id="editorial">
      {/* Header */}
      <header className="mb-10 sm:mb-16 border-b border-stone-200 pb-6 sm:pb-8">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-medium block">
          Editorial
        </span>
        <h1 className="text-xl sm:text-3xl font-light mt-1 tracking-tight">
          The 5-Piece Capsule
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-2 max-w-md font-light leading-relaxed">
          Five essential pieces designed to anchor an effortless, understated uniform.
        </p>
      </header>

      {/* Capsule List */}
      <div className="divide-y divide-stone-200">
        {CAPSULE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="group py-5 sm:py-6 transition-colors duration-200 sm:-mx-4 sm:px-4 rounded-sm sm:hover:bg-stone-50/60"
          >
            {/* Grid Layout: Stacked on mobile, 12-column grid on md screens */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-baseline">
              
              {/* Number & Category */}
              <div className="md:col-span-3 flex items-baseline space-x-3 sm:space-x-4 mb-1 md:mb-0">
                <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                  {item.id}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-medium">
                  {item.category}
                </span>
              </div>

              {/* Title & Details */}
              <div className="md:col-span-7">
                <h2 className="text-sm sm:text-base font-normal text-stone-900 group-hover:text-black">
                  {item.name}
                </h2>
                <p className="text-xs text-stone-500 mt-1 sm:mt-0.5 leading-relaxed font-light">
                  {item.details}
                </p>
              </div>

              {/* Direct Link */}
              <div className="md:col-span-2 pt-2 md:pt-0 md:text-right">
                <a
                  href={item.href}
                  className="inline-flex items-center text-xs font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
                >
                  Shop
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">
                    &rarr;
                  </span>
                </a>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-200 flex justify-between items-center text-[11px] sm:text-xs text-stone-400 font-light">
        <span>Curated Selection</span>
        <span>2026 Edition</span>
      </footer>
    </section>
  );
}