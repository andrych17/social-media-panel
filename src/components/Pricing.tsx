"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z" />
  </svg>
);

interface PricingItem {
  platform: "Instagram" | "TikTok";
  type: "Followers" | "Likes" | "Views";
  region: "Global" | "Indonesia" | "High Quality";
  amount: string;
  price: string;
}

const allItems: PricingItem[] = [
  // Instagram Followers Global
  { platform: "Instagram", type: "Followers", region: "Global", amount: "100", price: "Rp 2.500" },
  { platform: "Instagram", type: "Followers", region: "Global", amount: "500", price: "Rp 12.000" },
  { platform: "Instagram", type: "Followers", region: "Global", amount: "1.000", price: "Rp 22.000" },
  { platform: "Instagram", type: "Followers", region: "Global", amount: "2.000", price: "Rp 40.000" },
  // Instagram Followers Indonesia
  { platform: "Instagram", type: "Followers", region: "Indonesia", amount: "100", price: "Rp 7.500" },
  { platform: "Instagram", type: "Followers", region: "Indonesia", amount: "500", price: "Rp 36.000" },
  { platform: "Instagram", type: "Followers", region: "Indonesia", amount: "1.000", price: "Rp 72.000" },
  { platform: "Instagram", type: "Followers", region: "Indonesia", amount: "2.000", price: "Rp 140.000" },
  // Instagram Likes Global
  { platform: "Instagram", type: "Likes", region: "Global", amount: "100", price: "Rp 2.000" },
  { platform: "Instagram", type: "Likes", region: "Global", amount: "500", price: "Rp 9.000" },
  { platform: "Instagram", type: "Likes", region: "Global", amount: "1.000", price: "Rp 16.000" },
  { platform: "Instagram", type: "Likes", region: "Global", amount: "2.000", price: "Rp 30.000" },
  // Instagram Likes Indonesia
  { platform: "Instagram", type: "Likes", region: "Indonesia", amount: "100", price: "Rp 4.000" },
  { platform: "Instagram", type: "Likes", region: "Indonesia", amount: "500", price: "Rp 20.000" },
  { platform: "Instagram", type: "Likes", region: "Indonesia", amount: "1.000", price: "Rp 40.000" },
  { platform: "Instagram", type: "Likes", region: "Indonesia", amount: "2.000", price: "Rp 75.000" },
  // Instagram Views Global
  { platform: "Instagram", type: "Views", region: "Global", amount: "100", price: "Rp 2.000" },
  { platform: "Instagram", type: "Views", region: "Global", amount: "500", price: "Rp 9.000" },
  { platform: "Instagram", type: "Views", region: "Global", amount: "1.000", price: "Rp 16.000" },
  { platform: "Instagram", type: "Views", region: "Global", amount: "2.000", price: "Rp 30.000" },
  // TikTok Followers Global
  { platform: "TikTok", type: "Followers", region: "Global", amount: "100", price: "Rp 3.000" },
  { platform: "TikTok", type: "Followers", region: "Global", amount: "500", price: "Rp 15.000" },
  { platform: "TikTok", type: "Followers", region: "Global", amount: "1.000", price: "Rp 30.000" },
  { platform: "TikTok", type: "Followers", region: "Global", amount: "2.000", price: "Rp 59.000" },
  // TikTok Followers Indonesia
  { platform: "TikTok", type: "Followers", region: "Indonesia", amount: "100", price: "Rp 8.500" },
  { platform: "TikTok", type: "Followers", region: "Indonesia", amount: "500", price: "Rp 43.000" },
  { platform: "TikTok", type: "Followers", region: "Indonesia", amount: "1.000", price: "Rp 85.000" },
  { platform: "TikTok", type: "Followers", region: "Indonesia", amount: "2.000", price: "Rp 169.000" },
  // TikTok Likes High Quality
  { platform: "TikTok", type: "Likes", region: "High Quality", amount: "100", price: "Rp 300" },
  { platform: "TikTok", type: "Likes", region: "High Quality", amount: "500", price: "Rp 1.500" },
  { platform: "TikTok", type: "Likes", region: "High Quality", amount: "1.000", price: "Rp 3.000" },
  { platform: "TikTok", type: "Likes", region: "High Quality", amount: "2.000", price: "Rp 6.000" },
  // TikTok Likes Indonesia
  { platform: "TikTok", type: "Likes", region: "Indonesia", amount: "100", price: "Rp 5.000" },
  { platform: "TikTok", type: "Likes", region: "Indonesia", amount: "500", price: "Rp 23.000" },
  { platform: "TikTok", type: "Likes", region: "Indonesia", amount: "1.000", price: "Rp 45.000" },
  { platform: "TikTok", type: "Likes", region: "Indonesia", amount: "2.000", price: "Rp 88.000" },
  // TikTok Views Indonesia
  { platform: "TikTok", type: "Views", region: "Indonesia", amount: "100", price: "Rp 2.000" },
  { platform: "TikTok", type: "Views", region: "Indonesia", amount: "500", price: "Rp 9.000" },
  { platform: "TikTok", type: "Views", region: "Indonesia", amount: "1.000", price: "Rp 16.000" },
  { platform: "TikTok", type: "Views", region: "Indonesia", amount: "2.000", price: "Rp 30.000" },
];

