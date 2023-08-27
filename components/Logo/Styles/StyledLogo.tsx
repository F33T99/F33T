import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledLogo = styled.div`
  ${breakpoint.monitor} {
    width: 400px;
    svg {
      width: 100%;
      height: auto;
    }
  }
`;
