import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#ai-features", label: "How It Works" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/#features", label: "Features" },
  { href: "/demo", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-[rgba(110,150,79,0.1)] bg-[rgba(8,14,7,0.85)] backdrop-blur-xl">
      <div className="container-main flex h-[68px] items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/Group.png"
            alt="Skadi"
            width={90}
            height={32}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/demo" className="btn-demo">
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}
