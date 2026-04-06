import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                Siapa Kami
              </p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Tentang <span className="gradient-text">GasFollow</span>
              </h1>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Layanan jasa social media terpercaya untuk Instagram dan TikTok.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-sm max-w-none text-gray-600 space-y-6 leading-relaxed">
              <div className="rounded-2xl border border-black/8 bg-gray-50 p-8 space-y-4">
                <h2 className="text-xl font-black text-dark">Apa itu GasFollow?</h2>
                <p>
                  GasFollow adalah layanan jasa peningkatan media sosial yang membantu kamu menumbuhkan akun Instagram dan TikTok dengan followers, likes, dan views berkualitas — cepat, aman, dan terjangkau.
                </p>
              </div>

              <div className="rounded-2xl border border-black/8 bg-gray-50 p-8 space-y-4">
                <h2 className="text-xl font-black text-dark">Mengapa Memilih Kami?</h2>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Proses cepat — pesanan diproses dalam 1×24 jam",
                    "Akun berkualitas — tersedia pilihan followers Indonesia aktif maupun global",
                    "Tanpa password — kami hanya butuh username atau link akunmu",
                    "Garansi refill — jika ada followers yang drop, kami isi ulang",
                    "Harga transparan — tidak ada biaya tersembunyi",
                    "Admin responsif via WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-dark text-white flex items-center justify-center shrink-0 text-[9px] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-black/8 bg-gray-50 p-8 space-y-4">
                <h2 className="text-xl font-black text-dark">Hubungi Kami</h2>
                <p className="text-sm text-gray-600">
                  Ada pertanyaan atau mau order? Langsung chat WhatsApp kami:
                </p>
                <a
                  href="https://wa.me/6285785246372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark text-white text-sm font-bold hover:bg-dark/80 transition-colors"
                >
                  Chat WhatsApp — 0857-8524-6372
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </>
  );
}
