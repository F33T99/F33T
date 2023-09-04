import { Metafield } from "@shopify/hydrogen-react/storefront-api-types";

interface Output {
  quote: string;
  name: string;
  profession: string;
}

export const getReviewFromMeta = (m: Metafield[]) => {
  return m.find((x) => x?.key === "reviews");
};

export function convertReviewsToJson(input: string): Output[] {
  if (!input) return null;
  const reviews = input.split("</review>\n<review>");
  const jsonReviews = [];

  for (const review of reviews) {
    const quoteMatch = review.match(/<quote>(.*?)<\/quote>/);
    const nameMatch = review.match(/<name>(.*?)<\/name>/);
    const professionMatch = review.match(/<proffesion>(.*?)<\/proffesion>/);

    const quote = quoteMatch ? quoteMatch[1] : "";
    const name = nameMatch ? nameMatch[1] : "";
    const profession = professionMatch ? professionMatch[1] : "";

    jsonReviews.push({
      quote: quote,
      name: name,
      profession: profession,
    });
  }

  return jsonReviews;
}
