import { useCallback, useEffect, useRef, useState } from "react";
import { getPreviewSource } from "#lib/preview-format";
import { cn } from "#lib/utils";

interface VideoPlaybackProps {
  /** Original MP4 URL, also used if the preferred WebM fails. */
  src: string;
  title: string;
  /** Called when MP4 also fails, so the parent can keep showing the poster. */
  onError: () => void;
}

/**
 * Plays one visible preview over its poster. The parent mounts this component
 * only when playback is allowed and remounts it when the source changes.
 * The video stays transparent until its first decoded frame is ready.
 */
export function VideoPlayback({ src, title, onError }: VideoPlaybackProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSource, setActiveSource] = useState(() => getPreviewSource(src));
  const [revealedSource, setRevealedSource] = useState<string | null>(null);
  const isFrameReady = revealedSource === activeSource;

  const handlePlaybackFailure = useCallback(() => {
    if (activeSource === src) {
      onError();
      return;
    }

    // Codec support does not guarantee a successful download or decode.
    // Retry with MP4; Safari already starts with this source.
    setActiveSource(src);
  }, [activeSource, src, onError]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    return startPlayback(
      video,
      activeSource,
      () => setRevealedSource(activeSource),
      handlePlaybackFailure,
    );
  }, [activeSource, handlePlaybackFailure]);

  return (
    <video
      key={activeSource}
      ref={videoRef}
      src={activeSource}
      muted
      loop
      playsInline
      preload="none"
      width="1200"
      height="700"
      aria-label={`${title} gameplay preview`}
      onError={handlePlaybackFailure}
      className={cn(
        "absolute inset-0 size-full object-cover transition-opacity duration-300 motion-reduce:transition-none",
        isFrameReady ? "opacity-100" : "opacity-0",
      )}
    />
  );
}

/** Starts a playback session and returns its complete teardown function. */
function startPlayback(
  video: HTMLVideoElement,
  source: string,
  onFrameReady: () => void,
  onFailure: () => void,
) {
  let stopped = false;
  let cancelPendingFrame: (() => void) | undefined;

  function handlePlaying() {
    cancelPendingFrame?.();
    cancelPendingFrame = waitForPaintedFrame(video, () => {
      if (!stopped) onFrameReady();
    });
  }

  video.addEventListener("playing", handlePlaying);

  // Effect cleanup removes src. Restore it if React restarts the effect.
  if (!video.getAttribute("src")) video.src = source;

  void video.play().catch(() => {
    // Unmounting can reject an outstanding play request; ignore that failure.
    if (!stopped) onFailure();
  });

  return () => {
    stopped = true;
    video.removeEventListener("playing", handlePlaying);
    cancelPendingFrame?.();
    video.pause();

    // Pause alone keeps downloads and decoder resources alive.
    video.removeAttribute("src");
    video.load();
  };
}

/**
 * A playing event can arrive before a frame is visible. Wait for a decoded
 * frame to avoid flashing black over the poster. Older browsers without the
 * video-frame API get two animation frames as a best-effort paint delay.
 */
function waitForPaintedFrame(video: HTMLVideoElement, onReady: () => void) {
  if (typeof video.requestVideoFrameCallback === "function") {
    const frameId = video.requestVideoFrameCallback(onReady);
    return () => video.cancelVideoFrameCallback(frameId);
  }

  let frameId = requestAnimationFrame(() => {
    frameId = requestAnimationFrame(onReady);
  });
  return () => cancelAnimationFrame(frameId);
}
