import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportRequestForm from "@/components/ReportRequestForm";

export const metadata: Metadata = {
  title: "Industry Report — Skadi",
  description:
    "Get the Skadi Market Landscape report — AI Voice Agent Capability Matrix for service businesses.",
};

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-skadi-bg">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[100px] sm:pb-24 sm:pt-[120px]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[50%]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,150,79,0.14) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container-main relative z-[1]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left — report preview */}
            <div className="min-w-0">
              <div className="badge border border-white/[0.06]">
                <span className="badge-dot" />
                Industry Recognition
              </div>
              <h1 className="mt-5 text-[32px] font-normal leading-tight tracking-[-1px] sm:text-[42px] lg:text-[44px] xl:text-[48px]">
                Recognized as a{" "}
                <span className="serif-italic gradient-serif">Pioneering</span>{" "}
                Solution
              </h1>
              <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
                Independent landscape analysis of AI voice agents — where Skadi
                sits for customer confidence, automation capability, and fit for
                service businesses that can&apos;t afford missed calls.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                <div className="relative aspect-[16/11] w-full sm:aspect-[4/3]">
                  <Image
                    src="/images/Skadi-Report-Image.png"
                    alt="Skadi Market Landscape — AI Voice Agent Capability Matrix"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="border-t border-white/[0.06] px-5 py-4 sm:px-6">
                  <p className="text-[14px] font-medium text-white sm:text-[15px]">
                    Skadi Market Landscape
                  </p>
                  <p className="mt-1 text-[13px] text-skadi-muted">
                    AI Voice Agent Capability Matrix
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="w-full lg:sticky lg:top-[100px]">
              <ReportRequestForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
