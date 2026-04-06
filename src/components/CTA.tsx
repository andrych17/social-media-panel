"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
          <div className="absolute inset-0 border border-black/8 rounded-3xl" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/[0.02] rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Mulai Tumbuh
              <br />
              <span className="gradient-text">Sekarang</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
              Bergabung dengan ribuan pelanggan yang sudah puas. Proses dimulai hari ini — pesan sekarang dan rasakan pertumbuhan nyata di akunmu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6285785246372"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-dark text-white rounded-full font-bold text-sm hover:bg-dark/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
              >
                Pesan via WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="/pricing"
                className="group inline-flex items-center gap-2 px-10 py-4 border border-black/20 text-dark rounded-full font-bold text-sm hover:bg-black/5 transition-all duration-300"
              >
                Lihat Harga
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
