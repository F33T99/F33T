import styled from "styled-components";
import { spaces } from "../../../consts/spaces";
import { colors } from "../../../consts/colors";

export const StyledInsoleSizeVariants = styled.div`
  display: flex;
  column-gap: ${spaces.xxs}px;
`;

export const VariantWrapper = styled.div`
  padding: ${spaces.xxs}px;
  border: 1px solid transparent;
  &.avaible {
    cursor: pointer;
    &:hover {
      border: 1px solid ${colors.red400};
    }
  }
  &.disabled {
    &:hover {
      border: 1px solid transparent;
    }
  }
  &.selected {
    background-color: ${colors.red400};
  }
`;
