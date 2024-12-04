import { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import { Metadata } from "next";
import getClient from "../../apollo/client";
import Divider from "../../components/Divider/Divider";
import ProductCard from "../../components/ProductCard/ProductCard";
import RevealAnimation from "../../components/TextAnimation/RevealAnimation";
import { Small } from "../../components/Typography/Small";
import { colors } from "../../consts/colors";
import { GET_PRODUCTS } from "../../gql/GetProducts";
import {
  GlobalProducts,
  ProductsGrid,
  ProductsPageHero,
  StyledProductPage,
} from "./(client)/Styledpage";

interface pageProps {}

export const revalidate = 5;

export const metadata: Metadata = {
  title: "Vložky do bot",
  description:
    "Ortopedické vložky do bot s nanotechnologií pro každodenní nošení na sport i do kanceláře.",
  themeColor: colors.gray300,
  colorScheme: "light",
};

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
      sortKey: "TITLE",
      identifiers: [
        {
          namespace: "custom",
          key: "benefits",
        },
        { namespace: "custom", key: "products-cover" },
      ],
    },
  });

  return (
    <StyledProductPage data-theme="light" data-background-color="dark">
      <GlobalProducts />
      <ProductsPageHero>
        <RevealAnimation delay={1}>
          <Small className="black uppercase" as={"h1"}>
            Vložky do bot
          </Small>
        </RevealAnimation>
        <RevealAnimation delay={1.3}>
          <Small className="black uppercase indent wide">
            Vložky jsou určeny pro denní nošení a sport. chrání před rázy při
            chůzi, běhu a dopadech. Vložky korespondují s ergonomií chodidla.
            Povrchová pletená textilie s přidaným stříbrem snižuje množení
            bakterií, čímž přímo zabraňuje zápachu.
          </Small>
        </RevealAnimation>
      </ProductsPageHero>
      <Divider fill="black" />
      <ProductsGrid>
        {products.edges.map(({ node }, i) => {
          const { title, variants, priceRange, images, handle, metafields } =
            node;
          return (
            <RevealAnimation
              key={i}
              noSkew
              noCrop
              delay={1.6 + 0.3 * i}
              y={[70, 0]}
            >
              <ProductCard
                title={title}
                variants={variants}
                priceRange={priceRange}
                images={images}
                handle={handle}
                metafields={metafields}
              />
            </RevealAnimation>
          );
        })}
      </ProductsGrid>
    </StyledProductPage>
  );
};

export default page;
