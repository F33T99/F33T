import Dialog from "../components/Dialog/Dialog";
import Elevator from "../components/Elevator/Elevator";
import Footer from "../components/Footer/Footer";
import MainHero from "../components/MainHero/MainHero";
import PlayButton from "../components/PlayButton/PlayButton";
import ProductBanner from "../components/ProductBanner/ProductBanner";
import ScrollAnimation from "../components/ScrollAnimation/ScrollAnimation";
import { Medium } from "../components/Typography/Medium";
import { Micro } from "../components/Typography/Micro";
import { SectionHeader } from "../components/Typography/SectionHeader";
import Video from "../components/Video/Video";
import { colors } from "../consts/colors";
import AboutSectionContainer from "../containers/AboutSection/AboutSectionContainer";
import VariantsHeaderContainer from "../containers/VariantsHeader/VariantsHeaderContainer";
import {
  Reference,
  ReferenceHorLine,
  ReferencePerson,
  ReferenceVerLine,
  References,
  ReferencesSection,
  StyledHomepage,
  Technology,
  TechnologyBenefit,
  TechnologyBenefits,
  TechnologyContent,
  TechnologyHeader,
  TechnologyLoop,
  TechnologyPlayButton,
} from "./(client)/StyledHomepage";
import TechnologyLoopContainer from "./(client)/TechnologyLoopContainer";

const page = async () => {
  // const client = getClient();

  // const {
  //   data: { products },
  // } = await client.query<QueryRoot>({
  //   query: GET_PRODUCTS,
  //   variables: {
  //     first: 99,
  //     transformImage: {
  //       maxWidth: 1920,
  //       maxHeight: 1080,
  //       preferredContentType: "WEBP",
  //     },
  //     identifiers: {
  //       namespace: "custom",
  //       key: "benefits",
  //     },
  //   },
  // });

  return (
    <StyledHomepage>
      <MainHero />
      <ScrollAnimation offset={[0.9, 0.1]}>
        <VariantsHeaderContainer />
      </ScrollAnimation>
      <Elevator>
        <ProductBanner />
      </Elevator>
      <Technology>
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
          <TechnologyLoopContainer />
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
      <ReferencesSection>
        <SectionHeader className='uppercase black max-width'>
          Ideální pro každodenní nošení i sport
        </SectionHeader>
        <References>
          <Reference className='wide'>
            <ReferencePerson>
              <Micro className='gray700 uppercase'>Luboš Procházka</Micro>
              <Micro className='gray700 uppercase'>
                Profesionální skateboardista
              </Micro>
            </ReferencePerson>
            <Medium className='black uppercase no-max-width'>
              Vložky F33T mě na skejtu už několikrát zachránily od hnusných
              úrazů paty. Navíc když si po ježdění sundám boty, vložky jsou
              opravdu stylovka a nesmrdí mi nohy.
            </Medium>
            <ReferenceHorLine
              xmlns='http://www.w3.org/2000/svg'
              width='1748.236'
              height='31.967'
              vectorEffect='non-scaling-stroke'
              viewBox='0 0 1748.236 31.967'>
              <path
                d='M-40,5807.268H1668.2l39.727-31.073'
                transform='translate(40 -5775.8)'
                fill='none'
                stroke={colors.gray700}
                strokeWidth='1'
              />
            </ReferenceHorLine>
          </Reference>
          <Reference className='short'>
            <ReferencePerson>
              <Micro className='gray700 uppercase'>Luboš Procházka</Micro>
              <Micro className='gray700 uppercase'>
                Profesionální skateboardista
              </Micro>
            </ReferencePerson>
            <Medium className='black uppercase no-max-width'>
              Vložky F33T mě na skejtu už několikrát zachránily od hnusných
              úrazů paty. Navíc když si po ježdění sundám boty, vložky jsou
              opravdu stylovka a nesmrdí mi nohy.
            </Medium>
          </Reference>
          <ReferenceVerLine
            xmlns='http://www.w3.org/2000/svg'
            width='31.967'
            height='478.236'
            vectorEffect='non-scaling-stroke'
            viewBox='0 0 31.967 478.236'>
            <path
              d='M-40,5776.194H398.2l39.727,31.073'
              transform='translate(5807.662 40) rotate(90)'
              fill='none'
              stroke={colors.gray700}
              strokeWidth='1'
            />
          </ReferenceVerLine>
          <Reference className='short_2'>
            <ReferencePerson>
              <Micro className='gray700 uppercase'>Luboš Procházka</Micro>
              <Micro className='gray700 uppercase'>
                Profesionální skateboardista
              </Micro>
            </ReferencePerson>
            <Medium className='black uppercase no-max-width'>
              Vložky F33T mě na skejtu už několikrát zachránily od hnusných
              úrazů paty. Navíc když si po ježdění sundám boty, vložky jsou
              opravdu stylovka a nesmrdí mi nohy.
            </Medium>
          </Reference>
        </References>
      </ReferencesSection>
      <AboutSectionContainer />
      <Footer />
    </StyledHomepage>
  );
};

export default page;
