"use client";

import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  const { w } = useWindowSize();
  return (
    <StyledMainHero>
      <HeroContent>
        <PageHeader className='uppercase'>
          {`Vložky do bot Vylepšené o\u00a0nanotechnologii`}
        </PageHeader>
        <Button>Zjistit více</Button>
      </HeroContent>
      <HeroVideo>
        {!(w === 0) && (
          <Video
            posterSrc={
              w <= device.tabletPortrait
                ? "/videos/hero-loop-vertical-poster.jpg"
                : "/videos/hero-loop-horizontal-poster.jpg"
            }
            src={
              w <= device.tabletPortrait
                ? "/videos/hero-loop-vertical.mp4"
                : "/videos/hero-loop-horizontal-2.mp4"
            }
          />
        )}
      </HeroVideo>
    </StyledMainHero>
  );
};

export default MainHero;
