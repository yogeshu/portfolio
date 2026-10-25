// src/utils/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize("G-899C2G4NC8");
  }
};

export const logPageView = (path) => {
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const logEvent = (category, action, label) => {
  if (typeof window !== "undefined") {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
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
