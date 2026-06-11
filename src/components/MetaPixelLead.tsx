import Script from "next/script";

/** Fires Lead on thank-you — retries until fbq is ready (matches manager's snippet). */
export function MetaPixelLead() {
  return (
    <Script id="meta-pixel-lead" strategy="afterInteractive">
      {`(function retryLead(attempt) {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
    return;
  }
  if (attempt < 40) {
    setTimeout(function () { retryLead(attempt + 1); }, 100);
  }
})(0);`}
    </Script>
  );
}
