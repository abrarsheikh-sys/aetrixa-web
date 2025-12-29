import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}

export function generateSEO({ title, description, image, type = "website" }: SEOProps): Metadata {
  const siteName = "AETRIXA";
  const defaultImage = "https://aetrixa.com/og-luxury-default.jpg";

  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type,
      siteName,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image || defaultImage],
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
}