import Image from "next/image";
import Link from "next/link";

export default function HeroReportCard() {
  return (
    <div className="w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#080e07]">
        <Image
          src="/images/Skadi-Report-Image.png"
          alt="Skadi Market Landscape — AI Voice Agent Capability Matrix"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 460px"
          priority
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.92) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
        <div className="badge border border-white/[0.06]">
          <span className="badge-dot" />
          Industry Recognition
        </div>
        <h3 className="mt-3 text-[18px] font-medium leading-snug text-white sm:text-[20px]">
          Recognized as a{" "}
          <span className="serif-italic gradient-serif">Pioneering</span>{" "}
          Solution
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-skadi-muted sm:text-[14px]">
          See where Skadi sits in the AI voice agent landscape — and how we
          compare for service businesses.
        </p>
        <Link
          href="/report"
          className="btn-demo mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold sm:text-[15px]"
        >
          Read the Report
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
