"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import { spaces } from "../../../consts/spaces";

export const StyledCart = styled.div`
  position: fixed;
  z-index: 999;
  padding: ${spaces.l}px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 800px;
  background-color: ${colors.gray300};
  box-shadow: 10px 0 50px ${colors.red400};
`;
