import Image from "next/image";
import Link from "next/link";
import SectionAurora from "@/components/SectionAurora";
/* fixed positions — deterministic for SSR */
const tinyStars = Array.from({ length: 72 }, (_, i) => ({
  top: `${((i * 17 + 11) % 94) + 2}%`,
  left: `${((i * 29 + 7) % 97) + 1}%`,
  size: i % 4 === 0 ? 2 : 1,
  opacity: 0.15 + ((i * 13) % 7) * 0.1,
}));

const twinkleStars = [
  { top: "18%", left: "76%", size: 14 },
  { top: "34%", left: "20%", size: 20 },
  { top: "20%", left: "58%", size: 14 },
  { top: "20%", left: "7%", size: 14 },
  { top: "16%", left: "73%", size: 14 },
  { top: "26%", left: "40%", size: 12 },
  { top: "51%", left: "66%", size: 12 },
  { top: "50%", left: "1%", size: 12 },
];

const mediumStars = [
  { top: "29%", left: "30%", size: 6, opacity: 1 },
  { top: "39%", left: "13%", size: 6, opacity: 1 },
  { top: "16%", left: "15%", size: 6, opacity: 1 },
  { top: "35%", left: "80%", size: 6, opacity: 0.4 },
  { top: "47%", left: "20%", size: 6, opacity: 0.4 },
  { top: "26%", left: "82%", size: 6, opacity: 1 },
  { top: "29%", left: "71%", size: 6, opacity: 1 },
  { top: "16%", left: "26%", size: 14, opacity: 0.2 },
  { top: "75%", left: "11%", size: 14, opacity: 0.54 },
];

function VectorStar({
  top,
  left,
  size,
  opacity = 1,
}: {
  top: string;
  left: string;
  size: number;
  opacity?: number;
}) {
  return (
    <div
      className="absolute"
      style={{ top, left, width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <Image
        src="/images/Vector.svg"
        alt=""
        width={size}
        height={size}
        className="h-full w-full"
      />
    </div>
  );
}

function HeroAurora() {
  return <SectionAurora primaryTop="46%" secondaryTop="52%" />;
}
function HeroStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      {tinyStars.map((star, i) => (
        <div
          key={`tiny-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {mediumStars.map((star, i) => (
        <VectorStar key={`med-${i}`} {...star} />
      ))}

      {twinkleStars.map((star, i) => (
        <VectorStar key={`twinkle-${i}`} {...star} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pb-16 pt-[68px] text-center lg:pb-24"
    >
      <HeroAurora />
      <HeroStars />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100vh-68px)] max-w-[820px] flex-col items-center justify-center px-6">
        <div className="hero-eyebrow">
          <Image
            src="/images/Vector green.svg"
            alt=""
            width={11}
            height={11}
            className="h-[11px] w-[11px] shrink-0"
            aria-hidden
          />
          AI Voice Agent for Growing Businesses
        </div>

        <h1 className="mb-[22px] text-[42px] font-medium leading-[1.15] tracking-[-1px] sm:text-[60px] lg:text-[80px]">
          Never{" "}
          <span className="serif-italic italic-green">Miss</span> Another
          Customer <span className="serif-italic italic-white">Call</span>
          <span className="serif-italic italic-dot">.</span>
        </h1>

        <p className="mx-auto mb-9 max-w-[370px] text-[15px] leading-relaxed text-skadi-muted">
          Skadi answers every call, qualifies leads, and books appointments
          automatically — 24/7.
        </p>

        <Link href="#demo" className="btn-action">
          Hear Skadi in Action →
        </Link>
      </div>

      <div className="relative z-[2] mx-auto mt-10 max-w-6xl px-6 lg:mt-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/images/v139_627.png"
            alt="Skadi Admin Overview dashboard"
            width={1400}
            height={800}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
