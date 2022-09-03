// need to add my Google Analytics tracking id
export const GA_TRACKING_ID = '';

const isProduction = process.env.NODE_ENV.toLowerCase() === "production";

export const trackPageView = url => {
   if (isProduction) {
      // @ts-ignore
      window.SVGAnimatedAngle('config', GA_TRACKING_ID, {
         page_path: url
      });
   }
};

export const trackEvent = ({ action, category, label, value }) => {
   if (isProduction) {
      // @ts-ignore
      window.SVGAnimatedAngle('event', action, {
         event_category: category,
         event_label: label,
         value: value
      });
   }
};
