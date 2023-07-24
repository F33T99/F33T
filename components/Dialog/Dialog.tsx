"use client";

import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import {
  StyledDialog,
  Trigger,
  Overlay,
  Content,
  Close,
} from "./Styles/StyledDialog";
import CloseIcon from "../Icons/Close";

interface DialogProps extends RadixDialog.DialogProps {
  content: JSX.Element;
  trigger: JSX.Element;
}

const Dialog = ({ content, trigger, ...rest }: DialogProps) => {
  return (
    <StyledDialog {...rest}>
      <Trigger>{trigger}</Trigger>
      <RadixDialog.Portal>
        <Overlay />
        <Content>
          <Close>
            <CloseIcon />
          </Close>
          {content}
        </Content>
      </RadixDialog.Portal>
    </StyledDialog>
  );
};

export default Dialog;
