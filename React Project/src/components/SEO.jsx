import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yogeshbhavsar.com/",
        "name": "Yogesh Bhavsar",
        "url": "https://yogeshbhavsar.com",
        "image": "https://yogeshbhavsar.com/YogeshBhavsar.png",
        "jobTitle": "Senior Frontend Engineer / React Architect",
        "description":
          "Senior Frontend Engineer with 8+ years of experience building scalable, high-performance web applications using React, Next.js, and modern frontend architecture. Focused on product thinking, performance, and long-term maintainability.",
        "sameAs": [
          "https://www.linkedin.com/in/yogeshbhavsarui",
          "https://github.com/yogeshu"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Millipixels Interactive",
          "url": "https://www.millipixels.com/"
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
          "Web Performance Optimization",
          "Design Systems",
          "SEO for SPAs",
          "Accessibility (WCAG)",
          "Scalable UI Systems"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://yogeshbhavsar.com/#website",
        "url": "https://yogeshbhavsar.com",
        "name": "Yogesh Bhavsar — Senior Frontend Engineer & React Architect",
        "publisher": {
          "@id": "https://yogeshbhavsar.com/#person"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>
        Yogesh Bhavsar | Senior Frontend Engineer & React Architect
      </title>
      <meta
        name="description"
        content="Senior Frontend Engineer with 8+ years of experience in React, Next.js, and scalable UI architecture. I build fast, accessible, and maintainable web products."
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Yogesh Bhavsar — Senior Frontend Engineer & React Architect" />
      <meta
        property="og:description"
        content="I design and build high-performance frontend systems using React, Next.js, and modern web architecture."
      />
      <meta property="og:url" content="https://yogeshbhavsar.com" />
      <meta property="og:image" content="https://yogeshbhavsar.com/avatar.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Yogesh Bhavsar — Senior Frontend Engineer" />
      <meta
        name="twitter:description"
        content="Frontend architect specializing in React, Next.js, performance, and scalable UI systems."
      />
      <meta name="twitter:image" content="https://yogeshbhavsar.com/YogeshBhavsar.png" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
