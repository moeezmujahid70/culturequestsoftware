import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Culture Quest | Culture Operating System for Teams",
  description:
    "Culture Quest gives your team a visible, human-led blueprint for how you work — covering decisions, behaviors, reinforcement, ownership, and improvement.",
  metadataBase: new URL("https://culturequestsoftware.net"),
  openGraph: {
    title: "Culture Quest | Culture Operating System",
    description: "Design how your team works, intentionally.",
    url: "https://culturequestsoftware.net",
    siteName: "Culture Quest Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable}`}
    >
      <body className="font-body text-charcoal bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
