import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price List — GasFollow",
  description:
    "Lihat daftar harga lengkap layanan GasFollow: Instagram Followers, Instagram Likes, TikTok Followers, dan TikTok Views.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
