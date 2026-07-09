import Image from "next/image";
import {
  testimonialColumns,
  type Testimonial,
} from "@/data/testimonials";

const tinyStars = Array.from({ length: 40 }, (_, i) => ({
  top: `${((i * 19 + 5) % 90) + 3}%`,
  left: `${((i * 31 + 9) % 96) + 2}%`,
  size: i % 3 === 0 ? 2 : 1,
  opacity: 0.12 + ((i * 11) % 6) * 0.1,
}));

function TestimonialCard({
  name,
  company,
  title,
  quote,
  avatar,
  logo,
  featured,
}: Testimonial) {
  return (
    <div
      className={`relative mb-3.5 overflow-hidden rounded-xl p-6 ${
        featured
          ? "border border-[#6e964f]/55 bg-[#0c120a]"
          : "border border-white/[0.08] bg-[#080e07]"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <Image
              src={avatar}
              alt={name}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-base font-semibold leading-tight">{name}</p>
            <p className="text-xs text-white/70">{company}</p>
          </div>
        </div>
        <div className="h-6 w-6 shrink-0 overflow-hidden rounded-full">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={24}
            height={24}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="mb-2 text-left text-base font-semibold">{title}</p>
      <p className="text-left text-sm font-medium leading-relaxed text-white/70">
        {quote}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden section-pad">
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
          <div className="badge">
            <span className="badge-dot" />
            Testimonials
          </div>
          <h2 className="mt-4 text-[32px] font-normal tracking-[-1px] sm:text-[42px]">
            What People{" "}
            <span className="serif-italic gradient-serif">Are Saying</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[636px] text-base text-skadi-muted">
            Skadi answers, qualifies, schedules, and tracks every customer
            conversation so you never miss a revenue opportunity.
          </p>
        </div>

        <div className="grid items-start gap-3.5 lg:grid-cols-3">
          {testimonialColumns.map((col, i) => (
            <div key={i} className="flex flex-col">
              {col.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
