"use client";

import Button from "../Button/Button";
import { PageHeader } from "../Typography/PageHeader";
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
      <HeroVideo
        loop
        autoPlay
        playsInline
        muted
        src='/videos/hero-loop-horizontal.mp4'
      />
    </StyledMainHero>
  );
};

export default MainHero;
