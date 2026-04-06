"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-black/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-black/[0.02] to-transparent rounded-full" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs text-secondary mb-8"
        >
          <Sparkles size={14} className="text-black/40" />
          #1 Layanan Pertumbuhan Media Sosial
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="gradient-text">Tingkatkan</span>
          <br />
          <span className="text-dark">Media Sosialmu</span>
          <br />
          <span className="gradient-text">Sekarang</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10"
        >
          Followers, Likes, Views untuk Instagram & TikTok.
          <br className="hidden sm:block" />
          Proses cepat, akun real, harga terjangkau.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/pricing"
            className="group px-8 py-3.5 bg-dark text-white rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-dark/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]"
          >
            Lihat Harga
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://wa.me/6285785246372"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-black/20 text-dark rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-black/5 transition-all duration-300"
          >
            Pesan Sekarang
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { value: "10K+", label: "Pelanggan" },
            { value: "50K+", label: "Pesanan" },
            { value: "99%", label: "Kepuasan" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-8 py-4 rounded-2xl bg-white/80 border border-black/8 shadow-sm backdrop-blur-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-dark">
                {stat.value}
              </p>
              <p className="text-xs text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
