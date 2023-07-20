"use client";

import Button from "../Button/Button";
import { PageHeader } from "../Typography/PageHeader";
import Video from "../Video/Video";
import {
  HeroContent,
  HeroVideo,
  StyledMainHero,
} from "./Styles/StyledMainHero";
interface MainHeroProps {}

const MainHero = ({}: MainHeroProps) => {
  return (
    <StyledMainHero>
      <HeroContent>
        <PageHeader className='uppercase'>
          {`Vložky do bot Vylepšené o\u00a0nanotechnologii`}
        </PageHeader>
        <Button>Zjistit více</Button>
      </HeroContent>
      <HeroVideo>
        <Video src={"/videos/hero-loop-horizontal.mp4"} />
      </HeroVideo>
    </StyledMainHero>
  );
};

export default MainHero;
