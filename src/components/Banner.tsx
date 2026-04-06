"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  { src: "/images/banner1.png", alt: "GasFollow.id — Jasa Followers Instagram & TikTok" },
  { src: "/images/banner2.png", alt: "GasFollow.id — Likes, Views, Followers Murah" },
];

const INTERVAL_MS = 5000;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [errors, setErrors] = useState<Record<number, boolean>>({});
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((p) => (p - 1 + banners.length) % banners.length);
  const next = () => setCurrent((p) => (p + 1) % banners.length);

  const allErrors = banners.every((_, i) => errors[i]);

  if (allErrors) {
    return (
      <div className="w-full pt-16">
        <div className="w-full h-[200px] md:h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 border-b border-black/10 flex flex-col items-center justify-center gap-3">
          <span className="text-5xl">🖼️</span>
          <p className="text-gray-500 text-sm text-center px-4">
            Upload banner ke{" "}
            <code className="bg-black/5 px-2 py-0.5 rounded text-xs font-mono">
              public/images/banner1.png
            </code>{" "}
            &amp;{" "}
            <code className="bg-black/5 px-2 py-0.5 rounded text-xs font-mono">
              banner2.png
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-16">
      <div
        className="relative w-full overflow-hidden bg-gray-100"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/5]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {!errors[current] ? (
                <Image
                  src={banners[current].src}
                  alt={banners[current].alt}
                  fill
                  priority
                  className="object-cover object-center"
                  onError={() => setErrors((prev) => ({ ...prev, [current]: true }))}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Banner {current + 1} belum diupload</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Banner sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={next}
          aria-label="Banner berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Banner ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-white shadow"
                  : "w-2 h-2 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        {!paused && (
          <motion.div
            key={`progress-${current}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/60 origin-left z-10"
          />
        )}
      </div>
    </div>
  );
}

