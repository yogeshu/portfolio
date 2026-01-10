
const JsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yogesh Bhavsar",
    "url": "https://consult.yogeshbhavsar.com",
    "image": "https://consult.yogeshbhavsar.com/og-image.svg",
    "jobTitle": "Senior Frontend Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    },
    "description": "Specialist React & Next.js developer building high-performance web applications and MVPs.",
    "sameAs": [
      "https://linkedin.com/in/yogeshbhavsarui",
      "https://github.com/yogeshu",
      // Add your other social links here
      "https://www.amazon.in/Love-Loss-Life-Yogesh-Bhavsar-ebook/dp/B0DX2JYDK8/"
    ],
    "knowsAbout": ["React", "Next.js", "Web Performance", "JavaScript", "MVP Development"],
    "author": {
        "@type": "Book",
        "name": "Love, Loss, and Life"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JsonLd;