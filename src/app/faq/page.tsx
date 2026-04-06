import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — GasFollow",
  description:
    "Pertanyaan umum seputar layanan GasFollow: proses, garansi, keamanan, dan cara order.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
