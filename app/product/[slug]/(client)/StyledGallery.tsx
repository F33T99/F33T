"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";
import { colors } from "../../../../consts/colors";
import { spaces } from "../../../../consts/spaces";
import Image from "next/image";

export const StyledGallery = styled.div`
  position: sticky;
  top: 0vh;
  height: 100vh;
  grid-area: gallery;
  ${breakpoint.tabletPortrait} {
    position: static;
    height: auto;
    position: relative;
    &.collapsed {
      height: 50vh;
      overflow: hidden;
    }
  }
  ${breakpoint.phone} {
    margin-bottom: ${spaces.xl}px;
  }
`;

export const ShowMore = styled.div`
  display: none;
  ${breakpoint.tabletPortrait} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: ${spaces.m}px 0;
    background: linear-gradient(
      ${colors.gray300 + "00"},
      ${colors.gray300 + "FF"} 80%
    );
  }
`;

export const ShowMoreButton = styled.div`
  background-color: ${colors.red400};
  padding: ${spaces.xxs}px ${spaces.xs}px;
`;

export const GalleryInner = styled.div`
  display: grid;
  row-gap: 1px;
`;

export const GalleryImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  ${breakpoint.tabletPortrait} {
    &:first-child {
      display: none;
    }
  }
`;
