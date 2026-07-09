import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterNewsletter from "@/components/FooterNewsletter";

type FooterLink = {
  label: string;
  href: string;
};

const navigateLinks: FooterLink[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Live Performance", href: "/#performance" },
  { label: "Missed Calls", href: "/#missed" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#demo" },
  { label: "Book a Demo", href: "/demo" },
];

const legalLinks: FooterLink[] = [
  { label: "Blog", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="min-w-[140px]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
        {title}
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] text-skadi-muted transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/55 transition hover:border-[#6e964f]/35 hover:bg-[#6e964f]/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative mt-2 border-t border-white/[0.06] bg-[#060a06] sm:mt-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,15,9,1) 0%, rgba(6,10,6,1) 100%)",
      }}
    >
      <div className="container-main py-14 sm:py-16 lg:py-[72px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10 xl:gap-14 2xl:gap-16">
          {/* Brand + social */}
          <div className="min-w-0 shrink-0 lg:max-w-[380px]">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Group.png"
                alt="Skadi"
                width={100}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-[400px] text-[14px] leading-[1.65] text-skadi-muted sm:text-[15px]">
              Skadi is the AI voice platform for service businesses — answering
              every call, qualifying leads, and booking appointments automatically,
              24/7.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <SocialIcon label="LinkedIn" href="https://linkedin.com">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="X" href="https://x.com">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="https://facebook.com">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="https://instagram.com">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube" href="https://youtube.com">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Newsletter — center column */}
          <div className="min-w-0 flex-1 lg:max-w-[400px]">
            <FooterNewsletter />
          </div>

          {/* Link columns */}
          <div className="flex shrink-0 gap-12 sm:gap-14 lg:gap-12 xl:gap-16">
            <FooterLinkColumn title="Navigate" links={navigateLinks} />
            <FooterLinkColumn title="Legal" links={legalLinks} />
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.07] pt-8 lg:mt-16">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Skadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
