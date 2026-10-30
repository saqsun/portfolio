import { useInView, useReducedMotion } from "motion/react";
import videoFormats from "../../data/VideoFormats.json";
import { selectPreviewSource } from "../../lib/preview-format";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
const connection = () =>
  (navigator as Navigator & { connection?: Connection }).connection;

function subscribeEnvironment(onChange: () => void) {
  const screen = window.matchMedia("(max-width: 639px)");
  const network = connection();
  screen.addEventListener("change", onChange);
  document.addEventListener("visibilitychange", onChange);
  network?.addEventListener("change", onChange);
  return () => {
    screen.removeEventListener("change", onChange);
    document.removeEventListener("visibilitychange", onChange);
    network?.removeEventListener("change", onChange);
  };
}

function getEnvironment() {
  const network = connection();
  if (
    document.hidden ||
    network?.saveData ||
    ["slow-2g", "2g", "3g"].includes(network?.effectiveType ?? "")
  )
    return "poster";
  return window.matchMedia("(max-width: 639px)").matches ? "mobile" : "desktop";
}
const serverEnvironment = () => "poster";

interface Props {
  src: string;
  poster: string;
  title: string;
  href: string;
  landscape: boolean;
}

function PreviewVideo({
  src,
  title,
  onError,
}: {
  src: string;
  title: string;
  onError: () => void;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playbackSrc, setPlaybackSrc] = useState(() =>
    selectPreviewSource(
      src,
      (videoFormats as Record<string, string>)[src],
      navigator.userAgent,
      Boolean(
        document.createElement("video").canPlayType('video/webm; codecs="vp9"'),
      ),
    ),
  );
  const [readySrc, setReadySrc] = useState<string | null>(null);
  const handleFailure = useCallback(() => {
    // A supported codec may still fail to fetch or decode: retry the MP4.
    if (playbackSrc !== src) setPlaybackSrc(src);
    else onError();
  }, [playbackSrc, src, onError]);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let cancelled = false;
    let frame: number | undefined;
    let paint: number | undefined;
    const reveal = () => {
      if (!cancelled) setReadySrc(playbackSrc);
    };
    const onPlaying = () => {
      // Wait for a decoded frame, not just metadata or a resolved play request.
      if (typeof element.requestVideoFrameCallback === "function") {
        if (frame !== undefined) element.cancelVideoFrameCallback(frame);
        frame = element.requestVideoFrameCallback(reveal);
      } else {
        if (paint !== undefined) cancelAnimationFrame(paint);
        paint = requestAnimationFrame(() => {
          paint = requestAnimationFrame(reveal);
        });
      }
    };
    element.addEventListener("playing", onPlaying);
    if (!element.getAttribute("src")) element.src = playbackSrc;
    void element.play().catch(() => {
      if (!cancelled) handleFailure();
    });
    return () => {
      cancelled = true;
      element.removeEventListener("playing", onPlaying);
      if (frame !== undefined) element.cancelVideoFrameCallback(frame);
      if (paint !== undefined) cancelAnimationFrame(paint);
      element.pause();
      // Release decoders and downloads when the preview leaves view.
      element.removeAttribute("src");
      element.load();
    };
  }, [playbackSrc, handleFailure]);

  return (
    <video
      key={playbackSrc}
      ref={video}
      src={playbackSrc}
      muted
      loop
      playsInline
      preload="none"
      width="1200"
      height="700"
      aria-label={`${title} gameplay preview`}
      onError={handleFailure}
      className={`absolute inset-0 size-full object-cover transition-opacity duration-300 motion-reduce:transition-none ${readySrc === playbackSrc ? "opacity-100" : "opacity-0"}`}
    />
  );
}

export function VideoPreview({ src, poster, title, href, landscape }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const visible = useInView(container, { amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const environment = useSyncExternalStore(
    subscribeEnvironment,
    getEnvironment,
    serverEnvironment,
  );
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
          className={`${landscape ? "aspect-[12/7]" : "h-48"} block w-full object-cover`}
        />
        {enabled && (
          <PreviewVideo
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
