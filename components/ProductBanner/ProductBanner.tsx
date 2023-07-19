"use client";

import { useEffect, useRef, useState } from "react";
import ScrollLottie from "../ScrollLottie/ScrollLottie";
import { Mini } from "../Typography/Mini";
import {
  InsoleBenefits,
  InsoleCTA,
  InsoleDescription,
  InsoleType,
  LottieWrapper,
  ProductContent,
  StyledProductBanner,
} from "./Styles/StyledProductBanner";
import { Large } from "../Typography/Large";
import { Small } from "../Typography/Small";
import Button from "../Button/Button";
import { SectionHeader } from "../Typography/SectionHeader";
import { Medium } from "../Typography/Medium";
import * as AutoWriter from "auto-writer";

interface ProductBannerProps {}

const ProductBanner = ({}: ProductBannerProps) => {
  const [activeInsoleType, setActiveInsoleType] = useState("active");
  const isBasicInsoleActive = activeInsoleType === "active";
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ue");

    const write = (ref, text) => {
      AutoWriter.wrap(
        text,
        {
          speed: 0.5,
        },
        function (res) {
          ref.current.innerText = res;
        }
      );
    };
    write(
      descriptionRef,
      isBasicInsoleActive
        ? "Vložka typu BASIC je určena pro denní nošení a sport. chrání před rázy při chůzi, běhu a dopadech. Vložky korespondují s ergonomií chodidla. Povrchová pletená textilie s přidaným stříbrem snižuje množení bakterií, čímž přímo zabraňuje zápachu."
        : "Vložka typu ACTIVE je určena pro denní nošení a sport. chrání před rázy při chůzi, běhu a dopadech. Vložky korespondují s ergonomií chodidla. Povrchová pletená textilie s přidaným stříbrem snižuje množení bakterií, čímž přímo zabraňuje zápachu."
    );
  }, [isBasicInsoleActive]);

  return (
    <StyledProductBanner>
      <ProductContent>
        <InsoleType>
          <Mini className='uppercase'>Typ vložky</Mini>
          <div>
            <SectionHeader
              className={`${
                !isBasicInsoleActive ? `white` : `gray700`
              } uppercase`}>
              Active
            </SectionHeader>
            <SectionHeader
              className={`${
                isBasicInsoleActive ? `white` : `gray700`
              } uppercase`}>
              Basic
            </SectionHeader>
          </div>
        </InsoleType>
        <InsoleDescription>
          <Mini className='uppercase'>Vlastnosti vloŽky</Mini>
          <Small className='uppercase' ref={descriptionRef}></Small>
        </InsoleDescription>
        <InsoleBenefits>
          <Mini className='uppercase'>Vlastnosti vloŽky</Mini>
          <div>
            <Mini className='uppercase'>1</Mini>
            <Mini className='uppercase'>odměkčená pata</Mini>
          </div>
        </InsoleBenefits>
        <InsoleCTA>
          <Large className='uppercase'>980 Kč</Large>
          <Button>Přejít na eshop</Button>
        </InsoleCTA>
      </ProductContent>

      <LottieWrapper>
        <ScrollLottie
          src={"/lottie/insole-scroll-2.lottie"}
          playInInterval={[0.49, 0.51]}
          onFrameChange={(frame) => {
            const isPastHalf = frame.frame / frame.totalFrames >= 0.5;
            setActiveInsoleType(isPastHalf ? "active" : "basic");
          }}
        />
      </LottieWrapper>
    </StyledProductBanner>
  );
};

export default ProductBanner;
