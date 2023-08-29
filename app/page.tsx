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
import { Metafield, QueryRoot } from "../gql/types";
import { convertReviewsToJson } from "../helpers/convertReviewsToJson";
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
  const getReviewFromMeta = (m: Metafield[]) =>
    m.find((x) => x?.key === "reviews");
  const activeInsoleReviews = convertReviewsToJson(
    getReviewFromMeta(products[0].metafields).value
  );
  const basicInsoleReviews = convertReviewsToJson(
    getReviewFromMeta(products[1].metafields).value
  );

  return (
    <StyledHomepage data-theme='dark'>
      <GlobalHomepage />
      <MainHero />
      <ScrollAnimation offset={[0.9, 0.1]}>
        <VariantsHeaderContainer />
      </ScrollAnimation>
      <Elevator>
        <ProductBanner
          data={products.map((node) => ({
            perex: node.description,
            benefits: node.metafields[0]?.value.split("\n"),
            type: node.title,
            price: node.priceRange,
            handle: node.handle,
          }))}
        />
      </Elevator>
      <Technology id={"technology"}>
        <TechnologyHeader>Technologie</TechnologyHeader>
        <TechnologyContent>
          <TechnologyBenefits className='_1'>
            <TechnologyBenefit>
              <Micro className='uppercase'>Aktivní stříbro</Micro>
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
              <Micro className='uppercase'>Povrchová textilie</Micro>
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
          <TechnologyBenefits className='_2'>
            <TechnologyBenefit>
              <Micro className='uppercase'>Aktivní stříbro</Micro>
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
              <Micro className='uppercase'>Aktivní stříbro</Micro>
              <Micro>
                Fungování aktivního stříbra je založeno na jeho schopnosti
                inhibovat růst a množení mikroorganismů, jako jsou bakterie a
                plísně. Aktivní stříbro uvolňuje malé množství iontů stříbra,
                které mají silnou antimikrobiální účinnost. Tyto ionty stříbra
                působí na buněčné membrány mikroorganismů a narušují jejich
                životní funkce, což vede k inhibici jejich růstu a množení.
              </Micro>
            </TechnologyBenefit>
          </TechnologyBenefits>
        </TechnologyContent>
      </Technology>
      {(activeInsoleReviews || basicInsoleReviews) && (
        <ReferencesSection id={"references"}>
          <SectionHeader className='uppercase black max-width'>
            Ideální pro každodenní nošení i sport
          </SectionHeader>
          <References>
            <Reference className='wide'>
              <ReferencePerson>
                <Micro className='gray700 uppercase'>
                  {activeInsoleReviews[0].name}
                </Micro>
                <Micro className='gray700 uppercase'>
                  {activeInsoleReviews[0].profession}
                </Micro>
              </ReferencePerson>
              <Medium className='black uppercase no-max-width'>
                {activeInsoleReviews[0].quote}
              </Medium>
            </Reference>
            <Line stroke='gray700' className='line _1' />
            <Reference className='short _1'>
              <ReferencePerson>
                <Micro className='gray700 uppercase'>
                  {basicInsoleReviews[0].name}
                </Micro>
                <Micro className='gray700 uppercase'>
                  {basicInsoleReviews[0].profession}
                </Micro>
              </ReferencePerson>
              <Medium className='black uppercase no-max-width'>
                {basicInsoleReviews[0].quote}
              </Medium>
            </Reference>
            <Line stroke='gray700' vertical className='vertical line _2' />
            <Line stroke='gray700' className='horizontal line _2' />
            <Reference className='short _2'>
              <ReferencePerson>
                <Micro className='gray700 uppercase'>
                  {activeInsoleReviews[1].name}
                </Micro>
                <Micro className='gray700 uppercase'>
                  {activeInsoleReviews[1].profession}
                </Micro>
              </ReferencePerson>
              <Medium className='black uppercase no-max-width'>
                {activeInsoleReviews[1].quote}
              </Medium>
            </Reference>
          </References>
        </ReferencesSection>
      )}
      <AboutSectionContainer />
    </StyledHomepage>
  );
};

export default page;
