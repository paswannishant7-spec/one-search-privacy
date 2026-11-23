import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

const productionUrl = siteConfig.productionUrl ? new URL(siteConfig.productionUrl) : undefined;

export const metadata: Metadata = {
  metadataBase: productionUrl,
  title: {
    default: "One Search Privacy",
    template: "%s · One Search",
  },
  description:
    "A transparent, readable privacy center for One Search, including policy disclosures, privacy rights, and account-deletion guidance.",
  applicationName: "One Search Privacy",
  robots: siteConfig.publicationReady
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    title: "One Search Privacy",
    description: "Understand how One Search is preparing to handle data, creative media, and AI.",
    type: "website",
    images: productionUrl
      ? [{ url: "/one-search-logo.jpg", width: 512, height: 512, alt: "One Search" }]
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff982b",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
