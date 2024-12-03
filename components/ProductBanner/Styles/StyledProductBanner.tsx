import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { motion } from "framer-motion";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledProductBanner = styled.div`
  height: 100vh;
  position: relative;
`;

export const LottieWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "type description" "benefits cta";
  height: 100%;
  width: 100%;
  padding: ${spaces.l}px;
  ${breakpoint.tabletPortrait} {
    grid-template-areas: "type description" "benefits benefits" "cta .";
    grid-template-columns: 5fr 6fr;
    grid-template-rows: 1fr auto auto;
    row-gap: ${spaces.xl}px;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-template-areas: "type" "cta";
    row-gap: ${spaces.m}px;
    padding: ${spaces.m}px;
  }
`;

export const InsoleType = styled.div`
  grid-area: type;
  display: grid;
  row-gap: ${spaces.m}px;
  align-self: start;
  ${breakpoint.monitor} {
    row-gap: ${spaces.l}px;
  }
`;

export const InsoleDescription = styled.div`
  grid-area: description;
  display: grid;
  row-gap: ${spaces.m}px;
  align-self: start;
  ${breakpoint.monitor} {
    row-gap: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    display: none;
  }
`;

export const InsoleBenefits = styled.div`
  grid-area: benefits;
  align-self: end;
  display: grid;
  row-gap: ${spaces.m}px;
  ${breakpoint.monitor} {
    row-gap: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    display: none;
  }
`;


export const Benefits = styled(motion.div)`
  display: flex;
  column-gap: ${spaces.l}px;
  overflow: hidden;
  ${breakpoint.monitor} {
    column-gap: ${spaces.xl}px;
  }
`;

export const Benefit = styled(motion.div)`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const InsoleCTA = styled.div`
  grid-area: cta;
  align-self: end;
  ${breakpoint.tabletPortrait} {
  }
  ${breakpoint.monitor} {
    row-gap: ${spaces.m}px;
  }
  display: grid;
  row-gap: ${spaces.m}px;
`;

export const Price = styled.div`
  overflow: hidden;
`;
