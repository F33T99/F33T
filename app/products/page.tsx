import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import getClient from "../../apollo/client";
import ProductCard from "../../components/ProductCard/ProductCard";
import { SectionHeader } from "../../components/Typography/SectionHeader";
import { Small } from "../../components/Typography/Small";
import { GET_PRODUCTS } from "../../gql/GetProducts";
import {
  GlobalProducts,
  ProductsGrid,
  ProductsPageHero,
  StyledProductPage,
} from "./(client)/Styledpage";

interface pageProps {}

const page = async ({}: pageProps) => {
  const client = getClient();

  const {
    data: { products },
  } = await client.query<QueryRoot>({
    query: GET_PRODUCTS,
    variables: {
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
    <StyledProductPage data-theme='light'>
      <GlobalProducts />
      <ProductsPageHero>
        <SectionHeader className='black'>Produkty</SectionHeader>
        <Small className='black uppercase indent'>
          Vložka typu ACTIVE je určena pro denní nošení a sport. chrání před
          rázy při chůzi, běhu a dopadech. Vložky korespondují s ergonomií
          chodidla. Povrchová pletená textilie s přidaným stříbrem snižuje
          množení bakterií, čímž přímo zabraňuje zápachu.
        </Small>
      </ProductsPageHero>
      <ProductsGrid>
        {products.edges.map(({ node }) => {
          const { id, title, variants, priceRange, images, handle } = node;
          return (
            <ProductCard
              key={id}
              title={title}
              variants={variants}
              priceRange={priceRange}
              images={images}
              handle={handle}
            />
          );
        })}
      </ProductsGrid>
    </StyledProductPage>
  );
};

export default page;
