import Image from "next/image";
import styled from "styled-components";

export const StyledProductCardCover = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 2;
  width: 100%;
`;

export const ProductCardCoverImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledTriangle = styled.div`
  position: absolute;
  &.top-left {
    top: -50px;
    left: -50px;
  }
  &.bottom-right {
    bottom: -50px;
    right: -50px;
    transform: rotate(180deg);
  }
`;
