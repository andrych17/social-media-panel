import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";

export const metadata: Metadata = {
  title: "GasFollow.id — Jasa Followers, Likes & Views Instagram TikTok",
  description:
    "Tingkatkan media sosial kamu dengan GasFollow.id. Followers, likes, dan views real untuk Instagram & TikTok. Proses cepat, aman, harga terjangkau.",
  keywords: [
    "jasa followers instagram",
    "jasa followers tiktok",
    "beli followers instagram",
    "beli likes instagram",
    "beli views tiktok",
    "jasa sosmed murah",
    "gasfollow",
  ],
  openGraph: {
    title: "GasFollow.id — Jasa Followers, Likes & Views",
    description: "Followers, likes, dan views real untuk Instagram & TikTok. Proses cepat, aman, harga terjangkau.",
    url: "https://gasfollow.id",
    siteName: "GasFollow.id",
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </>
  );
}
