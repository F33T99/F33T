import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledLogo = styled.div`
  svg {
    width: 100%;
    height: auto;
  }
  width: 300px;
  ${breakpoint.smallNotebook} {
    width: 250px;
  }
  ${breakpoint.phone} {
    width: 200px;
  }
  ${breakpoint.smallPhone} {
    width: 150px;
  }
  ${breakpoint.tabletPortrait} {
    position: relative;
    z-index: 9;
  }
  ${breakpoint.monitor} {
    width: 400px;
  }
`;
