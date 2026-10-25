import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#EDF1E9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Yogesh Bhavsar — Senior Frontend Engineer & Product Builder",
    template: "%s | Yogesh Bhavsar",
  },
  description: siteConfig.description,
  keywords: [
    "Senior Frontend Engineer",
    "Frontend Architect",
    "Next.js Consultant",
    "React Specialist",
    "Core Web Vitals Optimization",
    "Performance Audit",
    "Fractional Frontend Architect",
    "Product Builder",
    "India",
  ],
  authors: [{ name: "Yogesh Bhavsar", url: siteConfig.url }],
  creator: "Yogesh Bhavsar",
  publisher: "Yogesh Bhavsar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Yogesh Bhavsar",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Yogesh Bhavsar — Senior Frontend Engineer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Yogesh04rock",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.avatarImage}`,
        jobTitle: siteConfig.role,
        worksFor: {
          "@type": "Organization",
          name: "MilliPixels Interactive (Reach Plc)",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "Frontend Architecture",
          "Web Performance Optimization",
          "Core Web Vitals",
          "TypeScript",
          "Product Engineering",
        ],
        sameAs: [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.twitter,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Yogesh Bhavsar — Senior Frontend Engineer & Product Builder",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics GA4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics.gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#EDF1E9] text-[#17201C] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
