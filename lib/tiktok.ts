function pageview() {
  window.ttq.page();
}

type TiktokProductInfo = {
  contents: {
    content_id: string;
    content_name: string;
    price: string;
  }[];
  totalPrice: string;
  currency: string;
};

function initiateCheckout({
  contents,
  totalPrice,
  currency,
}: TiktokProductInfo) {
  window.ttq.track("InitiateCheckout", {
    contents: contents.map((p) => ({
      content_id: p.content_id,
      content_type: "product",
      content_name: p.content_name,
      content_price: p.price,
    })),
    value: totalPrice,
    currency: currency,
  });
}

function viewProduct({ contents, totalPrice, currency }: TiktokProductInfo) {
  window.ttq.track("ViewContent", {
    contents: contents.map((p) => ({
      content_id: p.content_id, // string. ID of the product. Example: "1077218".
      content_type: "product", // string. Either product or product_group.
      content_name: p.content_name, // string. The name of the page or product. Example: "shirt".
      price: p.price, // number. The price of a single item. Example: 25.
      brand: "F33T", // string. The brand name of the page or product. Example: "Nike".
    })),
    value: totalPrice, // number. Value of the order or items sold. Example: 100.
    currency: currency, // string. The 4217 currency code. Example: "USD".
  });
}

function addToCart({ currency, totalPrice, contents }: TiktokProductInfo) {
  window.ttq.track("AddToCart", {
    contents: contents.map((p) => ({
      content_id: p.content_id, // string. ID of the product. Example: "1077218".
      content_type: "product", // string. Either product or product_group.
      content_name: p.content_name, // string. The name of the page or product. Example: "shirt".
    })),
    value: totalPrice, // number. Value of the order or items sold. Example: 100.
    currency: currency, // string. The 4217 currency code. Example: "USD".
  });
}

export const tiktok = { pageview, initiateCheckout, addToCart, viewProduct };
