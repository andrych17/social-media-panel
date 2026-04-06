"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsGrid({ images }: { images: string[] }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="break-inside-avoid rounded-2xl overflow-hidden border border-black/8 bg-white shadow-sm"
        >
          <Image
            src={src}
            alt={`Testimoni ${i + 1}`}
            width={600}
            height={800}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
