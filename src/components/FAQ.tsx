"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa lama proses?",
    answer:
      "Proses dimulai dalam 1x24 jam setelah pembayaran dikonfirmasi. Biasanya lebih cepat dari itu.",
  },
  {
    question: "Apakah likes & views bisa dipecah ke beberapa postingan?",
    answer:
      "Bisa! Likes dan views dapat dibagi ke lebih dari satu postingan. Misalnya, paket 1.000 likes bisa dipecah menjadi 500 likes untuk post A dan 500 likes untuk post B. Beritahu kami link setiap postingan saat order.",
  },
  {
    question: "Berapa maksimal postingan yang bisa menerima likes/views dalam satu order?",
    answer:
      "Tidak ada batasan jumlah postingan asalkan total jumlahnya sesuai paket yang dipilih. Semakin banyak postingan, semakin kecil jatah per postingannya.",
  },
  {
    question: "Apakah followers bisa drop?",
    answer:
      "Bisa drop sekitar 10-30% tergantung jenis layanan. Kami menyediakan garansi refill untuk mengatasinya.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Ada garansi refill untuk semua layanan. Jika terjadi penurunan, kami akan melakukan pengisian ulang secara gratis.",
  },
  {
    question: "Apakah aman?",
    answer:
      "100% aman. Kami tidak memerlukan password akun Anda. Cukup berikan username saja.",
  },
  {
    question: "Cara order?",
    answer:
      "Order sangat mudah! Cukup hubungi kami via WhatsApp, pilih paket yang diinginkan, lakukan pembayaran, dan followers/likes/views akan mulai masuk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Pertanyaan yang Sering <span className="gradient-text">Ditanyakan</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-secondary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
