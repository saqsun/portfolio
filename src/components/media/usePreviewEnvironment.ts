import { useSyncExternalStore } from "react";

type NetworkConnection = EventTarget & {
  saveData?: boolean;
  effectiveType?: string;
};
const getConnection = () =>
  (navigator as Navigator & { connection?: NetworkConnection }).connection;

function subscribeEnvironment(onChange: () => void) {
  const mediaQuery = window.matchMedia("(max-width: 639px)");
  const network = getConnection();
  mediaQuery.addEventListener("change", onChange);
  document.addEventListener("visibilitychange", onChange);
  network?.addEventListener("change", onChange);
  return () => {
    mediaQuery.removeEventListener("change", onChange);
    document.removeEventListener("visibilitychange", onChange);
    network?.removeEventListener("change", onChange);
  };
}

type PreviewEnvironment = "poster" | "mobile" | "desktop";

function getEnvironment(): PreviewEnvironment {
  const network = getConnection();
  if (
    document.hidden ||
    network?.saveData ||
    ["slow-2g", "2g", "3g"].includes(network?.effectiveType ?? "")
  )
    return "poster";
  return window.matchMedia("(max-width: 639px)").matches ? "mobile" : "desktop";
}
const serverEnvironment = (): PreviewEnvironment => "poster";

export function usePreviewEnvironment() {
  return useSyncExternalStore(
    subscribeEnvironment,
    getEnvironment,
    serverEnvironment,
  );
}
