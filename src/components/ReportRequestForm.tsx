"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CALL_VOLUME_OPTIONS,
  REPORT_PDF_URL,
  type CallVolumeValue,
} from "@/lib/report";

const CALL_VOLUME_QUESTION =
  "What is your average total inbound call volume per month?";

function CallVolumeSelect({
  value,
  onChange,
  disabled,
}: {
  value: CallVolumeValue | "";
  onChange: (value: CallVolumeValue) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = value
    ? CALL_VOLUME_OPTIONS.find((option) => option.value === value)?.label
    : null;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  return (
    <div ref={containerRef} className="relative min-w-0">
      <button
        type="button"
        id="report-callVolume"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="form-input flex w-full min-w-0 items-center gap-2 text-left disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          className={`min-w-0 flex-1 truncate text-[14px] sm:text-[15px] ${
            selectedLabel ? "text-white" : "text-white/50"
          }`}
        >
          {selectedLabel ?? CALL_VOLUME_QUESTION}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 text-white/50 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby="report-callVolume"
          className="absolute z-30 mt-1 w-full overflow-hidden rounded-[10px] border border-white/12 bg-[#0a0a0a] py-1 shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
        >
          {CALL_VOLUME_OPTIONS.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                className={`w-full px-3.5 py-3 text-left text-[14px] transition-colors hover:bg-white/5 sm:text-[15px] ${
                  value === option.value ? "text-[#abbe9c]" : "text-white"
                }`}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <input
        type="text"
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute opacity-0"
        value={value}
        readOnly
      />
    </div>
  );
}

function downloadReportPdf() {
  const link = document.createElement("a");
  link.href = REPORT_PDF_URL;
  link.download = "True-Cost-Missed-Call-LeadMagnet.pdf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ReportRequestForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [callVolume, setCallVolume] = useState<CallVolumeValue | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!callVolume) {
      setStatus("error");
      setErrorMessage("Please select your inbound call volume.");
      return;
    }

    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          jobTitle: jobTitle.trim(),
          callVolume,
        }),
      });

      const data = (await response.json()) as { error?: string; pdfUrl?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      downloadReportPdf();
      router.push("/thank-you?type=report");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full rounded-[18px] border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="text-[22px] font-medium text-white sm:text-[26px]">
        Get the full report
      </h3>
      <p className="mt-2 text-[14px] text-skadi-muted sm:text-[15px]">
        Enter your details and we&apos;ll email you the industry report — your
        download will start right away.
      </p>

      <form className="mt-6 min-w-0 sm:mt-8" onSubmit={handleSubmit}>
        <div className="mb-[18px] flex flex-col gap-[18px] sm:flex-row sm:gap-4">
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="report-firstName" className="sr-only">
              First Name
            </label>
            <input
              id="report-firstName"
              type="text"
              className="form-input"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={status === "loading"}
              autoComplete="given-name"
            />
          </div>
          <div className="form-group relative min-w-0 flex-1">
            <label htmlFor="report-lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="report-lastName"
              type="text"
              className="form-input"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={status === "loading"}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="form-group relative mb-[18px]">
          <label htmlFor="report-jobTitle" className="sr-only">
            Job Title
          </label>
          <input
            id="report-jobTitle"
            type="text"
            className="form-input"
            placeholder="Operations Manager"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            disabled={status === "loading"}
            autoComplete="organization-title"
          />
        </div>

        <div className="form-group relative mb-[18px] min-w-0">
          <label htmlFor="report-callVolume" className="sr-only">
            {CALL_VOLUME_QUESTION}
          </label>
          <CallVolumeSelect
            value={callVolume}
            onChange={setCallVolume}
            disabled={status === "loading"}
          />
        </div>

        <div className="form-group relative mb-2">
          <label htmlFor="report-email" className="sr-only">
            Work Email
          </label>
          <input
            id="report-email"
            type="email"
            className="form-input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            autoComplete="email"
          />
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-skadi-muted">
          We&apos;ll store and process this information to provide you our
          products and services. You may opt out of this at any time.
        </p>

        {status === "error" && errorMessage && (
          <p className="mt-3 text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn-demo mt-5 w-full py-3.5 sm:py-4 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
