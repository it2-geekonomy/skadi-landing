"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function ContactGrid() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-[1] h-[min(300px,42%)] w-[min(300px,36%)]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(110,150,79,0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(110,150,79,0.18) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 90% 85% at 0% 0%, black 28%, transparent 72%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 85% at 0% 0%, black 28%, transparent 72%)",
      }}
      aria-hidden="true"
    />
  );
}

function ContactGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55%]"
      style={{
        background:
          "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(110,150,79,0.09) 0%, rgba(110,150,79,0.03) 40%, transparent 72%)",
      }}
      aria-hidden="true"
    />
  );
}

export default function Contact() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleGetStarted() {
    setShowForm(true);
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          source: "Skadi Website Contact Form",
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="demo" className="bg-black pb-20 pt-16 sm:pb-[140px] sm:pt-[100px]">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black p-5 sm:rounded-3xl sm:p-8 lg:p-20">
          <ContactGlow />
          <ContactGrid />

          <div className="relative z-[2] flex flex-col items-center text-center">
            <h2 className="max-w-[820px] text-[28px] font-normal leading-tight tracking-[-1px] sm:text-[38px] lg:text-[42px]">
              Stop Losing Leads.{" "}
              <span className="serif-italic gradient-serif">Start Today.</span>
            </h2>
            <p className="mt-4 max-w-[640px] text-base leading-relaxed text-skadi-muted sm:mt-5 sm:text-[17px]">
              Get a walkthrough built around your business, call volume,
              integrations, and everything in between.
            </p>

            {!showForm && (
              <button
                type="button"
                className="btn-demo mt-8 px-8 py-3.5 sm:mt-10 sm:px-10 sm:py-4"
                onClick={handleGetStarted}
              >
                Book a Demo
              </button>
            )}

            <div
              ref={formRef}
              className={`w-full max-w-[540px] transition-all duration-500 ease-out ${
                showForm
                  ? "mt-10 max-h-[900px] opacity-100 sm:mt-12"
                  : "pointer-events-none mt-0 max-h-0 overflow-hidden opacity-0"
              }`}
              aria-hidden={!showForm}
            >
              <div className="rounded-[18px] border border-white/10 bg-[#0a0a0a]/75 p-6 text-left backdrop-blur-sm sm:p-8 lg:p-10">
                <h3 className="text-[22px] font-medium sm:text-[26px]">
                  Request Your Demo
                </h3>
                <p className="mt-2 text-[14px] text-skadi-muted sm:text-[15px]">
                  We&apos;ll reach out within one business day to schedule.
                </p>

                <form className="mt-6 sm:mt-8" onSubmit={handleSubmit}>
                  <div className="mb-[18px] flex flex-col gap-[18px] sm:flex-row sm:gap-4">
                    <div className="form-group relative min-w-0 flex-1">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="form-input"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="form-group relative min-w-0 flex-1">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="form-input"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>
                  <div className="form-group relative mb-[18px]">
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="form-group relative mb-2">
                    <label htmlFor="email">Business Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  {status === "error" && errorMessage && (
                    <p className="mt-3 text-sm text-red-400" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-demo mt-2 w-full py-3.5 sm:py-4 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Submitting..." : "Book a Free Demo"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
