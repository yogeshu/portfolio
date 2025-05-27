// src/utils/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-899C2G4NC8");
};

export const logPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
}
    