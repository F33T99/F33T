import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import getClient from "../../../apollo/client";
import Scrollbar from "../../../components/Scrollbar/Scrollbar";
import { Small } from "../../../components/Typography/Small";
import { GET_PRODUCT } from "../../../gql/GetProduct";
import AddToCart from "./(client)/AddToCart";
import ProductName from "./(client)/ProductName";
import {
  Benefit,
  Benefits,
  BenefitsInner,
  Gallery,
  GalleryImage,
  GalleryInner,
  GlobalProduct,
  ProductContent,
  ProductInfo,
  StyledProduct,
} from "./(client)/StyledProduct";
import { Micro } from "../../../components/Typography/Micro";
import { Mini } from "../../../components/Typography/Mini";
import { CartCheckoutButton } from "@shopify/hydrogen-react";
import Button from "../../../components/Button/Button";

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
  });

  return (
    <>
      <GlobalProduct />
      <StyledProduct data-theme='light'>
        <ProductContent>
          <Gallery>
            <Scrollbar style={{ height: "100vh" }}>
              <GalleryInner>
                {product.images.nodes.map(({ url, width, height, altText }) => (
                  <GalleryImage
                    src={url}
                    width={width}
                    height={height}
                    alt={altText}
                  />
                ))}
              </GalleryInner>
            </Scrollbar>
          </Gallery>
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
