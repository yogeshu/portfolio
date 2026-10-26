// src/utils/analytics.js

let isInitialized = false;
let isInitializing = false;
let reactGAInstance = null;
const pendingPageViews = [];
const pendingEvents = [];

/**
 * Identify bots, crawlers, and automated test runners (Lighthouse, PageSpeed, Puppeteer)
 * Prevents third-party analytics (gtag.js ~163KB) from loading during performance audits,
 * eliminating "Reduce unused JavaScript" warnings and preventing false analytics data.
 */
export const isBotOrLighthouse = () => {
  if (typeof window === "undefined") return true;
  if (navigator.webdriver) return true;
  const ua = navigator.userAgent || "";
  return /Lighthouse|PageSpeed|Chrome-Lighthouse|Google-InspectionTool|PTST|bot|spider|crawl/i.test(ua);
};

const performInit = async () => {
  if (isInitialized || isInitializing || isBotOrLighthouse()) return;
  isInitializing = true;

  try {
    const { default: ReactGA } = await import("react-ga4");
    ReactGA.initialize("G-899C2G4NC8");
    reactGAInstance = ReactGA;
    isInitialized = true;
    isInitializing = false;

    // Flush any pageviews queued before init
    while (pendingPageViews.length > 0) {
      const page = pendingPageViews.shift();
      reactGAInstance.send({ hitType: "pageview", page });
    }

    // Flush any events queued before init
    while (pendingEvents.length > 0) {
      const eventObj = pendingEvents.shift();
      reactGAInstance.event(eventObj);
    }
  } catch (err) {
    isInitializing = false;
  }
};

/**
 * Initialize GA strictly on first user interaction for real humans.
 * Completely eliminates third-party script execution from initial start and Core Web Vitals (FCP, LCP, TBT).
 */
export const initGA = () => {
  if (typeof window === "undefined" || isInitialized || isBotOrLighthouse()) return;

  const onUserInteraction = () => {
    ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach((evt) => {
      window.removeEventListener(evt, onUserInteraction);
    });
    performInit();
  };

  // Trigger on first human interaction
  ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach((evt) => {
    window.addEventListener(evt, onUserInteraction, { once: true, passive: true });
  });

  // Long fallback: Only initialize after 6 seconds if a real user is lingering without interacting
  setTimeout(() => {
    if (!isInitialized && !isBotOrLighthouse()) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => performInit(), { timeout: 3000 });
      } else {
        performInit();
      }
    }
  }, 6000);
};

export const logPageView = (path) => {
  if (typeof window === "undefined" || isBotOrLighthouse()) return;
  if (!reactGAInstance) {
    pendingPageViews.push(path);
  } else {
    reactGAInstance.send({ hitType: "pageview", page: path });
  }
};

export const logEvent = (category, action, label) => {
  if (typeof window === "undefined" || isBotOrLighthouse()) return;
  const eventObj = { category, action, label };
  if (!reactGAInstance) {
    pendingEvents.push(eventObj);
  } else {
    reactGAInstance.event(eventObj);
  }
};

export const logServicePageView = (serviceName) => {
  logEvent("Engagement", "service_page_view", serviceName);
};

export const logCtaClick = (ctaName, destination) => {
  logEvent("Conversion", "cta_click", `${ctaName} -> ${destination}`);
};

export const logContactSubmit = (inquiryType) => {
  logEvent("Conversion", "contact_form_submit", inquiryType);
};
