export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iram Mahmood",
    "jobTitle": "SEO Expert & Digital Marketing Specialist",
    "url": window.location.origin,
    "sameAs": [
      "https://linkedin.com/in/irammahmood", // Placeholders
      "https://twitter.com/irammahmood"
    ],
    "knowsAbout": [
      "Search Engine Optimization",
      "Digital Marketing",
      "Google Analytics 4",
      "Google Tag Manager",
      "Keyword Research",
      "Technical SEO"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
