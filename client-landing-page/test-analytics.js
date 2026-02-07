/**
 * GOOGLE ANALYTICS EVENT TESTING SCRIPT
 * =====================================
 * 
 * This script helps you verify that all analytics events are working correctly.
 * 
 * HOW TO USE:
 * 1. Open your landing page in a browser
 * 2. Open Developer Tools (F12)
 * 3. Go to Console tab
 * 4. Copy and paste this entire script
 * 5. Press Enter
 * 6. Follow the on-screen instructions
 * 
 * The script will:
 * - Listen for all gtag events
 * - Display them in a formatted table
 * - Highlight conversion events
 * - Track event counts
 */

(function() {
  console.clear();
  
  // Color codes for console
  const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  };
  
  // Event tracking
  const trackedEvents = [];
  const eventCounts = {};
  
  // Conversion events to highlight
  const conversionEvents = [
    'generate_lead',
    'book_call',
    'select_service',
    'submit_form',
    'schedule_meeting',
    'add_to_cart',
    'contact_click'
  ];
  
  // Store original gtag function
  const originalGtag = window.gtag;
  
  if (!originalGtag) {
    console.error('❌ gtag is not defined! Make sure Google Analytics is loaded.');
    return;
  }
  
  // Override gtag to intercept events
  window.gtag = function() {
    // Call original gtag
    originalGtag.apply(this, arguments);
    
    // Track the event
    const args = Array.from(arguments);
    if (args[0] === 'event') {
      const eventName = args[1];
      const eventParams = args[2] || {};
      
      // Count events
      eventCounts[eventName] = (eventCounts[eventName] || 0) + 1;
      
      // Store event details
      const eventDetails = {
        name: eventName,
        category: eventParams.event_category || '-',
        label: eventParams.event_label || '-',
        value: eventParams.value !== undefined ? eventParams.value : '-',
        timestamp: new Date().toLocaleTimeString(),
        isConversion: conversionEvents.includes(eventName)
      };
      
      trackedEvents.push(eventDetails);
      
      // Display event
      displayEvent(eventDetails);
    }
  };
  
  // Display event in console
  function displayEvent(event) {
    const icon = event.isConversion ? '🎯' : '📊';
    const style = event.isConversion 
      ? 'background: #10b981; color: white; font-weight: bold; padding: 2px 6px; border-radius: 3px;'
      : 'background: #3b82f6; color: white; padding: 2px 6px; border-radius: 3px;';
    
    console.log(
      `%c${icon} ${event.name}`,
      style,
      event.isConversion ? '💰 CONVERSION' : '',
      '\n',
      event
    );
  }
  
  // Display summary
  window.showAnalyticsSummary = function() {
    console.clear();
    console.log('%c📊 ANALYTICS EVENT SUMMARY', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
    console.log('─'.repeat(80));
    
    // Total events
    console.log(`\n%cTotal Events Tracked: ${trackedEvents.length}`, 'font-weight: bold; font-size: 14px;');
    
    // Event counts
    console.log('\n%c📈 Event Counts:', 'font-weight: bold; color: #8b5cf6;');
    console.table(eventCounts);
    
    // Conversion events
    const conversionsTracked = trackedEvents.filter(e => e.isConversion);
    console.log(`\n%c🎯 Conversion Events: ${conversionsTracked.length}`, 'font-weight: bold; color: #10b981; font-size: 14px;');
    if (conversionsTracked.length > 0) {
      console.table(conversionsTracked.map(e => ({
        Event: e.name,
        Label: e.label,
        Value: e.value,
        Time: e.timestamp
      })));
    }
    
    // Recent events
    console.log('\n%c🕐 Recent Events:', 'font-weight: bold; color: #f59e0b;');
    const recentEvents = trackedEvents.slice(-10);
    console.table(recentEvents.map(e => ({
      Event: e.name,
      Category: e.category,
      Label: e.label,
      Time: e.timestamp,
      '💰': e.isConversion ? 'YES' : 'No'
    })));
    
    console.log('\n─'.repeat(80));
    console.log('%cCommands:', 'font-weight: bold;');
    console.log('  showAnalyticsSummary() - Show this summary');
    console.log('  clearAnalyticsTracking() - Clear tracked events');
    console.log('  exportAnalyticsData() - Export events as JSON');
  };
  
  // Clear tracking
  window.clearAnalyticsTracking = function() {
    trackedEvents.length = 0;
    Object.keys(eventCounts).forEach(key => delete eventCounts[key]);
    console.clear();
    console.log('✅ Analytics tracking cleared!');
  };
  
  // Export data
  window.exportAnalyticsData = function() {
    const data = {
      summary: {
        totalEvents: trackedEvents.length,
        conversionEvents: trackedEvents.filter(e => e.isConversion).length,
        uniqueEventTypes: Object.keys(eventCounts).length
      },
      eventCounts,
      events: trackedEvents
    };
    
    console.log('📦 Analytics Data Export:');
    console.log(JSON.stringify(data, null, 2));
    return data;
  };
  
  // Initial message
  console.log('%c🚀 ANALYTICS TESTING ACTIVATED!', 'font-size: 18px; font-weight: bold; color: #10b981; background: #d1fae5; padding: 10px; border-radius: 5px;');
  console.log('\n%cAll analytics events will be logged below.', 'color: #6b7280;');
  console.log('%cConversion events are highlighted in GREEN 🎯', 'color: #10b981; font-weight: bold;');
  console.log('\n%cCommands:', 'font-weight: bold; font-size: 14px;');
  console.log('  %cshowAnalyticsSummary()%c - View summary table', 'background: #f3f4f6; padding: 2px 4px; border-radius: 3px; font-family: monospace;', '');
  console.log('  %cclearAnalyticsTracking()%c - Clear tracking', 'background: #f3f4f6; padding: 2px 4px; border-radius: 3px; font-family: monospace;', '');
  console.log('  %cexportAnalyticsData()%c - Export as JSON', 'background: #f3f4f6; padding: 2px 4px; border-radius: 3px; font-family: monospace;', '');
  console.log('\n' + '─'.repeat(80) + '\n');
  
  // Test checklist
  console.log('%c✅ TESTING CHECKLIST:', 'font-weight: bold; font-size: 14px; color: #3b82f6;');
  console.log(`
    Navigation & CTAs:
    □ Click navbar links
    □ Click "Book Discovery Call"
    □ Click hero CTAs
    
    Form Interactions:
    □ Focus on form fields (triggers form_start)
    □ Fill out form
    □ Submit form
    
    Content Engagement:
    □ Open FAQ items
    □ Click external links
    □ Click social media icons
    
    Automatic Tracking:
    □ Scroll through page (25%, 50%, 75%, 100%)
    □ Stay on page for 30s+ (time tracking)
    
    After testing, run: showAnalyticsSummary()
  `);
  console.log('─'.repeat(80) + '\n');
  
})();

// Additional helper: Check if gtag is loaded
console.log('%cℹ️ gtag Status:', 'font-weight: bold;', window.gtag ? '✅ Loaded' : '❌ Not Loaded');
console.log('%cℹ️ dataLayer Status:', 'font-weight: bold;', window.dataLayer ? `✅ ${window.dataLayer.length} items` : '❌ Not Found');
