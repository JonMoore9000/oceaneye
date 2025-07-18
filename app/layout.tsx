import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "OceanEye - Live Ocean Feeds",
  description: "Explore real-time underwater camera feeds from ocean research vessels, aquariums, and reefs around the world. Discover marine life and learn about ocean ecosystems.",
  keywords: "ocean, marine life, live feeds, underwater cameras, ocean exploration, marine biology, coral reefs, deep sea",
  authors: [{ name: "OceanEye Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891b2",
  openGraph: {
    title: "OceanEye - Live Ocean Feeds",
    description: "Dive into the depths of our oceans through live underwater camera feeds from around the world",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OceanEye - Live Ocean Feeds",
    description: "Explore real-time underwater camera feeds from around the world",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
