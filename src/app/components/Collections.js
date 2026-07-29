import Image from "next/image";

export default function Hero() {
  const galleryImages = [
    { src: "/assets", alt: "Look 1 - Gold organza dress" },
    { src: "/look2.jpg", alt: "Look 2 - Blue layered gown" },
    { src: "/look3.jpg", alt: "Look 3 - Luminous green dress" },
    { src: "/look3.jpg", alt: "Look 4 - Sheer structured gown" },
  ];

  return (
    <section
      id="collections"
      className="max-w-[1400px] mx-auto px-4 pt-44 pb-16"
    >
      {/* Collection Heading */}
      <h2 className="text-center text-sm tracking-[0.25em] font-bold uppercase mb-8">
        View My Collections
      </h2>

      {/* Gallery */}
      <div className="relative flex items-center justify-between">
        {/* Previous Button */}
        <button
          className="absolute -left-6 z-10 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Previous image"
        >
          {/* ← */}
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[3/5] overflow-hidden bg-neutral-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                sizes="(max-width:640px)100vw,
                       (max-width:768px)50vw,
                       25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="absolute -right-6 z-10 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Next image"
        >
          {/* → */}
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button className="border border-black px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-300">
          Discover the New Collection
        </button>
      </div>
    </section>
  );
}