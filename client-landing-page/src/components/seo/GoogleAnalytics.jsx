import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = 'G-16CGV8G7LW';

  useEffect(() => {
    // Initialize gtag if not already available
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments);
      };
      
      // Track initial page view
      if (window.gtag) {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
          send_page_view: true,
          // Enhanced measurement settings
          enhanced_measurement: {
            scrolls: true,
            outbound_clicks: true,
            site_search: false,
            video_engagement: true,
            file_downloads: true,
          },
        });
        
        // Set custom dimensions (optional - useful for segmentation)
        window.gtag('set', 'user_properties', {
          visitor_type: 'prospect',
        });
      }
    }
  }, []);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;