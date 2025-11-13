import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google"
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dyari Ali Tahir",
  authors: [{ name: "Dyari Ali Tahir", url: "https://dyariali.com" }],
  applicationName: "Dyari Ali Tahir Portfolio",
  generator: "Next.js",
  metadataBase: new URL("https://dyariali.com"),
  referrer: "origin-when-cross-origin",
  description: "Full-stack developer specializing in Next.js ecosystem and modern web architecture.",
  keywords: "full-stack, developer, portfolio, cyberpunk, web architecture , Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, erbil, hawler, death tail, SHIN尾, dyari ali, dyari ali taher, dyari",
  creator: "Dyari Ali Tahir",
  openGraph: {
    title: "Dyari Ali Tahir",
    description: "Full-stack developer specializing in Next.js ecosystem and modern web architecture.",
    url: "https://dyariali.com",
    siteName: "Dyari Ali Tahir Portfolio",
    images: [
      {
        url: "https://dyariali.com/OG.webp",
        width: 3000,
        height: 2000,
        alt: "Dyari Ali Tahir Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyari Ali Tahir",
    description: "Full-stack developer specializing in Next.js ecosystem and modern web architecture.",
    site: "@dyariali",
    creator: "@death_tail0331",
    images: [
      "https://dyariali.com/OG.webp",
    ],
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
