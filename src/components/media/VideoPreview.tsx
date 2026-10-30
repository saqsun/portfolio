import { useInView, useReducedMotion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { VideoPlayback } from "./VideoPlayback";
import { usePreviewEnvironment } from "./usePreviewEnvironment";

interface VideoPreviewProps {
  src: string;
  poster: string;
  title: string;
  href: string;
  landscape: boolean;
}

export function VideoPreview({
  src,
  poster,
  title,
  href,
  landscape,
}: VideoPreviewProps) {
  const container = useRef<HTMLDivElement>(null);
  const visible = useInView(container, { amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const environment = usePreviewEnvironment();
  const [failed, setFailed] = useState(false);
  const handleError = useCallback(() => setFailed(true), []);
  const enabled =
    reducedMotion === false && !failed && environment !== "poster" && visible;
  const videoSrc =
    environment === "mobile" ? src.replace(/\.mp4$/, ".mobile.mp4") : src;

  return (
    <div ref={container} className="relative">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Play ${title}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      >
        <img
          src={poster}
          alt={`${title} preview`}
          width="1200"
          height="700"
          loading="lazy"
          decoding="async"
          className={`${landscape ? "aspect-12/7" : "h-48"} block w-full object-cover`}
        />
        {enabled && (
          <VideoPlayback
            key={videoSrc}
            src={videoSrc}
            title={title}
            onError={handleError}
          />
        )}
      </a>
    </div>
  );
}
