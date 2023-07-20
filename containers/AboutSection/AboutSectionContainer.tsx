"use client";

import { useRef } from "react";
import { Large } from "../../components/Typography/Large";
import { useScrollInertia } from "../../hooks/useScrollInertia";
import {
  AboutGallery,
  AboutPhoto,
  FlexIcon,
  FlexIcon2,
  Planet,
  Smiley,
  StyledAboutSection,
} from "./StyledAboutSectionContainer";

interface AboutSectionProps {}

const AboutSectionContainer = ({}: AboutSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollInertia(ref);
  return (
    <StyledAboutSection ref={ref}>
      <Large className='uppercase indent no-max-width'>
        Vložky do bot jsou nástroj, který má plnit svoji funkci. A to tak dobře
        že na něj po nasazení úplně zapomeneš. ať už budeš sedět ve škole, v
        officu nebo sportovat. je jen na tobě, jak ho využiješ.
      </Large>
      <AboutGallery>
        <FlexIcon />
        <FlexIcon2 />
        <div>
          <AboutPhoto
            src={"/images/about-1.jpg"}
            className='_1'
            width={1023}
            height={691}
            alt={"About photo"}
          />
          <div data-inertia data-inertia-amount={6}>
            <Planet />
          </div>
        </div>
        <div>
          <div data-inertia data-inertia-amount={10}>
            <Smiley />
          </div>
          <AboutPhoto
            src={"/images/about-2.jpg"}
            className='_2'
            width={804}
            data-inertia
            data-inertia-amount={150}
            height={1200}
            alt={"About photo"}
          />
        </div>
      </AboutGallery>
    </StyledAboutSection>
  );
};

export default AboutSectionContainer;
