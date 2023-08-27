import React from "react";
import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";

interface CartIconProps {
  fill?: ColorKeys;
}

const StyledCartIcon = styled.div``;

const CartIcon = ({ fill = "black" }: CartIconProps) => {
  return (
    <StyledCartIcon>
      <svg
        viewBox='0 0 25 25'
        width={25}
        height={25}
        xmlns='http://www.w3.org/2000/svg'
        fill={colors[fill]}>
        <path d='M12.4999 2.34375C10.3546 2.34375 8.59365 4.10469 8.59365 6.25V7.03125H4.73584L4.6874 7.76406L3.90615 21.8266L3.85693 22.6562H21.1421L21.0937 21.8258L20.3124 7.76328L20.2632 7.03125H16.4062V6.25C16.4062 4.10469 14.6452 2.34375 12.4999 2.34375ZM12.4999 3.90625C13.1215 3.90625 13.7176 4.15318 14.1572 4.59272C14.5967 5.03226 14.8437 5.6284 14.8437 6.25V7.03125H10.1562V6.25C10.1562 5.6284 10.4031 5.03226 10.8426 4.59272C11.2822 4.15318 11.8783 3.90625 12.4999 3.90625ZM6.20068 8.59375H8.59365V10.9375H10.1562V8.59375H14.8437V10.9375H16.4062V8.59375H18.7991L19.4827 21.0938H5.51787L6.20068 8.59375Z'></path>
      </svg>
    </StyledCartIcon>
  );
};

export default CartIcon;
