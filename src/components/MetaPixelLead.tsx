"use client";

import { useEffect } from "react";

export function MetaPixelLead() {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return null;
}
