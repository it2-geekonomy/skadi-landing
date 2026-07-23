import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoRequestForm from "@/components/DemoRequestForm";
import { demoTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Book a Demo — Skadi",
  description:
    "See Skadi live in 15 minutes. No pitch decks — a live walkthrough for your industry.",
};

const benefits = [
  "A live 15-minute walkthrough tailored to your calls",
  "Honest feedback on fit for HVAC, plumbing & field service",
  "Clear setup plan — live in as little as 48 hours",
];

function TickIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0">
      <circle cx="8" cy="8" r="8" fill="#6e964f" />
      <path
        d="M4.5 8l2.5 2.5 4.5-5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DemoPage() {
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
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left — form */}
            <div className="w-full">
              <DemoRequestForm />
            </div>

            {/* Right — value prop */}
            <div className="min-w-0 w-full flex flex-col lg:pt-2">
              <div className="badge w-fit">
                <span className="badge-dot" />
                Book a Free Demo
              </div>
              <h1 className="mt-5 text-[28px] font-normal leading-tight tracking-[-1px] sm:text-[36px] lg:text-[38px] xl:text-[40px]">
                See Skadi live in{" "}
                <span className="serif-italic gradient-serif">15 minutes.</span>
              </h1>
              <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[#6e964f]/40">
                <video
                  src="/demo%20video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  disableRemotePlayback
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
