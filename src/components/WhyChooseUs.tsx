"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Users,
  DollarSign,
  Shield,
  RefreshCw,
  MessageCircle,
} from "lucide-react";
import { type ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={24} />,
    title: "Pengiriman Cepat",
    description: "Proses dimulai dalam 1x24 jam setelah order dikonfirmasi.",
  },
  {
    icon: <Users size={24} />,
    title: "Terlihat Natural & Organik",
    description: "Followers Indo aktif bercampur dengan followers global yang lebih pasif. Komposisi yang terlihat natural dan tidak mencurigakan.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Harga Terjangkau",
    description: "Harga terjangkau dengan kualitas terbaik di kelasnya.",
  },
  {
    icon: <Shield size={24} />,
    title: "Aman & Terpercaya",
    description: "Tanpa password, tanpa data pribadi. 100% aman untuk akun Anda.",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Garansi Refill",
    description: "Garansi refill tersedia jika terjadi penurunan jumlah.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Support Responsif",
    description: "Tim kami siap membantu via WhatsApp. Respons cepat, ramah, dan siap memandu kamu dari awal sampai selesai.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-gray-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

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
            Kenapa Pilih Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Dipercaya oleh <span className="gradient-text">Ribuan</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card rounded-2xl p-8 text-center group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center mx-auto mb-6 text-black/40 group-hover:text-dark group-hover:bg-black/8 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
