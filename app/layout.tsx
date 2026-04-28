import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | TideGuard",
    default: "TideGuard — Coastal Climate Risk in Fiji",
  },
  description:
    "A clean, modern educational website about coastal climate risk, resilience, and adaptation in Fiji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="site-background" aria-hidden="true">
          <div className="site-background__gradient site-background__gradient--one" />
          <div className="site-background__gradient site-background__gradient--two" />
          <div className="site-background__grid" />
          <div className="site-background__vignette" />
        </div>

        <Navbar />
        <div className="page-wrap">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
