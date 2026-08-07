export interface Project {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;
  readonly targetUrl: string;
  readonly accentColor: string;
  readonly isHigh: boolean;
  readonly isWide: boolean;
}

function resolveUrl(url: string) {
  return url.startsWith("/") || /^https?:\/\//.test(url) ? url : `/${url}`;
}

function resolveTargetUrl(url: string) {
  const resolvedUrl = resolveUrl(url);

  return resolvedUrl.startsWith("/projects/") && resolvedUrl.endsWith("/")
    ? `${resolvedUrl}index.html`
    : resolvedUrl;
}

export function project(
  id: string,
  name: string,
  iconUrl: string,
  targetUrl: string,
  accentColor = "#000000",
  isHigh = false,
  isWide = false,
): Project {
  return {
    id,
    name,
    iconUrl: resolveUrl(iconUrl),
    targetUrl: resolveTargetUrl(targetUrl),
    accentColor,
    isHigh,
    isWide,
  };
}
