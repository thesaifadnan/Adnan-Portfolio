"use client";

import { useRef } from "react";

export default function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            My Gallery
          </h2>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* BREAKOUT WRAPPER */}
        <div className="relative -mr-[calc(50vw-50%)]">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar"
          >
            {[
              "/gallery/adnan sheikh 1.jpg",
              "/gallery/adnan sheikh 2.jpg",
              "/gallery/adnan sheikh 3.jpg",
              "/adnan sheikh picture.png",
              "/adnan sheikh picture.png",
              "/adnan sheikh picture.png",
              "/adnan sheikh picture.png",
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[320px]">
                <img
                  src={src}
                  alt=""
                  className="h-[485px] w-full object-cover grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
