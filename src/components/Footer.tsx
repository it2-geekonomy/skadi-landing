import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#demo", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="container-main flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Image
          src="/images/Group.png"
          alt="Skadi"
          width={90}
          height={32}
          className="h-7 w-auto brightness-0 invert"
        />
        <div className="flex flex-wrap justify-center gap-7">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-skadi-muted transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-[13px] text-white/30">
          © 2025 Skadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
