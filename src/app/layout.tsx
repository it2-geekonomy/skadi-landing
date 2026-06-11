import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/GoogleTagManager";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SKADI — AI Voice Agent",
  description:
    "Skadi answers every call, qualifies leads, and books appointments automatically — 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className={`${jakarta.variable} font-jakarta antialiased`}>
        <GoogleTagManagerBody />
        {children}
      </body>
    </html>
  );
}
