"use client";
import styled from "styled-components";

export const StyledVariantsHeaderContainer = styled.h2`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const VariantsInner = styled.div``;

export const VariantsHeader = styled.span`
  display: block;
  font-size: 17vh;
  text-transform: uppercase;
  &.right {
    text-align: right;
  }
`;
