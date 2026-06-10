export default function Solution() {
  return (
    <section
      className="relative overflow-hidden border-y border-[rgba(110,150,79,0.12)] py-12 text-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(110,150,79,0.06), rgba(110,150,79,0.03))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "black",
        }}
      />
      <div className="container-main relative z-[1]">
        <div className="badge mb-7">
          <span className="badge-dot" />
          Solution · AI Voice Agent for Service Businesses
        </div>
        <p className="mx-auto max-w-[1120px] text-[22px] font-normal leading-relaxed text-white/90 sm:text-[28px]">
          Skadi answers every call, qualifies every lead, and books every
          opportunity —
          <br className="hidden sm:block" />
          helping you capture more revenue without hiring more staff.
        </p>
      </div>
    </section>
  );
}
