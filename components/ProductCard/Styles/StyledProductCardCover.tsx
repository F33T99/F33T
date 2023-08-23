import Image from "next/image";
import styled from "styled-components";

export const StyledProductCardCover = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 2;
  width: 100%;
  max-width: 1300px;
`;

export const ProductCardCoverImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledTriangle = styled.div`
  position: absolute;
  &.top-left {
    top: 0;
    left: 0;
  }
  &.bottom-right {
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }
`;
