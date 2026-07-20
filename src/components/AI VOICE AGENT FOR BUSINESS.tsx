"use client";

import Image from "next/image";

const tinyStars = Array.from({ length: 40 }, (_, i) => ({
  top: `${((i * 19 + 5) % 90) + 3}%`,
  left: `${((i * 31 + 9) % 96) + 2}%`,
  size: i % 3 === 0 ? 2 : 1,
  opacity: 0.12 + ((i * 11) % 6) * 0.1,
}));

export default function AIVoiceAgentForBusiness() {
  return (
    <section id="testimonials" className="relative overflow-hidden section-pad text-white">
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/images/v96_465.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 35%, rgba(110,150,79,0.12) 0%, transparent 70%)",
        }}
      />
      {tinyStars.map((star, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          aria-hidden="true"
        />
      ))}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(8,15,27,0.99) 55%, rgba(0,0,0,1) 100%)",
        }}
      />

      <div className="container-main relative z-[1]">
        <div className="mb-14 text-center">
          <div className="badge uppercase tracking-wide">
            <span className="badge-dot" />
            AI VOICE AGENT FOR BUSINESS · LIVE 24/7
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="flex flex-col items-start text-left">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-none font-bold text-[#6e964f] tracking-tight mb-4 uppercase drop-shadow-md">
              SKADI
            </h2>

            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/50 mb-8 uppercase">
              Always on. Always closing.
            </p>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-[460px] mb-10">
              Our AI call automation agent service answers every call instantly, qualifies leads, and books appointments — helping you automate customer calls and capture more revenue 24/7.
            </p>

            <form className="flex w-full max-w-md flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="tel" 
                placeholder="Enter Number" 
                className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#6e964f]"
              />
              <button type="submit" className="btn-demo w-full sm:w-auto shrink-0 px-8 py-3.5 text-sm uppercase tracking-wider">
                Connect
              </button>
            </form>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* Replace the src with your image when ready */}
              <Image
                src="/images/AI VOICE AGENT FOR BUSINESS.webp"
                alt="Skadi Success"
                fill
                className="object-cover bg-black/20"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
