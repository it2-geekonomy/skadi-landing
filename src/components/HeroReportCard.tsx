import Image from "next/image";
import Link from "next/link";

export default function HeroReportCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="relative flex-1 min-h-[240px] w-full overflow-hidden bg-black">
        <Image
          src="/images/Skadi-Report-Image.png"
          alt="The True Cost of a Missed Call — Skadi industry research report"
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 460px"
          priority
        />
      </div>

      <div className="shrink-0 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
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
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/report"
            className="btn-demo inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold sm:text-[14px]"
          >
            Read the Report
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
