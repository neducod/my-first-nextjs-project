"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Navigation", href: "#hero", id: "hero" },
  { label: "Collection", href: "#collections", id: "collection" },
  { label: "Campaign", href: "#campaign", id: "campaign" },
  { label: "Editorial", href: "#editorial", id: "editorial" },
  { label: "Runway", href: "#runway", id: "runway" },
  { label: "Story", href: "#story", id: "story" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          <button aria-label="Search">
            🔍
          </button>

          <h1 className="tracking-[0.35em] text-2xl font-light uppercase">
            David Blessing Ufedo
          </h1>

          <div className="flex gap-4">
            <span>IG</span>
            <span>FB</span>
          </div>

        </div>

        {/* Navigation */}

        <nav className="mt-6">

          <ul className="flex justify-center flex-wrap gap-x-8 gap-y-3">

            {navItems.map((item) => (

              <li key={item.id}>

                <a
                  href={item.href}
                  className={`uppercase tracking-[0.18em] text-[11px] transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-[#8b263e]"
                      : "text-neutral-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </a>

              </li>

            ))}

          </ul>

        </nav>

      </div>
    </header>
  );
}