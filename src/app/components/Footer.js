'use client';

import React from 'react';

export default function MassiveTypeFooter() {
  return (
    <footer className="w-full bg-white text-neutral-900 font-sans border-t border-neutral-100 pt-20 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden min-h-[70vh]">
      {/* Top Meta Bar */}
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-neutral-400 uppercase tracking-widest gap-4">
        <span>[ Studio Inquiries ]</span>
        <a 
          href="mailto:contact@studio.com" 
          className="text-neutral-900 hover:text-neutral-500 transition-colors underline underline-offset-4 decoration-neutral-200"
        >
          contact@studio.com
        </a>
      </div>

      {/* Center/Bottom Massive Type Anchor */}
      <div className="my-auto py-12 select-none">
        <h1 className="text-[14vw] leading-[0.8] font-black uppercase tracking-tighter text-neutral-900 text-center sm:text-left -ml-[0.03em]">
          Let’s Talk
        </h1>
      </div>

      {/* Floating Bottom Navigation Links */}
      <div className="max-w-6xl w-full mx-auto border-t border-neutral-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
        <div className="flex gap-6 tracking-tight">
          <a href="#instagram" className="hover:text-neutral-900 transition-colors">Instagram</a>
          <a href="#arena" className="hover:text-neutral-900 transition-colors">Are.na</a>
          <a href="#linkedin" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
        </div>

        <div className="flex items-center gap-8 text-[11px] text-neutral-400">
          <span>© 2026 Studio</span>
          <span>Milano / Paris</span>
        </div>
      </div>
    </footer>
  );
}