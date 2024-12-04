import { Metadata } from "next";
import getProduct from "../../../apollo/getProduct";
import Line from "../../../components/Line/Line";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Micro } from "../../../components/Typography/Micro";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import {
  convertReviewsToJson,
  getReviewFromMeta,
} from "../../../helpers/convertReviewsToJson";
import AddToCart from "./(client)/AddToCart";
import Gallery from "./(client)/Gallery";
import ProductName from "./(client)/ProductName";
import {
  Benefit,
  Benefits,
  BenefitsInner,
  GlobalProduct,
  ProductContent,
  ProductCover,
  ProductDescription,
  ProductInfo,
  Review,
  Reviews,
  StyledProduct,
} from "./(client)/StyledProduct";

interface PageProps {
  params: { slug: string };
}

export const revalidate = 5;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: `Vložka ${product.title}`,
    description: product.description,
    openGraph: {
      images: product.images.nodes.map((i) => i.url),
    },
  };
}

const page = async ({ params: { slug } }: PageProps) => {
  const product = await getProduct(slug);
  const reviews = convertReviewsToJson(
    getReviewFromMeta(product.metafields).value,
  );

  return (
    <>
      <GlobalProduct />
      <RevealAnimation noCrop noSkew y={[70, 0]} duration={1} delay={0.6}>
        <StyledProduct data-theme="light" data-background-color="dark">
          <ProductContent>
            <ProductCover
              src={product.images.nodes[0].url}
              width={product.images.nodes[0].width}
              height={product.images.nodes[0].height}
              alt={product.images.nodes[0].altText || product.title}
            />
            <Gallery images={product.images.nodes} title={product.title} />
            <ProductInfo>
              <ProductName>{product.title}</ProductName>
              <ProductDescription>
                <Small className="black uppercase indent">
                  {product.description}
                </Small>
              </ProductDescription>
              <AddToCart product={product} />
              <Benefits>
                <Mini className="black uppercase" as={"h2"}>
                  Benefity
                </Mini>
                <BenefitsInner>
                  {product.metafields[0]?.value
                    .split("\n")
                    .map((benefit, i) => (
                      <Benefit key={i}>
                        <Micro className="black uppercase tac">{i + 1}</Micro>
                        <Micro className="black uppercase tac">{benefit}</Micro>
                      </Benefit>
                    ))}
                </BenefitsInner>
              </Benefits>
              {!(reviews.length === 0) && (
                <Reviews>
                  <Mini className="uppercase black unset-max-width" as={"h2"}>
                    {"Reference"}
                  </Mini>
                  {reviews.map((review, i) => (
                    <>
                      <Review key={i}>
                        <div>
                          <Micro className="uppercase gray600 unset-max-width">
                            {review.name}
                          </Micro>
                          <Micro className="uppercase gray600 unset-max-width">
                            {review.profession}
                          </Micro>
                        </div>
                        <Mini className="uppercase black unset-max-width">
                          {review.quote}
                        </Mini>
                      </Review>
                      {!(i === reviews.length - 1) && <Line stroke="gray700" />}
                    </>
                  ))}
                </Reviews>
              )}
            </ProductInfo>
          </ProductContent>
        </StyledProduct>
      </RevealAnimation>
    </>
  );
};

export default page;
