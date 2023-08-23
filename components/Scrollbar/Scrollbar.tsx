import React from "react";
import SimpleBar from "simplebar-react";
import { StyledScrollbar } from "./Styles/StyledScrollbar";

interface Props {
  children: React.ReactElement;
  style: React.CSSProperties;
  applyScrollbar?: boolean;
  autoHide?: boolean;
}
const Scrollbar = ({
  children,
  style,
  autoHide = false,
  applyScrollbar = true,
}: Props) => {
  return applyScrollbar ? (
    <StyledScrollbar>
      <SimpleBar autoHide={autoHide} style={style}>
        {children}
      </SimpleBar>
    </StyledScrollbar>
  ) : (
    children
  );
};

export default Scrollbar;
