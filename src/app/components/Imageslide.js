// import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-black py-8 md:py-12">
      {/* Container to handle max layout width and horizontal margins */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Aspect Ratio Box (Wide Cinematic Banner ~2.39:1 or 21:9) */}
        <div className="relative w-full aspect-[21/9] bg-neutral-950 overflow-hidden group">
          
          {!isPlaying ? (
            /* Poster State (Thumbnail + Play Overlay) */
            <>
              {/* Background Image */}
              <Image
                src="/hero-cover.jpg" // Place your high-res image here
                alt="Iris Van Herpen Show Feature"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Dark Overlay to boost play button visibility */}
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

              {/* Centered Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
              >
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white">
                  {/* Play Icon offset slightly to the right for visual centering */}
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1 stroke-[1.2] fill-transparent" />
                </div>
              </button>
            </>
          ) : (
            /* Active Video State */
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Fashion Show Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

        </div>
      </div>
    </section>
  );
}