import Image from "next/image";


export default function Home() {
  const navItems = [
    { label: 'HAUTE COUTURE', active: true },
    { label: 'SCULPTING THE SENSES', active: false },
    { label: 'SCULPTURE', active: false },
    { label: 'BESPOKE', active: false },
    { label: 'MUSES', active: false },
    { label: 'BOUTIQUE', active: false },
    { label: 'NEWS', active: false },
    { label: 'THE MAISON OF IRIS VAN HERPEN', active: false },
  ];

  const galleryImages = [
    { src: '/look1.jpg', alt: 'Look 1 - Gold organza dress' },
    { src: '/look2.jpg', alt: 'Look 2 - Blue layered gown' },
    { src: '/look3.jpg', alt: 'Look 3 - Luminous green dress' },
    { src: '/look4.jpg', alt: 'Look 4 - Sheer structured gown' },
  ];


  return (


<div className="min-h-screen bg-white text-black font-sans selection:bg-neutral-200">
      
      {/* HEADER SECTION */}
      <header className="px-6 pt-6 pb-4 max-w-7xl mx-auto">
        {/* Top Utility Bar */}
        <div className="flex items-center justify-between border-b border-transparent pb-6">
          {/* Left: Search Icon */}
          <button className="p-2 hover:opacity-60 transition-opacity" aria-label="Search">
            {/* <Search className="w-4 h-4 stroke-[1.5]" /> */}
          </button>

          {/* Center: Brand Logo */}
          <div className="flex flex-col items-center">
            {/* Top Monogram Symbol */}
            <div className="text-xl tracking-[0.3em] font-extralight mb-1">
              | <span className="text-xs align-middle font-normal">U</span> | - |
            </div>
            {/* Main Brand Title */}
            <h1 className="tracking-[0.35em] text-2xl font-light uppercase">
              David Blessing Ufedo
            </h1>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center space-x-3 text-black">
            <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
              {/* <Instagram className="w-4 h-4 stroke-[1.5]" /> */}
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
              {/* <Facebook className="w-4 h-4 stroke-[1.5]" /> */}
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Pinterest">
              {/* <PinterestIcon /> */}
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity" aria-label="YouTube">
              {/* <Youtube className="w-4 h-4 stroke-[1.5]" /> */}
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[11px] tracking-[0.2em] font-semibold">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`transition-colors uppercase ${
                    item.active
                      ? 'text-[#8b263e]'
                      : 'text-neutral-800 hover:text-black'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="max-w-[1400px] mx-auto px-4 pt-8 pb-16">
        {/* Collection Heading */}
        <h2 className="text-center text-sm tracking-[0.25em] font-bold uppercase mb-8">
          View My Collections
        </h2>

        {/* Gallery Carousel Container */}
        <div className="relative flex items-center justify-between">
          {/* Left Arrow */}
          <button 
            className="absolute -left-6 z-10 p-2 text-neutral-400 hover:text-black transition-colors"
            aria-label="Previous image"
          >
            {/* <ChevronLeft className="w-8 h-8 stroke-[1]" /> */}
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="relative aspect-[3/5] w-full bg-neutral-100 overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute -right-6 z-10 p-2 text-neutral-400 hover:text-black transition-colors"
            aria-label="Next image"
          >
            {/* <ChevronRight className="w-8 h-8 stroke-[1]" /> */}
          </button>
        </div>

        {/* Bottom Call To Action Button */}
        <div className="flex justify-center mt-12">
          <button className="border border-black px-6 py-2.5 text-[10px] tracking-[0.25em] font-medium uppercase hover:bg-black hover:text-white transition-all">
            Discover the new collection
          </button>
        </div>
      </main>

    </div>
  );
}
