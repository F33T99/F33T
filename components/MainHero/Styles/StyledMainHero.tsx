import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledMainHero = styled.div`
  position: relative;
`;

export const HeroVideo = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  ${breakpoint.tabletPortrait} {
    height: 100%;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  align-self: start;
  align-content: end;
  justify-items: start;
  max-height: 90vh;
  aspect-ratio: 16/9;
  row-gap: ${spaces.m}px;
  padding: ${spaces.l}px;
  ${breakpoint.monitor} {
    row-gap: ${spaces.l}px;
  }
  ${breakpoint.tabletPortrait} {
    aspect-ratio: 9/16;
    max-height: 100vh;
    padding: ${spaces.l}px;
  }
  ${breakpoint.phone} {
    padding: ${spaces.m}px;
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.s}px;
  }
`;
