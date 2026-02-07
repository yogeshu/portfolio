/**
 * Google Analytics Event Tracking Utility
 * Tracks user interactions and conversions across the landing page
 */

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Core event tracking function
 * @param {string} action - Event action (e.g., 'click', 'submit', 'view')
 * @param {string} category - Event category (e.g., 'CTA', 'Form', 'Navigation')
 * @param {string} label - Event label (e.g., 'Book Call Button')
 * @param {number|null} value - Optional numeric value
 */
export const trackEvent = (action, category, label, value = null) => {
  try {
    if (isGtagAvailable()) {
      const eventParams = {
        event_category: category,
        event_label: label,
      };
      
      if (value !== null) {
        eventParams.value = value;
      }
      
      window.gtag('event', action, eventParams);
      
      // Log in development
      if (import.meta.env.DEV) {
        console.log('📊 Analytics Event:', { action, category, label, value });
      }
    }
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
};

/**
 * Conversion Events - High-value actions
 */
export const trackConversion = {
  // Form submission
  formSubmit: (serviceType, budget) => {
    trackEvent('generate_lead', 'Conversion', `Form Submit - ${serviceType}`, null);
    trackEvent('submit_form', 'Contact', serviceType, null);
    
    // Track budget tier for optimization
    if (budget) {
      trackEvent('budget_selected', 'Conversion', budget, null);
    }
  },
  
  // Call booking (highest value action)
  bookCall: (location) => {
    trackEvent('book_call', 'Conversion', location, 100); // High value
    trackEvent('schedule_meeting', 'CTA', location, null);
  },
  
  // Service interest
  selectService: (serviceName) => {
    trackEvent('select_service', 'Services', serviceName, null);
    trackEvent('add_to_cart', 'Ecommerce', serviceName, null); // GA4 ecommerce event
  },
  
  // Email/Phone clicks
  contactClick: (type, location) => {
    trackEvent('contact_click', 'Conversion', `${type} - ${location}`, null);
  }
};

/**
 * Engagement Events - User interaction quality
 */
export const trackEngagement = {
  // Scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', 'Engagement', `${percentage}%`, percentage);
  },
  
  // Time on page milestones
  timeOnPage: (seconds) => {
    const milestone = 
      seconds >= 300 ? '5min+' :
      seconds >= 180 ? '3min' :
      seconds >= 120 ? '2min' :
      seconds >= 60 ? '1min' :
      '30sec';
    
    trackEvent('time_on_page', 'Engagement', milestone, seconds);
  },
  
  // Video or media interaction
  mediaInteraction: (action, mediaName) => {
    trackEvent(action, 'Media', mediaName, null);
  },
  
  // Section views
  sectionView: (sectionName) => {
    trackEvent('view_section', 'Engagement', sectionName, null);
  }
};

/**
 * Navigation Events
 */
export const trackNavigation = {
  // Link clicks
  click: (linkName, destination) => {
    trackEvent('click', 'Navigation', `${linkName} -> ${destination}`, null);
  },
  
  // External links
  externalLink: (url, context) => {
    trackEvent('click', 'Outbound Link', url, null);
    trackEvent('external_link', context, url, null);
  },
  
  // Social media
  social: (platform) => {
    trackEvent('click', 'Social', platform, null);
  }
};

/**
 * Form Interaction Events - Track form engagement
 */
export const trackFormInteraction = {
  // User starts filling the form
  formStart: () => {
    trackEvent('form_start', 'Form', 'Contact Form', null);
  },
  
  // Individual field interactions
  fieldFocus: (fieldName) => {
    trackEvent('field_focus', 'Form', fieldName, null);
  },
  
  // Form abandonment (user filled but didn't submit)
  formAbandon: (completedFields) => {
    trackEvent('form_abandon', 'Form', `${completedFields} fields completed`, completedFields);
  },
  
  // Validation errors
  validationError: (fieldName, errorType) => {
    trackEvent('validation_error', 'Form', `${fieldName} - ${errorType}`, null);
  }
};

/**
 * Content Engagement
 */
export const trackContent = {
  // FAQ interactions
  faqOpen: (question) => {
    trackEvent('faq_open', 'Content', question, null);
  },
  
  // Case study views
  caseStudyView: (projectName) => {
    trackEvent('view_case_study', 'Content', projectName, null);
  },
  
  // Portfolio/work views
  viewWork: (workName) => {
    trackEvent('view_work', 'Content', workName, null);
  },
  
  // Testimonial interactions
  testimonialView: (clientName) => {
    trackEvent('view_testimonial', 'Content', clientName, null);
  }
};

/**
 * Error Tracking
 */
export const trackError = {
  // Form submission errors
  formError: (errorMessage) => {
    trackEvent('exception', 'Error', `Form Error: ${errorMessage}`, null);
  },
  
  // General errors
  general: (errorType, errorMessage) => {
    trackEvent('exception', 'Error', `${errorType}: ${errorMessage}`, null);
  }
};

/**
 * Advanced: Scroll Depth Tracker
 * Automatically tracks scroll milestones (25%, 50%, 75%, 100%)
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  
  const scrollMilestones = [25, 50, 75, 100];
  const trackedMilestones = new Set();
  
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);
    
    scrollMilestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackEngagement.scrollDepth(milestone);
      }
    });
  };
  
  let scrollTimeout;
  const throttledScroll = () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      handleScroll();
      scrollTimeout = null;
    }, 1000); // Throttle to once per second
  };
  
  window.addEventListener('scroll', throttledScroll, { passive: true });
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', throttledScroll);
  };
};

/**
 * Advanced: Time on Page Tracker
 * Tracks time spent on page at key milestones
 */
export const initTimeTracking = () => {
  if (typeof window === 'undefined') return;
  
  const startTime = Date.now();
  const milestones = [30, 60, 120, 180, 300]; // seconds
  const trackedMilestones = new Set();
  
  const checkMilestones = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    
    milestones.forEach(milestone => {
      if (elapsed >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackEngagement.timeOnPage(milestone);
      }
    });
  };
  
  const interval = setInterval(checkMilestones, 10000); // Check every 10 seconds
  
  // Track on page unload
  const handleUnload = () => {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    trackEvent('page_exit', 'Engagement', `Total time: ${totalTime}s`, totalTime);
  };
  
  window.addEventListener('beforeunload', handleUnload);
  
  // Cleanup function
  return () => {
    clearInterval(interval);
    window.removeEventListener('beforeunload', handleUnload);
  };
};

/**
 * Track page view (call this on component mount)
 */
export const trackPageView = (pageTitle = document.title) => {
  if (isGtagAvailable()) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Enhanced conversion tracking with custom parameters
 */
export const trackEnhancedConversion = {
  // When user shows high intent (e.g., spends time on pricing)
  viewPricing: (timeSpent) => {
    trackEvent('view_item_list', 'Ecommerce', 'Services Pricing', null);
    trackEvent('pricing_engagement', 'Conversion', `${timeSpent}s`, timeSpent);
  },
  
  // When user interacts with call booking multiple times
  callIntentHigh: () => {
    trackEvent('high_intent', 'Conversion', 'Multiple CTA clicks', null);
  },
  
  // When user scrolls to contact form
  contactFormView: () => {
    trackEvent('contact_form_impression', 'Conversion', 'Form Visible', null);
  }
};

export default {
  trackEvent,
  trackConversion,
  trackEngagement,
  trackNavigation,
  trackFormInteraction,
  trackContent,
  trackError,
  trackPageView,
  initScrollTracking,
  initTimeTracking,
  trackEnhancedConversion
};
