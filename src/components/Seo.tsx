import { useEffect } from "react";
import { useLocation } from "react-router";

type PageMetadata = {
  title: string;
  description: string;
};

const defaultMetadata: PageMetadata = {
  title: import.meta.env.VITE_TITLE,
  description: import.meta.env.VITE_DESCRIPTION,
};

const metadataByPath: Record<string, PageMetadata> = {
  "/": defaultMetadata,
  "/games": {
    title: "HTML5 Games | Sargis Sargsyan",
    description:
      "Selected HTML5 games built or heavily contributed to by Senior / Lead Game Engineer Sargis Sargsyan.",
  },
  "/ads": {
    title: "Playable Ads | Sargis Sargsyan",
    description:
      "Selected playable ads built or heavily contributed to by Senior / Lead HTML5 Game Engineer Sargis Sargsyan.",
  },
  "/resume": {
    title: "Resume | Sargis Sargsyan",
    description:
      "Experience, technical skills, leadership background, and downloadable resumes for Senior / Lead Engineer Sargis Sargsyan.",
  },
  "/contact": {
    title: "Contact | Sargis Sargsyan",
    description:
      "Contact Sargis Sargsyan about Senior and Lead opportunities in HTML5 games, interactive products, and frontend platforms.",
  },
  "/404": {
    title: "Page Not Found | Sargis Sargsyan",
    description: "The requested page could not be found.",
  },
};

const productionUrl = import.meta.env.VITE_PRODUCTION_URL.replace(/\/$/, "");

function updateMeta(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.content = content;
  }
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = metadataByPath[pathname] ?? metadataByPath["/404"];
    const isNotFound = pathname === "/404" || !(pathname in metadataByPath);
    const canonicalUrl = `${productionUrl}${pathname === "/" ? "/" : pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    document.title = metadata.title;
    updateMeta('meta[name="description"]', metadata.description);
    updateMeta(
      'meta[name="robots"]',
      isNotFound ? "noindex, nofollow" : "index, follow",
    );
    updateMeta('meta[property="og:title"]', metadata.title);
    updateMeta('meta[property="og:description"]', metadata.description);
    updateMeta('meta[property="og:url"]', canonicalUrl);
    updateMeta('meta[name="twitter:title"]', metadata.title);
    updateMeta('meta[name="twitter:description"]', metadata.description);

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }

    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
