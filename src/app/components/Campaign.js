"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';

export default function InMotionCampaign() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  // Sample mini-clips data showcasing movement, drape, and texture
  const clips = [
    {
      id: 1,
      title: "Silk Chiffon Drape",
      focus: "Fluidity & Light Reflection",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-wearing-a-yellow-dress-41549-large.mp4",
      tag: "3.5s Loop",
      notes: "100% Organic Mulberry Silk • 12 Momme"
    },
    {
      id: 2,
      title: "Structured Wool Tailoring",
      focus: "Crease Recovery & Structure",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-catwalk-in-a-fashion-show-41484-large.mp4",
      tag: "4.0s Loop",
      notes: "Architectural Cut • Double-Faced Weave"
    },
    {
      id: 3,
      title: "Pleated Movement in Wind",
      focus: "Elastic Memory & Weight",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stylish-girl-posing-in-a-photoshoot-41551-large.mp4",
      tag: "3.2s Loop",
      notes: "Thermal Pleating • Micro-Recycled Poly"
    }
  ];

  const currentClip = clips[activeClipIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleClipSelect = (index) => {
    setActiveClipIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans bg-neutral-950 text-neutral-100 min-h-screen">
      
      {/* Editorial Header */}
      <header className="mb-10 pb-6 border-b border-neutral-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs tracking-widest uppercase text-amber-400 font-mono">
            Collection SS26 • Motion Index
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-50 mt-1">
            Garments in Motion
          </h1>
        </div>
        <p className="text-neutral-400 text-sm max-w-md">
          Micro-clip telemetry capturing drape physics, weave density, and real-world movement under dynamic studio lighting.
        </p>
      </header>

      {/* Main 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================== */}
        {/* DIV 1: MINI-CLIP VIDEO PLAYER PLAYER & MOTION METRICS      */}
        {/* ========================================================== */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
          
          {/* Main Video Frame */}
          <div className="relative group rounded-2xl overflow-hidden bg-neutral-900 aspect-[3/4] md:aspect-[4/5] shadow-2xl border border-neutral-800">
            <video
              key={currentClip.videoUrl}
              ref={videoRef}
              src={currentClip.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Top Gradient Badge Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-xs font-mono text-neutral-200 border border-neutral-700/50">
                <RefreshCw className="w-3 h-3 text-amber-400 animate-spin-slow" />
                {currentClip.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-xs font-medium text-amber-300 border border-amber-500/30">
                {currentClip.focus}
              </span>
            </div>

            {/* Bottom Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent flex items-end justify-between z-10">
              <div>
                <h3 className="text-xl font-serif text-white">{currentClip.title}</h3>
                <p className="text-xs text-neutral-300 font-mono mt-1">{currentClip.notes}</p>
              </div>

              {/* Play / Mute Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-md border border-neutral-700 transition"
                  aria-label="Toggle Audio"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold backdrop-blur-md transition shadow-lg"
                  aria-label="Toggle Playback"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mini-Clip Thumbnails Carousel Selector */}
          <div className="grid grid-cols-3 gap-3">
            {clips.map((clip, idx) => (
              <button
                key={clip.id}
                onClick={() => handleClipSelect(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeClipIndex === idx
                    ? 'border-amber-400 bg-neutral-900 ring-1 ring-amber-400/50'
                    : 'border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700'
                }`}
              >
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Clip 0{idx + 1}
                </div>
                <div className="text-xs font-medium text-neutral-200 truncate">{clip.title}</div>
              </button>
            ))}
          </div>

        </div>

        {/* ========================================================== */}
        {/* DIV 2: BRAND CAMPAIGN PROCESS & FABRIC STORY               */}
        {/* ========================================================== */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between self-stretch bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-neutral-800">
          
          <div className="space-y-8">
            {/* Section Tag */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Campaign Design Rationale
              </span>
              <h2 className="text-2xl font-serif text-white mt-2">
                Engineering Motion into High Fashion
              </h2>
            </div>

            {/* Process Timeline Steps */}
            <div className="space-y-6">
              
              {/* Step 1 */}
              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-amber-400 group-hover:text-neutral-950 text-amber-400 text-xs font-mono flex items-center justify-center shrink-0 transition-colors">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">Kinetic Pattern Drafts</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Every piece is draped directly on 3D biomechanical mannequins to calculate fabric stress points during movement before cutting.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-amber-400 group-hover:text-neutral-950 text-amber-400 text-xs font-mono flex items-center justify-center shrink-0 transition-colors">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">Drape & Light Testing</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Shot in 120 FPS high-frame-rate loops to test how the weave captures specular highlights across outdoor sunlight and evening indoor light.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-amber-400 group-hover:text-neutral-950 text-amber-400 text-xs font-mono flex items-center justify-center shrink-0 transition-colors">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-100">Garment Memory & Fit</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Designed to retain fluid shape without clinging. The mini-clips show real-time recovery as the model walks and turns.
                  </p>
                </div>
              </div>

            </div>

            {/* Fabric Specs Summary Box */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-3">
              <div className="text-xs font-mono text-neutral-300 font-semibold border-b border-neutral-800 pb-2 flex justify-between">
                <span>SPECIFICATIONS</span>
                <span className="text-amber-400">PASSED QUALITY TEST</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-neutral-500 block">WEAVE DENSITY</span>
                  <span className="text-neutral-200 font-medium">320 GSM Double Weave</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">FLEXIBILITY</span>
                  <span className="text-neutral-200 font-medium">4-Way Micro Stretch</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
            <div className="text-xs text-neutral-400">
              Ready to feel the difference?
            </div>
            <button className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white hover:bg-neutral-200 text-neutral-950 px-5 py-3 rounded-full transition">
              Explore Piece <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}