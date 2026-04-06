import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <Image
        src="/images/logo.png"
        alt="GasFollow.id Logo"
        width={40}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
      <span className="text-lg font-black tracking-tight text-dark">
        Gas<span className="gradient-text">Follow</span>
      </span>
    </a>
  );
}
