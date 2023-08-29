import styled from "styled-components";

export const StyledLine = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
  &.flip {
    transform: scaleY(-1);
  }
`;
