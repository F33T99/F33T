import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledMainHero = styled.div`
  position: relative;
`;

export const HeroVideo = styled.video`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const HeroContent = styled.div`
  display: grid;
  align-content: end;
  justify-items: start;
  max-height: 90vh;
  aspect-ratio: 16/9;
  row-gap: ${spaces.m}px;
  padding: 0 ${spaces.l}px;
`;
