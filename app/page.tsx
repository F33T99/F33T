import {
  Metafield,
  QueryRoot,
} from "@shopify/hydrogen-react/storefront-api-types";
import { Metadata } from "next";
import { Fragment } from "react";
import getClient from "../apollo/client";
import Elevator from "../components/Elevator/Elevator";
import Line from "../components/Line/Line";
import MainHero from "../components/MainHero/MainHero";
import ProductBanner from "../components/ProductBanner/ProductBanner";
import ScrollAnimation from "../components/ScrollAnimation/ScrollAnimation";
import { Medium } from "../components/Typography/Medium";
import { Micro } from "../components/Typography/Micro";
import { SectionHeader } from "../components/Typography/SectionHeader";
import AboutSectionContainer from "../containers/AboutSection/AboutSectionContainer";
import VariantsHeaderContainer from "../containers/VariantsHeader/VariantsHeaderContainer";
import { GET_PRODUCT } from "../gql/GetProduct";
import {
  convertReviewsToJson,
  getReviewFromMeta,
} from "../helpers/convertReviewsToJson";
import {
  GlobalHomepage,
  Reference,
  ReferencePerson,
  References,
  ReferencesSection,
  StyledHomepage,
  Technology,
  TechnologyBenefit,
  TechnologyBenefits,
  TechnologyContent,
  TechnologyHeader,
  TechnologyLoopWrapper,
} from "./(client)/StyledHomepage";
import TechnologyLoopContainer from "./(client)/TechnologyLoopContainer";

export const metadata: Metadata = {};
export const revalidate = 5;

const page = async () => {
  const client = getClient();
  const handles = ["active", "basic"];

  const requestsQueue = handles.map((handle) => {
    return client.query<QueryRoot>({
      query: GET_PRODUCT,
      variables: {
        first: 99,
        handle: handle,
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
    });
  });

  const [activeRes, basicRes] = await Promise.all(requestsQueue);
  const products = [activeRes.data.product, basicRes.data.product];
  if (!products) return null;
  const activeInsoleReviews = convertReviewsToJson(
    getReviewFromMeta(products?.[0]?.metafields as Metafield[]) as string,
  );
  const basicInsoleReviews = convertReviewsToJson(
    getReviewFromMeta(products?.[1]?.metafields as Metafield[]) as string,
  );
  const reviews = [...activeInsoleReviews, ...basicInsoleReviews];

  return (
    <StyledHomepage data-theme="dark">
      <GlobalHomepage />
      <MainHero />
      <ScrollAnimation offset={[0.9, 0.1]}>
        <VariantsHeaderContainer />
      </ScrollAnimation>
      <Elevator>
        <ProductBanner
          data={products.map((node) => ({
            perex: node!.description,
            benefits: node!.metafields[0]?.value.split("\n"),
            type: node!.title,
            price: node!.priceRange,
            handle: node!.handle,
          }))}
        />
      </Elevator>
      <Technology id={"technology"}>
        <TechnologyHeader>Technologie</TechnologyHeader>
        <TechnologyContent>
          <TechnologyBenefits className="_1">
            <TechnologyBenefit>
              <Micro className="uppercase" as={"h3"}>
                Aktivní stříbro
              </Micro>
              <Micro>
                Fungování aktivního stříbra je založeno na jeho schopnosti
                inhibovat růst a množení mikroorganismů, jako jsou bakterie a
                plísně. Aktivní stříbro uvolňuje malé množství iontů stříbra,
                které mají silnou antimikrobiální účinnost. Tyto ionty stříbra
                působí na buněčné membrány mikroorganismů a narušují jejich
                životní funkce, což vede k inhibici jejich růstu a množení.
              </Micro>
            </TechnologyBenefit>
            <TechnologyBenefit>
              <Micro className="uppercase" as={"h3"}>
                Povrchová textilie
              </Micro>
              <Micro>
                Je tvořena kvalitním úpletem, vyrobeným ze směsi bavlněných a
                tvarovaných polyesterových vláken, které dohromady vytváří
                dokonalou kombinaci pro pohlcování a transport potu z chodidel.
                Tvarovaná polyesterová vlákna Full-Dull zajišťují odolnost a
                transport kapalin a bavlna, která je absorbuje do své struktury.
                Navíc je pletenina upravena povrchovou úpravou vláken s
                nanočásticemi aktivního stříbra.
              </Micro>
            </TechnologyBenefit>
          </TechnologyBenefits>
          <TechnologyLoopWrapper>
            <TechnologyLoopContainer />
          </TechnologyLoopWrapper>
          <TechnologyBenefits className="_2">
            <TechnologyBenefit>
              <Micro className="uppercase" as={"h3"}>
                Latexová pěna
              </Micro>
              <Micro>
                Latexová pěna se vyznačuje výjimečnou měkkostí a poddajností,
                čímž zajišťuje maximální pohodlí pro nohy i při celodenním
                zatížení. Skvěle tlumí nárazy při chůzi a běhu, čímž snižuje
                únavu a bolest nohou. Kromě komfortu má i antibakteriální
                vlastnosti. Díky své tvarové paměti se latexová pěna perfektně
                přizpůsobí chodidlu - tvaru boty. Je ideální volbou pro lidi,
                kteří jsou celý den na nohou.
              </Micro>
            </TechnologyBenefit>
            <TechnologyBenefit>
              <Micro className="uppercase" as={"h3"}>
                Energy polyuretan
              </Micro>
              <Micro>
                Energy polyuretan je inovativní materiál, který se vyznačuje
                svojí odolností vůči opotřebení, nárazům a extrémním teplotám.
                Je velmi lehký a pružný. Díky vynikajícímu tlumícímu efektu
                dokáže absorbovat nárazy a vibrace, což snižuje riziko úrazu a
                zvyšuje komfort chůze.
              </Micro>
            </TechnologyBenefit>
          </TechnologyBenefits>
        </TechnologyContent>
      </Technology>
      {reviews.length !== 0 && (
        <ReferencesSection id={"references"} data-background-color="dark">
          <SectionHeader className="uppercase black max-width">
            Ideální pro každodenní nošení i sport
          </SectionHeader>
          <References>
            {reviews.map((review, key) => (
              <Fragment key={key}>
                <Reference>
                  <ReferencePerson>
                    <Micro className="gray700 uppercase" as={"h3"}>
                      {review?.name}
                    </Micro>
                    <Micro className="gray700 uppercase" as={"h4"}>
                      {review?.profession}
                    </Micro>
                  </ReferencePerson>
                  <Medium className="black uppercase no-max-width">
                    {review?.quote}
                  </Medium>
                </Reference>
                {key + 1 !== reviews.length && <Line stroke="gray700" />}
              </Fragment>
            ))}
          </References>
        </ReferencesSection>
      )}
      <AboutSectionContainer />
    </StyledHomepage>
  );
};

export default page;
