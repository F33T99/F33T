import MainHero from "../components/MainHero/MainHero";
import Navbar from "../components/Navbar/Navbar";
import ProductBanner from "../components/ProductBanner/ProductBanner";
import ScrollAnimation from "../components/ScrollAnimation/ScrollAnimation";
import Elevator from "../components/Elevator/Elevator";
import VariantsHeaderContainer from "../containers/VariantsHeader/VariantsHeaderContainer";
import { StickyWrapper, StyledHomepage } from "./(client)/StyledHomepage";

const page = ({}) => {
  return (
    <StyledHomepage>
      <Navbar />
      <MainHero />
      <ScrollAnimation offset={[0.9, 0.1]}>
        <VariantsHeaderContainer />
      </ScrollAnimation>
      <Elevator>
        <ProductBanner />
      </Elevator>
      <div style={{ height: "200vh" }} />
    </StyledHomepage>
  );
};

export default page;
