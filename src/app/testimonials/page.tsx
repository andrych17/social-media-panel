import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";
import TestimonialsGrid from "@/components/TestimonialsGrid";

export default function TestimonialsPage() {
  const dir = path.join(process.cwd(), "public", "images", "testimoni");
  let images: string[] = [];

  try {
    const files = fs.readdirSync(dir);
    const imageFiles = files.filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
    const withStats = imageFiles.map((f) => ({
      name: f,
      mtime: fs.statSync(path.join(dir, f)).mtime.getTime(),
    }));
    withStats.sort((a, b) => b.mtime - a.mtime);
    images = withStats.map((f) => `/images/testimoni/${f.name}`);
  } catch {
    images = [];
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                Apa Kata Pelanggan Kami
              </p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Testimoni{" "}
                <span className="gradient-text">Pelanggan</span>
              </h1>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">
                Lebih dari{" "}
                <span className="font-bold text-dark">500+</span>{" "}
                pelanggan puas yang sudah mempercayai GasFollow.
              </p>
            </div>

            {/* Image grid */}
            <TestimonialsGrid images={images} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </>
  );
}

