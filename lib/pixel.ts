const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
const event = (name: string, options = {}) => {
  window.fbq("track", name, options);
};

export const pixel = { event, pageview };
