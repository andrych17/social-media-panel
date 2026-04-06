import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GasFollow — Boost Your Social Media Instantly",
  description:
    "GasFollow: dapatkan real followers, likes, dan views untuk Instagram & TikTok. Pengiriman cepat, harga terjangkau, aman & terpercaya.",
  keywords: [
    "social media",
    "followers",
    "likes",
    "views",
    "instagram",
    "tiktok",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
