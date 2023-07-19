export const formatPrice = (
  price: number,
  currency: string = "CZK",
  locale: string = "cs-CZ"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);
};
