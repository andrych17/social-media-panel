"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { type ReactNode } from "react";

// Brand SVG icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 21.593c-.525-.347-8.993-6.018-8.993-12.278C3.007 5.127 5.293 3 8.132 3c1.978 0 3.716 1.23 4.868 2.878C14.153 4.23 15.89 3 17.869 3 20.707 3 23 5.127 23 9.315c0 6.26-8.468 11.931-8.993 12.278L12 21.593z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  platform?: "instagram" | "tiktok" | "other";
}

const services: ServiceCard[] = [
  {
    icon: <InstagramIcon />,
    platform: "instagram",
    title: "Instagram Followers",
    description: "Followers Indo & Global dari akun real. Tingkatkan kredibilitas profil kamu seketika.",
  },
  {
    icon: <InstagramIcon />,
    platform: "instagram",
    title: "Instagram Likes",
    description: "Dapatkan likes nyata di postinganmu. Tersedia Indo & Global untuk engagement maksimal.",
  },
  {
    icon: <TikTokIcon />,
    platform: "tiktok",
    title: "TikTok Followers",
    description: "Kembangkan TikTok kamu dengan followers Indo & Global. Akun real, pengiriman cepat.",
  },
  {
    icon: <TikTokIcon />,
    platform: "tiktok",
    title: "TikTok Views",
    description: "Tambah views video TikTok kamu dan jangkau lebih banyak penonton. Proses cepat.",
  },
  {
    icon: <TrendingUp size={24} />,
    platform: "other",
    title: "Layanan Lainnya",
    description: "YouTube Views, Comment, Save & lebih banyak lagi — Hubungi kami untuk paket custom dan pemesanan massal.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            Layanan Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Apa yang Kami <span className="gradient-text">Tawarkan</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const igGlow = service.platform === "instagram"
              ? "hover:shadow-[0_8px_40px_rgba(225,48,108,0.15)] hover:border-[#e1306c]/20"
              : service.platform === "tiktok"
              ? "hover:shadow-[0_8px_40px_rgba(0,242,234,0.12)] hover:border-[#00f2ea]/20"
              : "hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]";
            const iconColor = service.platform === "instagram"
              ? "group-hover:text-[#e1306c]"
              : service.platform === "tiktok"
              ? "group-hover:text-[#00f2ea]"
              : "group-hover:text-dark";
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={`glass-card rounded-2xl p-8 group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${igGlow}`}
              >
                {/* Platform label */}
                {service.platform && service.platform !== "other" && (
                  <span className={`inline-block text-[10px] uppercase tracking-widest font-semibold mb-5 px-2.5 py-1 rounded-full border ${
                    service.platform === "instagram"
                      ? "border-[#e1306c]/30 text-[#e1306c]/80"
                      : "border-[#00f2ea]/30 text-[#00f2ea]/80"
                  }`}>
                    {service.platform === "instagram" ? "Instagram" : "TikTok"}
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center mb-4 text-black/40 ${iconColor} group-hover:bg-black/8 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-dark">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
                {service.platform === "other" && (
                  <a
                    href="https://wa.me/6285785246372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold text-dark border border-black/15 px-4 py-1.5 rounded-full hover:bg-black/5 transition-all duration-200"
                  >
                    Hubungi Kami →
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
