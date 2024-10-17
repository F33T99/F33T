import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import { Metadata } from "next";
import getClient, { revalidate } from "../../../apollo/client";
import Line from "../../../components/Line/Line";
import RevealAnimation from "../../../components/TextAnimation/RevealAnimation";
import { Micro } from "../../../components/Typography/Micro";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import { GET_PRODUCT } from "../../../gql/GetProduct";
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

const fetchData = async (slug: string) => {
  const client = getClient();
  const {
    data: { product },
  } = await client.query<QueryRoot>({
    query: GET_PRODUCT,
    variables: {
      handle: slug,
      first: 99,
      transformImage: {
        maxWidth: 1920,
        maxHeight: 1080,
        preferredContentType: "WEBP",
      },
      identifiers: [
        {
          namespace: "custom",
          key: "benefits",
        },
        { namespace: "custom", key: "reviews" },
      ],
    },
    ...revalidate,
  });
  return product;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = await fetchData(params.slug);

  return {
    title: `Vložka ${product.title}`,
    description: product.description,
    openGraph: {
      images: product.images.nodes.map((i) => i.url),
    },
  };
}

const page = async ({ params: { slug } }: PageProps) => {
  const product = await fetchData(slug);
  const reviews = convertReviewsToJson(
    getReviewFromMeta(product.metafields).value
  );

  return (
    <>
      <GlobalProduct />
      <RevealAnimation noCrop noSkew y={[70, 0]} duration={1} delay={0.6}>
        <StyledProduct data-theme='light' data-background-color='dark'>
          <ProductContent>
            <ProductCover
              src={product.images.nodes[0].url}
              width={product.images.nodes[0].width}
              height={product.images.nodes[0].height}
              alt={product.images.nodes[0].altText}
            />
            <Gallery images={product.images.nodes} />
            <ProductInfo>
              <ProductName>{product.title}</ProductName>
              <ProductDescription>
                <Small className='black uppercase indent'>
                  {product.description}
                </Small>
              </ProductDescription>
              <AddToCart product={product} />
              <Benefits>
                <Mini className='black uppercase' as={"h2"}>
                  Benefity
                </Mini>
                <BenefitsInner>
                  {product.metafields[0]?.value
                    .split("\n")
                    .map((benefit, i) => (
                      <Benefit key={i}>
                        <Micro className='black uppercase tac'>{i + 1}</Micro>
                        <Micro className='black uppercase tac'>{benefit}</Micro>
                      </Benefit>
                    ))}
                </BenefitsInner>
              </Benefits>
              {!(reviews.length === 0) && (
                <Reviews>
                  <Mini className='uppercase black unset-max-width' as={"h2"}>
                    {"Reference"}
                  </Mini>
                  {reviews.map((review, i) => (
                    <>
                      <Review key={i}>
                        <div>
                          <Micro className='uppercase gray600 unset-max-width'>
                            {review.name}
                          </Micro>
                          <Micro className='uppercase gray600 unset-max-width'>
                            {review.profession}
                          </Micro>
                        </div>
                        <Mini className='uppercase black unset-max-width'>
                          {review.quote}
                        </Mini>
                      </Review>
                      {!(i === reviews.length - 1) && <Line stroke='gray700' />}
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
