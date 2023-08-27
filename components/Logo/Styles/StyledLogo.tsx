import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledLogo = styled.div`
  svg {
    width: 100%;
    height: auto;
  }
  width: 350px;
  ${breakpoint.smallNotebook} {
    width: 250px;
  }
  ${breakpoint.monitor} {
    width: 400px;
  }
`;
