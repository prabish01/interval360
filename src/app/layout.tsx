import type { Metadata } from "next";
import { Montserrat, Poppins, Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LayoutShell from "@/components/LayoutShell";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interval360.com"),
  title: "Interval 360 — AI-Driven 360° Leadership Feedback",
  description:
    "Interval 360 uses conversational AI to gather better leadership feedback with less burden, then turns it into concise, actionable insight for development and talent decisions.",
  openGraph: {
    title: "Interval 360 — AI-Driven 360° Leadership Feedback",
    description:
      "Interval 360 uses conversational AI to gather better leadership feedback with less burden, then turns it into concise, actionable insight for development and talent decisions.",
    url: "https://interval360.com",
    siteName: "Interval 360",
    images: [
      {
        url: "/interval360-og-image.png",
        width: 1200,
        height: 630,
        alt: "Interval 360 — AI-Driven 360° Leadership Feedback",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interval 360 — AI-Driven 360° Leadership Feedback",
    description:
      "Interval 360 uses conversational AI to gather better leadership feedback with less burden, then turns it into concise, actionable insight for development and talent decisions.",
    images: ["/interval360-og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(montserrat.variable, poppins.variable, inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}>

      <body className="min-h-screen w-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
