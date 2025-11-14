import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  description: "Full-Stack Developer working with Nextjs, Typescript, Tailwind CSS, sometimes i work with WP, Flutter.",
  keywords: "full-stack developer, full stack developer, web developer, portfolio, pixel art, pixel portfolio, web architecture, Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, Erbil, Hawler, Slemani, Suly, Duhok, Kurd, Kurdish, Kurdi, Kurdistan, Bashur, Rojhalat, Bakur, Rojava, Dyari Ali, Dyari Ali Taher, Dyari Ali Tahir, Dyari Ale Taher, Dyari Ale Tahir, Dyari, SHIN尾, Death Tail, Lin, Ling, LinGREED, Deare, Diyare, Diyare Ali, Diyare Ale, Diyare Ali Taher, Diyare Ali Tahir, Diyare Ale Taher, Diyare Ale Tahir",
  creator: "Dyari Ali Tahir",
  openGraph: {
    title: "Dyari Ali Tahir",
    description: "Full-Stack Developer working with Nextjs, Typescript, Tailwind CSS, sometimes i work with WP, Flutter.",
    url: "https://dyariali.com",
    siteName: "Dyari Ali Tahir Portfolio",
    images: [
      {
        url: "https://dyariali.com/images/OGBanner.webp",
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
    description: "Full-Stack Developer working with Nextjs, Typescript, Tailwind CSS, sometimes i work with WP, Flutter.",
    site: "@dyariali",
    creator: "@death_tail0331",
    images: [
      "https://dyariali.com/images/OGBanner.webp",
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e5e7f2" />


        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dyari Ali",
              "url": "https://death-tail.vercel.app",
              "sameAs": [
                "https://github.com/Death-Tail",
                "https://www.linkedin.com/in/dyarialitahir/",
                "https://discord.com/users/death_tail",
                "https://x.com/Death_Tail0331",
                "https://www.instagram.com/dyari_ali_taher/"
              ]
            })
          }}
        />
      </head>
      <body className={`${pressStart2P.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
