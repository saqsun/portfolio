import mixpanel from "mixpanel-browser";

export function initializeAnalytics() {
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
  });
}
