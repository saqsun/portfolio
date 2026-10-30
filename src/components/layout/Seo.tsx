import { useEffect } from "react";
import { useLocation } from "react-router";
import routeMetadata from "../../data/RouteMetadata.json";

type PageMetadata = {
  title: string;
  description: string;
  indexable: boolean;
};

const metadataByPath: Record<string, PageMetadata> = routeMetadata;

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
    const normalizedPath =
      pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;
    const metadata = metadataByPath[normalizedPath] ?? metadataByPath["/404/"];
    const isNotFound = !metadata.indexable;
    const canonicalUrl = `${productionUrl}${normalizedPath}`;
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
