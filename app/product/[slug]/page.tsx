import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import getClient, { revalidate } from "../../../apollo/client";
import { Micro } from "../../../components/Typography/Micro";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import { GET_PRODUCT } from "../../../gql/GetProduct";
import AddToCart from "./(client)/AddToCart";
import ProductName from "./(client)/ProductName";
import {
  Benefit,
  Benefits,
  BenefitsInner,
  GlobalProduct,
  ProductContent,
  ProductCover,
  ProductInfo,
  StyledProduct,
} from "./(client)/StyledProduct";
import Gallery from "./(client)/Gallery";

interface PageProps {
  params: { slug: string };
}

const page = async ({ params: { slug } }: PageProps) => {
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
      identifiers: {
        namespace: "custom",
        key: "benefits",
      },
    },
    ...revalidate,
  });

  return (
    <>
      <GlobalProduct />
      <StyledProduct data-theme='light'>
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
            <Small className='black uppercase indent'>
              {product.description}
            </Small>
            <AddToCart product={product} />
            <Benefits>
              <Mini className='black uppercase'>Benefity</Mini>
              <BenefitsInner>
                {product.metafields[0]?.value.split("\n").map((benefit, i) => (
                  <Benefit key={i}>
                    <Micro className='black uppercase tac'>{i + 1}</Micro>
                    <Micro className='black uppercase tac'>{benefit}</Micro>
                  </Benefit>
                ))}
              </BenefitsInner>
            </Benefits>
          </ProductInfo>
        </ProductContent>
      </StyledProduct>
    </>
  );
};

export default page;
