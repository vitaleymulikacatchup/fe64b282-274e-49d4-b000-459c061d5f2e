import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — fun memecoin landing with a community vibe",
  description: "MemePulse delivers a playful memecoin landing with clear steps to buy, simple tokenomics, and a vibrant community vibe.",
  keywords: ["memecoin","cryptocurrency","buy memecoin","tokenomics","community","landing","meme","crypto meme","memecoin launch","crypto"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MemePulse — fun memecoin landing with a community vibe",
    description: "MemePulse delivers a playful memecoin landing with clear steps to buy, simple tokenomics, and a vibrant community vibe.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758885637835-540af468.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse — fun memecoin landing with a community vibe"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — fun memecoin landing with a community vibe",
    description: "MemePulse delivers a playful memecoin landing with clear steps to buy, simple tokenomics, and a vibrant community vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758885637835-540af468.jpg"]
  },
  robots: { index: true, follow: true },
  icons: { url: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
