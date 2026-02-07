/**
 * GOOGLE ANALYTICS EVENTS - QUICK REFERENCE
 * =========================================
 * 
 * This file provides a quick reference for all tracked events.
 * Use this as a cheat sheet when implementing new features.
 */

// ============================================
// CONVERSION EVENTS (Mark as conversions in GA4)
// ============================================

// ✅ Form Submission
trackConversion.formSubmit(serviceType, budget);
// Example: trackConversion.formSubmit('mvp', '15k_30k');

// ✅ Call Booking
trackConversion.bookCall(location);
// Example: trackConversion.bookCall('Navbar');

// ✅ Service Selection
trackConversion.selectService(serviceName);
// Example: trackConversion.selectService('Web App Development');

// ✅ Contact Click
trackConversion.contactClick(type, location);
// Example: trackConversion.contactClick('email', 'Footer');


// ============================================
// ENGAGEMENT EVENTS
// ============================================

// Scroll Depth (auto-tracked)
trackEngagement.scrollDepth(percentage);
// Example: trackEngagement.scrollDepth(75);

// Time on Page (auto-tracked)
trackEngagement.timeOnPage(seconds);
// Example: trackEngagement.timeOnPage(120);

// Section View
trackEngagement.sectionView(sectionName);
// Example: trackEngagement.sectionView('Pricing');

// Media Interaction
trackEngagement.mediaInteraction(action, mediaName);
// Example: trackEngagement.mediaInteraction('play', 'Demo Video');


// ============================================
// NAVIGATION EVENTS
// ============================================

// Internal Links
trackNavigation.click(linkName, destination);
// Example: trackNavigation.click('See My Work', 'work');

// External Links
trackNavigation.externalLink(url, context);
// Example: trackNavigation.externalLink('https://medium.com/@yogesh', 'Blog Post');

// Social Media
trackNavigation.social(platform);
// Example: trackNavigation.social('LinkedIn');


// ============================================
// FORM INTERACTION EVENTS
// ============================================

// Form Start (auto-tracked on first field focus)
trackFormInteraction.formStart();

// Field Focus
trackFormInteraction.fieldFocus(fieldName);
// Example: trackFormInteraction.fieldFocus('email');

// Form Abandonment (auto-tracked on page leave)
trackFormInteraction.formAbandon(completedFields);
// Example: trackFormInteraction.formAbandon(3);

// Validation Error
trackFormInteraction.validationError(fieldName, errorType);
// Example: trackFormInteraction.validationError('email', 'invalid_format');


// ============================================
// CONTENT ENGAGEMENT EVENTS
// ============================================

// FAQ Opened
trackContent.faqOpen(question);
// Example: trackContent.faqOpen('Do you work with agencies?');

// Case Study View
trackContent.caseStudyView(projectName);
// Example: trackContent.caseStudyView('Jio Finance Dashboard');

// Work View
trackContent.viewWork(workName);
// Example: trackContent.viewWork('Portfolio Item 1');

// Testimonial View
trackContent.testimonialView(clientName);
// Example: trackContent.testimonialView('John Doe');


// ============================================
// ERROR TRACKING
// ============================================

// Form Error
trackError.formError(errorMessage);
// Example: trackError.formError('Firebase connection failed');

// General Error
trackError.general(errorType, errorMessage);
// Example: trackError.general('API Error', 'Failed to fetch data');


// ============================================
// ENHANCED CONVERSION EVENTS
// ============================================

// Pricing Engagement
trackEnhancedConversion.viewPricing(timeSpent);
// Example: trackEnhancedConversion.viewPricing(15);

// High Intent Signal
trackEnhancedConversion.callIntentHigh();

// Contact Form View
trackEnhancedConversion.contactFormView();


// ============================================
// PAGE TRACKING
// ============================================

// Page View (call on component mount)
trackPageView(pageTitle);
// Example: trackPageView('Home - Freelance Developer');


// ============================================
// AUTOMATIC INITIALIZATION
// ============================================

// Initialize scroll tracking (call in useEffect)
const cleanupScroll = initScrollTracking();
// Don't forget to call cleanupScroll() in useEffect return

// Initialize time tracking (call in useEffect)
const cleanupTime = initTimeTracking();
// Don't forget to call cleanupTime() in useEffect return


// ============================================
// USAGE EXAMPLE IN COMPONENT
// ============================================

/*
import { 
  trackConversion, 
  trackNavigation, 
  trackPageView,
  initScrollTracking,
  initTimeTracking 
} from '@/utils/analytics';

function MyComponent() {
  useEffect(() => {
    // Track page view
    trackPageView('My Page Title');
    
    // Initialize automatic tracking
    const cleanupScroll = initScrollTracking();
    const cleanupTime = initTimeTracking();
    
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, []);
  
  return (
    <button onClick={() => trackConversion.bookCall('Hero')}>
      Book Call
    </button>
  );
}
*/


// ============================================
// DEBUGGING
// ============================================

// In development mode, all events are logged to console:
// 📊 Analytics Event: {action: 'click', category: 'CTA', label: 'Book Call', value: null}

// To test in production:
// 1. Install Google Analytics Debugger Chrome extension
// 2. Go to GA4 Admin → DebugView
// 3. Interact with the site and see events in real-time


// ============================================
// BEST PRACTICES
// ============================================

/**
 * 1. Always provide descriptive labels
 *    ❌ trackNavigation.click('Button', 'page')
 *    ✅ trackNavigation.click('Get Started CTA', 'pricing')
 * 
 * 2. Track location context for CTAs
 *    ✅ trackConversion.bookCall('Hero')
 *    ✅ trackConversion.bookCall('Footer')
 * 
 * 3. Use consistent naming
 *    ✅ 'Web App Development' (not 'web-app', 'webapp', etc.)
 * 
 * 4. Don't over-track
 *    - Track important user actions, not every hover/focus
 *    - Consolidate similar events
 * 
 * 5. Test before deploying
 *    - Check console logs in dev mode
 *    - Verify in GA4 DebugView
 *    - Test all conversion events
 */

export default {};
