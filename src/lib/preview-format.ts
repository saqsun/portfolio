import videoFormats from "#data/media/video-formats.json";

// Keep Safari and iOS browsers on the existing H.264 playback path.
export function selectPreviewSource(
  mp4: string,
  webm: string | undefined,
  userAgent: string,
  supportsVp9: boolean,
) {
  const isAppleBrowser =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (/Safari/.test(userAgent) &&
      !/Chrome|Chromium|Android|Edg|OPR/.test(userAgent));
  return webm && supportsVp9 && !isAppleBrowser ? webm : mp4;
}

export function getPreviewSource(mp4: string) {
  const webm = (videoFormats as Record<string, string>)[mp4];
  const supportsVp9 = Boolean(
    document.createElement("video").canPlayType('video/webm; codecs="vp9"'),
  );

  return selectPreviewSource(mp4, webm, navigator.userAgent, supportsVp9);
}
