import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { shop } from "@/content/site";
import "./globals.css";

const serif = localFont({
  src: "./fonts/newsreader-var.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const sans = localFont({
  src: [
    { path: "./fonts/jost-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jost-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/jost-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

/* The rounded face from the Trust Island logo, for the wordmark only. */
const rounded = localFont({
  src: "./fonts/nunito-800.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-rounded",
  display: "swap",
});

/*
 * Runs before first paint. Marks JS as available, so scroll reveals can start
 * hidden, and decides whether the hero plays its "power comes back" opening.
 * It plays once per browser session and never with reduced motion or a deep
 * link (#section). Add ?intro to the URL to force it again when presenting.
 */
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var force=/[?&]intro\\b/.test(location.search);var skip=window.matchMedia('(prefers-reduced-motion: reduce)').matches||(!force&&(location.hash.length>1||sessionStorage.getItem('ti-intro')));if(skip){d.classList.add('intro-skip')}else{sessionStorage.setItem('ti-intro','1')}}catch(e){d.classList.add('intro-skip')}})();`;

const title = "Trust Island | Authorized itel Energy dealer in Computer Village, Ikeja";
const description =
  "Trust Island sells, installs and supports genuine itel Energy power stations, inverters and solar panels, plus new phones and tablets from Infinix, Redmi, Tecno, Samsung and more. Visit us in Computer Village, Ikeja, or call for today’s price.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  applicationName: shop.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: shop.name, locale: "en_NG", title, description },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${serif.variable} ${sans.variable} ${rounded.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
