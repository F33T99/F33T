import React from "react";
import styled from "styled-components";
import { colors } from "../../consts/colors";

interface ModalCloseProps {
  onClick: () => void;
}

const StyledModalClose = styled.div`
  cursor: pointer;
`;

const ModalClose = ({ onClick }: ModalCloseProps) => {
  return (
    <StyledModalClose onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='124.701'
        height='32.479'
        viewBox='0 0 124.701 32.479'>
        <g transform='translate(-286.578 -13.948)'>
          <path
            d='M0,0H127.057'
            transform='translate(287.028 44.478) rotate(-13)'
            fill='none'
            stroke={colors.red400}
            strokeWidth='4'
          />
          <path
            d='M0,0H127.057'
            transform='translate(410.829 44.478) rotate(-167)'
            fill='none'
            stroke={colors.red400}
            strokeWidth='4'
          />
        </g>
      </svg>
    </StyledModalClose>
  );
};

export default ModalClose;
