let isScheduled = false;

async function initializeAnalytics() {
  const { default: mixpanel } = await import("mixpanel-browser");

  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
  });
}

export function scheduleAnalytics() {
  if (isScheduled) {
    return;
  }

  isScheduled = true;

  const initialize = () => {
    void initializeAnalytics().catch(() => undefined);
  };

  if (requestIdleCallback) {
    requestIdleCallback(initialize, { timeout: 2000 });
  } else {
    setTimeout(initialize, 0);
  }
}
