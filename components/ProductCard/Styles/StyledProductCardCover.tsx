import Image from "next/image";
import styled from "styled-components";

export const StyledProductCardCover = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const ProductCardCoverImage = styled(Image)`
  width: 100%;
  height: auto;
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
