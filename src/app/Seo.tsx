"use client";

import { useEffect, useState } from "react";

const Seo = () => {
  const [canonicalUrl, setCanonicalUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_WEBSITE_URL) {
      const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
      const path = window.location.pathname.slice(1);
      setCanonicalUrl(`${baseUrl}${path}`);
    }
  }, []);

  if (!canonicalUrl) return null;

  return <link rel="canonical" href={canonicalUrl} />;
};

export default Seo;
