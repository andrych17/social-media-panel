"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={
          hovered
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 10, scale: 0.9 }
        }
        transition={{ duration: 0.2 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-dark text-xs font-medium rounded-lg whitespace-nowrap shadow-lg pointer-events-none"
      >
        Chat Admin
      </motion.div>

      {/* Button */}
      <a
        href="https://wa.me/6285785246372"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />

        <MessageCircle size={24} className="text-white relative z-10" />
      </a>
    </div>
  );
}
