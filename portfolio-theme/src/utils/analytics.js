// src/utils/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  try {
    ReactGA.initialize("G-899C2G4NC8");
  } catch (e) {}
};

export const logPageView = (path) => {
  try {
    ReactGA.send({ hitType: "pageview", page: path });
  } catch (e) {}
};

export const logEvent = (category, action, label) => {
  try {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  } catch (e) {}
};
    