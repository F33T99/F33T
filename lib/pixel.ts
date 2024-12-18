type FbPixelProcutInfo = {
  productIds: string[];
  price: string;
  currency: string;
};

function pageview() {
  window.fbq("track", "PageView");
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
function event(name: string, options = {}) {
  window.fbq("track", name, options);
}

function addToCart({ productIds, price, currency }: FbPixelProcutInfo) {
  window.fbq("track", "AddToCart", {
    content_ids: productIds, // 'REQUIRED': array of product IDs
    value: price, // REQUIRED, up to 2 decimals optional
    currency: currency, // REQUIRED
    content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
  });
}

function initiateCheckout({ productIds, price, currency }: FbPixelProcutInfo) {
  window.fbq("track", "Purchase", {
    content_ids: productIds, // 'REQUIRED': array of product IDs
    value: price, // REQUIRED, up to 2 decimals optional
    currency: currency, // REQUIRED
    content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
  });
}
function viewProduct({ productIds, price, currency }: FbPixelProcutInfo) {
  window.fbq("track", "ViewContent", {
    content_ids: productIds, // 'REQUIRED': array of product IDs
    content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
    value: price, // REQUIRED, up to 2 decimals optional
    currency: currency, // REQUIRED
  });
}

export const pixel = {
  event,
  pageview,
  addToCart,
  initiateCheckout,
  viewProduct,
};
