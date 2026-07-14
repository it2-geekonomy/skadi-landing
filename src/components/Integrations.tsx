import type { ReactNode } from "react";

type Integration = {
  name: string;
  category: string;
  icon: ReactNode;
};

function GoogleCalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path fill="#4285F4" d="M22 10.5V6a2 2 0 0 0-2-2h-2.5V2h-1.5v2H8V2H6.5v2H4a2 2 0 0 0-2 2v4.5z" />
      <path fill="#EA4335" d="M2 10.5V20a2 2 0 0 0 2 2h6.5v-11.5z" />
      <path fill="#FBBC04" d="M10.5 22H20a2 2 0 0 0 2-2v-9.5H10.5z" />
      <path fill="#34A853" d="M10.5 10.5H22V6a2 2 0 0 0-.2-.85L10.5 10.5z" />
      <text x="12" y="17.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial,sans-serif">
        31
      </text>
    </svg>
  );
}

function CalendlyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path
        fill="#006BFF"
        d="M18.5 3.5h-1.75V2h-1.5v1.5h-6.5V2h-1.5v1.5H5.5A2.5 2.5 0 0 0 3 6v12.5A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5zm1 15a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V9.5h15V18.5z"
      />
      <circle cx="8.25" cy="13.25" r="1.15" fill="#006BFF" />
      <circle cx="12" cy="13.25" r="1.15" fill="#006BFF" />
      <circle cx="15.75" cy="13.25" r="1.15" fill="#006BFF" />
      <circle cx="8.25" cy="16.75" r="1.15" fill="#006BFF" />
      <circle cx="12" cy="16.75" r="1.15" fill="#006BFF" />
    </svg>
  );
}

function HubSpotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path
        fill="#FF7A59"
        d="M17.2 12.1a2.85 2.85 0 0 0-1.5.45l-2.2-1.7V7.9a2.1 2.1 0 1 0-1.2 0v3.3l-2.15 1.65a2.85 2.85 0 1 0 .75 1.1l2.1-1.6 2.15 1.65a2.85 2.85 0 1 0 2.05-3.3zM9.5 16.2a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zm3.5-9.9a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zm4.2 11.05a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7z"
      />
    </svg>
  );
}

function SalesforceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path
        fill="#00A1E0"
        d="M10.1 6.2c.7-1.2 2-2 3.5-2 1.4 0 2.65.75 3.35 1.9.7-.35 1.5-.55 2.35-.55C22 5.55 24 7.55 24 10c0 2.45-2 4.45-4.45 4.45h-.1c-.45 1.75-2.05 3.05-3.95 3.05-.7 0-1.35-.2-1.95-.5-.7 1.35-2.1 2.25-3.7 2.25-1.25 0-2.35-.55-3.1-1.45C5.95 18.5 4.7 19 3.3 19 1.5 19 0 17.5 0 15.7c0-1.15.6-2.15 1.5-2.75C1.15 12.3.9 11.6.9 10.85c0-2.15 1.75-3.9 3.9-3.9.75 0 1.45.2 2.05.55.7-1.4 2.15-2.35 3.85-2.35.5 0 1 .1 1.4.3z"
      />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path fill="#E01E5A" d="M5.5 15.05a2.25 2.25 0 1 1-2.25-2.25h2.25v2.25zm1.13 0a2.25 2.25 0 1 1 4.5 0v5.62a2.25 2.25 0 1 1-4.5 0v-5.62z" />
      <path fill="#36C5F0" d="M8.88 5.5a2.25 2.25 0 1 1 2.25-2.25v2.25H8.88zm0 1.13a2.25 2.25 0 1 1 0 4.5H3.26a2.25 2.25 0 1 1 0-4.5h5.62z" />
      <path fill="#2EB67D" d="M18.5 8.88a2.25 2.25 0 1 1 2.25 2.25h-2.25V8.88zm-1.13 0a2.25 2.25 0 1 1-4.5 0V3.26a2.25 2.25 0 1 1 4.5 0v5.62z" />
      <path fill="#ECB22E" d="M15.12 18.5a2.25 2.25 0 1 1-2.25 2.25v-2.25h2.25zm0-1.13a2.25 2.25 0 1 1 0-4.5h5.62a2.25 2.25 0 1 1 0 4.5h-5.62z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.88 14.24c-.23.66-1.18 1.2-1.91 1.36-.5.11-1.15.2-3.34-.72-2.8-1.17-4.6-4.05-4.74-4.24-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36h.55c.17 0 .41-.06.64.49.23.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.28 2.3 1.42.28.14.44.12.61-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.64-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.69-.16 1.35z"
      />
    </svg>
  );
}

function ZapierIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <path
        fill="#FF4A00"
        d="M12 2.2 14.3 8.1l5.9-.3-4.6 3.75 1.95 5.7L12 14.5l-5.55 2.75 1.95-5.7L3.8 7.8l5.9.3L12 2.2z"
      />
      <circle cx="12" cy="12" r="2.2" fill="#FF4A00" />
    </svg>
  );
}

function GoHighLevelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#F9C846" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="9"
        fontWeight="800"
        fontFamily="Arial,sans-serif"
      >
        GHL
      </text>
    </svg>
  );
}

const integrations: Integration[] = [
  { name: "Google Calendar", category: "Calendar", icon: <GoogleCalendarIcon /> },
  { name: "Calendly", category: "Calendar", icon: <CalendlyIcon /> },
  { name: "HubSpot", category: "CRM", icon: <HubSpotIcon /> },
  { name: "Salesforce", category: "CRM", icon: <SalesforceIcon /> },
  { name: "Slack", category: "Comms", icon: <SlackIcon /> },
  { name: "WhatsApp", category: "Comms", icon: <WhatsAppIcon /> },
  { name: "Zapier", category: "Automation", icon: <ZapierIcon /> },
  { name: "GoHighLevel", category: "CRM", icon: <GoHighLevelIcon /> },
];

export default function Integrations() {
  return (
    <section id="integrations" className="section-pad bg-black">
      <div className="container-main">
        <div className="mb-12 text-center sm:mb-14">
          <div className="badge mx-auto border border-white/[0.06]">
            <span className="badge-dot" />
            Integrations
          </div>
          <h2 className="mt-5 text-[30px] font-normal leading-[1.15] tracking-[-1px] sm:text-[38px] lg:text-[42px]">
            Plugs into the tools{" "}
            <span className="serif-italic gradient-serif">you already use.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-skadi-muted sm:text-base">
            Calendars, CRMs, and messaging — Skadi syncs with your stack so
            leads and bookings land where your team already works.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0c120a]/60 px-4 py-6 text-center transition duration-200 hover:border-[#6e964f]/35 hover:bg-[#0c120a]"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.06]">
                {item.icon}
              </div>
              <p className="text-[14px] font-medium text-white sm:text-[15px]">
                {item.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-skadi-muted">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
