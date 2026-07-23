"use client";

import { useEffect, useRef, useState } from "react";
import { CALL_VOLUME_OPTIONS, type CallVolumeValue } from "@/lib/report";

export const CALL_VOLUME_QUESTION =
  "What is your average total inbound call volume per month?";

export function CallVolumeSelect({
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
        id="callVolume-select"
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
          aria-labelledby="callVolume-select"
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
