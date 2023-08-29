"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProductPriceRange } from "../../gql/types";
import { formatPrice } from "../../helpers/formatPrice";
import Button from "../Button/Button";
import ScrollLottie from "../ScrollLottie/ScrollLottie";
import { Large } from "../Typography/Large";
import { Micro } from "../Typography/Micro";
import { Mini } from "../Typography/Mini";
import { SectionHeader } from "../Typography/SectionHeader";
import { Small } from "../Typography/Small";
import {
  Benefit,
  Benefits,
  InsoleBenefits,
  InsoleCTA,
  InsoleDescription,
  InsoleType,
  LottieWrapper,
  Price,
  ProductContent,
  StyledProductBanner,
} from "./Styles/StyledProductBanner";

interface ProductBannerProps {
  data: {
    benefits: string[];
    type: string;
    perex: string;
    price: ProductPriceRange;
    handle: string;
  }[];
}

const ProductBanner = ({ data }: ProductBannerProps) => {
  const [activeInsoleType, setActiveInsoleType] = useState("active");
  const descriptionRef = useRef<HTMLDivElement>(null);
  const insoleCurrIndex = activeInsoleType === "active" ? 0 : 1;

  useEffect(() => {
    async function createWriter() {
      const AutoWriter = (await import("auto-writer")).default;
      const write = (ref, text) => {
        AutoWriter.wrap(
          text,
          {
            speed: 0.5,
          },
          function (res) {
            if (ref.current) {
              ref.current.innerText = res;
            }
          }
        );
      };
      write(descriptionRef, data[insoleCurrIndex].perex);
    }
    createWriter();
  }, [insoleCurrIndex]);

  return (
    <StyledProductBanner>
      <ProductContent>
        <InsoleType>
          <Mini className='uppercase'>Typ vložky</Mini>
          <div>
            <SectionHeader
              className={`${
                insoleCurrIndex === 0 ? `white` : `outline-gray700`
              } uppercase`}>
              Active
            </SectionHeader>
            <SectionHeader
              className={`${
                insoleCurrIndex === 1 ? `white` : `outline-gray700`
              } uppercase`}>
              Basic
            </SectionHeader>
          </div>
        </InsoleType>
        <InsoleDescription>
          <Micro className='uppercase'>Vlastnosti vloŽky</Micro>
          <Small className='uppercase indent' ref={descriptionRef}></Small>
        </InsoleDescription>
        <InsoleBenefits>
          <Micro className='uppercase'>Vlastnosti vloŽky</Micro>
          <AnimatePresence mode='wait'>
            <Benefits key={insoleCurrIndex}>
              {data[insoleCurrIndex].benefits.map((benefit, i) => (
                <Benefit
                  key={benefit + i}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{ delay: i * 0.1 }}>
                  <Micro className='uppercase tac'>{i + 1}</Micro>
                  <Micro className='uppercase tac'>{benefit}</Micro>
                </Benefit>
              ))}
            </Benefits>
          </AnimatePresence>
        </InsoleBenefits>
        <InsoleCTA>
          <Price>
            <AnimatePresence mode={"wait"}>
              <motion.div
                key={data[insoleCurrIndex].price.minVariantPrice.amount}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}>
                <Large className='price'>
                  od{" "}
                  {formatPrice(
                    data[insoleCurrIndex].price.minVariantPrice.amount
                  )}
                </Large>
              </motion.div>
            </AnimatePresence>
          </Price>
          <Button href={`/product/${data[insoleCurrIndex].handle}`}>
            Přejít na eshop
          </Button>
        </InsoleCTA>
      </ProductContent>

      <LottieWrapper>
        <ScrollLottie
          src={"/lottie/insole-scroll-4.lottie"}
          playInInterval={[0, 1]}
          setFrameBounds={(totalFrames) => [3, totalFrames - 10]}
          onFrameChange={(frame) => {
            const isPastHalf = frame.frame / frame.totalFrames > 0.5;
            const nextState = isPastHalf ? "basic" : "active";
            if (nextState === activeInsoleType) return;
            setActiveInsoleType(nextState);
          }}
        />
      </LottieWrapper>
    </StyledProductBanner>
  );
};

export default ProductBanner;
