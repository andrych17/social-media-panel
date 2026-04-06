import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const footerLinks = [
  {
    label: "Navigasi",
    links: [
      { name: "Layanan", href: "/#services" },
      { name: "Harga", href: "/pricing" },
      { name: "Testimoni", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
      { name: "Tentang Kami", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-sm text-gray-500 mt-4 max-w-sm leading-relaxed">
              GasFollow — partner terpercaya kamu untuk menumbuhkan kehadiran media sosial dengan followers, likes, dan views yang nyata.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://wa.me/6285785246372"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-dark transition-colors font-medium"
              >
                <MessageCircle size={16} className="text-[#25d366]" />
                WhatsApp — 0857-8524-6372
              </a>
              <a
                href="https://www.instagram.com/gasfollow.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-dark transition-colors font-medium"
              >
                <span className="text-[#e1306c]"><InstagramIcon /></span>
                Instagram — @gasfollow.id
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold mb-4 text-dark">{group.label}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-dark transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} GasFollow.id — Jasa Social Media Terpercaya
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-dark transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-dark transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
