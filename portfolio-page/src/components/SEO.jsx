import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "Yogesh Bhavsar | Senior Frontend Engineer & Technical Architect";
const DEFAULT_DESCRIPTION = "Senior Frontend Engineer & Technical Architect with 7+ years of experience in React, Next.js, and scalable UI architecture. Available for web development, freelance frontend engineering, and performance consulting.";
const SITE_URL = "https://yogeshbhavsar.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const basePersonSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Yogesh Bhavsar",
  "url": `${SITE_URL}/`,
  "image": `${SITE_URL}/YogeshBhavsar.png`,
  "jobTitle": "Senior Frontend Engineer & Technical Architect",
  "description": "Senior Frontend Engineer with 7+ years of experience building scalable, high-performance web applications using React, Next.js, and modern frontend architecture.",
  "worksFor": {
    "@type": "Organization",
    "name": "Millipixels Interactive (Reach Plc)",
    "url": "https://www.reachplc.com/"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "North Maharashtra University",
    "url": "http://nmu.ac.in/"
  },
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Architecture",
    "Core Web Vitals Optimization",
    "Design Systems",
    "Small Business Web Development",
    "TailwindCSS",
    "Accessibility (WCAG)"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/yogeshbhavsarui",
    "https://github.com/yogeshu",
    "https://twitter.com/Yogesh04rock",
    "https://www.instagram.com/the.makhanchor",
    "https://consult.yogeshbhavsar.com/"
  ],
  "subjectOf": {
    "@type": "CreativeWork",
    "name": "Love, Loss and Life",
    "url": "https://makhanchor.in/"
  }
};

const baseWebsiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": "Yogesh Bhavsar — Senior Frontend Engineer & Technical Architect",
  "description": "Portfolio and engineering services of Yogesh Bhavsar, specializing in React, Next.js, and frontend architecture.",
  "publisher": { "@id": `${SITE_URL}/#person` },
  "inLanguage": "en-US"
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
  keywords,
  noindex = false,
}) => {
  const metaTitle = title;
  const metaDescription = description;
  const canonicalUrl = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;
  const effectiveOgTitle = ogTitle || metaTitle;
  const effectiveOgDesc = ogDescription || metaDescription;
  const effectiveOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const graphItems = [basePersonSchema, baseWebsiteSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      graphItems.push(...schema);
    } else {
      graphItems.push(schema);
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graphItems,
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={effectiveOgTitle} />
      <meta property="og:description" content={effectiveOgDesc} />
      <meta property="og:image" content={effectiveOgImage} />
      <meta property="og:site_name" content="Yogesh Bhavsar" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={effectiveOgTitle} />
      <meta name="twitter:description" content={effectiveOgDesc} />
      <meta name="twitter:image" content={effectiveOgImage} />
      <meta name="twitter:creator" content="@Yogesh04rock" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
