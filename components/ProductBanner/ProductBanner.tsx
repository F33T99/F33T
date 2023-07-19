"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import ScrollLottie from "../ScrollLottie/ScrollLottie";
import { Large } from "../Typography/Large";
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
import { Micro } from "../Typography/Micro";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice } from "../../helpers/formatPrice";

interface ProductBannerProps {}

const data = [
  {
    benefits: [
      "Odměkčená pata",
      "Tvaruje ploché chodidlo",
      "Redukce nárazu",
      "Antibakteriální",
    ],
    type: "Active",
    perex:
      "Vložka typu ACTIVE je určena pro denní nošení a sport. chrání před rázy při chůzi, běhu a dopadech. Vložky korespondují s ergonomií chodidla. Povrchová pletená textilie s přidaným stříbrem snižuje množení bakterií, čímž přímo zabraňuje zápachu.",
    price: { amount: 1990, currency: "CZK" },
  },
  {
    benefits: ["Antibakteriální", "Celoplošně odměkčená", "Udržitelnost"],
    type: "Basic",
    perex:
      "Vložka typu BASIC je určena zejména pro denní nošení převážně v pracovním prostředí kde je člověk neustále na nohách. Díky unikátní polyuretanové pěně, která chrání kostru před nárazy při chůzi a díky svým vlastnostem zajišťuje konzistentní komfort po celou dobu nošení.",
    price: { amount: 990, currency: "CZK" },
  },
];

const ProductBanner = ({}: ProductBannerProps) => {
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
            ref.current.innerText = res;
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
                key={data[insoleCurrIndex].price.amount}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}>
                <Large>{formatPrice(data[insoleCurrIndex].price.amount)}</Large>
              </motion.div>
            </AnimatePresence>
          </Price>
          <Button>Přejít na eshop</Button>
        </InsoleCTA>
      </ProductContent>

      <LottieWrapper>
        <ScrollLottie
          src={"/lottie/insole-scroll-2.lottie"}
          playInInterval={[0, 1]}
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