const regionLabel: Record<string, string> = {
  Indonesia: "🇮🇩 Indonesia",
  Global: "🌍 Global",
  "High Quality": "⭐ High Quality",
};

const regionLabelPlain: Record<string, string> = {
  Indonesia: "Indonesia",
  Global: "Global",
  "High Quality": "High Quality",
};

const typeConfig: Record<string, { emoji: string; label: string }> = {
  Followers: { emoji: "👥", label: "Followers" },
  Likes: { emoji: "❤️", label: "Likes" },
  Views: { emoji: "👁️", label: "Views" },
};

const platformFilters = ["Semua", "Instagram", "TikTok"] as const;
type Platform = (typeof platformFilters)[number];

const WA_NUMBER = "6285785246372";

export default function Pricing() {
  const [platform, setPlatform] = useState<Platform>("Semua");

  const typeOrder = ["Followers", "Likes", "Views"] as const;

  const grouped = typeOrder.map((type) => {
    const typeItems = allItems.filter(
      (item) => item.type === type && (platform === "Semua" || item.platform === platform)
    );

    const seen = new Set<string>();
    const subGroups: { platform: "Instagram" | "TikTok"; region: string; items: PricingItem[] }[] = [];
    for (const item of typeItems) {
      const key = `${item.platform}-${item.region}`;
      if (!seen.has(key)) {
        seen.add(key);
        subGroups.push({
          platform: item.platform,
          region: item.region,
          items: typeItems.filter((i) => i.platform === item.platform && i.region === item.region),
        });
      }
    }

    return { type, subGroups };
  }).filter((g) => g.subGroups.length > 0);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Daftar Harga</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Harga <span className="gradient-text">Transparan</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Pilih paket sesuai kebutuhan. Proses cepat, akun real, garansi refill.
          </p>
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-black/8 text-xs text-gray-600">
            <span className="font-semibold text-dark">💳 Pembayaran:</span>
            GoPay · ShopeePay · BCA · BRI · Mandiri
          </div>
        </motion.div>

        {/* Platform Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-12"
        >
          {platformFilters.map((f) => (
            <button
              key={f}
              onClick={() => setPlatform(f)}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                platform === f
                  ? "bg-dark text-white border-dark shadow-sm"
                  : "bg-white text-gray-600 border-black/10 hover:border-black/25 hover:bg-gray-50"
              }`}
            >
              {f === "Instagram" && <span className="text-[#e1306c]"><InstagramIcon /></span>}
              {f === "TikTok" && <TikTokIcon />}
              {f}
            </button>
          ))}
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {grouped.map(({ type, subGroups }, sectionIdx) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIdx * 0.05 }}
            >
              {/* Section title */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{typeConfig[type].emoji}</span>
                <h3 className="text-xl font-black text-dark">{typeConfig[type].label}</h3>
                <div className="flex-1 h-px bg-black/8" />
              </div>

              {/* Sub-group cards in 2-col grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subGroups.map(({ platform: plt, region, items }) => (
                  <div
                    key={`${plt}-${region}`}
                    className="rounded-2xl border border-black/8 bg-white overflow-hidden"
                  >
                    {/* Sub-group header */}
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/6">
                      <span className={plt === "Instagram" ? "text-[#e1306c]" : "text-[#010101]"}>
                        {plt === "Instagram" ? <InstagramIcon size={13} /> : <TikTokIcon size={13} />}
                      </span>
                      <span className="text-xs font-bold text-dark">{plt}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-500">{regionLabel[region] ?? region}</span>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-black/5">
                      {items.map((item, rowIdx) => (
                        <div
                          key={rowIdx}
                          className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/60 transition-colors"
                        >
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-base font-black text-dark">{item.amount}</span>
                            <span className="text-xs text-gray-400 lowercase">{type}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-dark">{item.price}</span>
                            <a
                              href={`https://wa.me/${WA_NUMBER}?text=Halo%20admin%2C%20saya%20mau%20order%20${encodeURIComponent(
                                `${plt} ${type} ${regionLabelPlain[region] ?? region} ${item.amount} — ${item.price}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dark text-white text-xs font-bold hover:bg-dark/80 transition-colors"
                            >
                              <MessageCircle size={11} />
                              Pesan
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10">
          Klik &ldquo;Pesan&rdquo; untuk langsung chat WhatsApp dengan detail paket.
        </p>
      </div>
    </section>
  );
}
