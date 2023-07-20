"use client";

import React, { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Link = ({ children, target, className, ...rest }: LinkProps) => {
  return (
    <NextLink {...rest} passHref legacyBehavior>
      <StyledLink className={className} target={target}>
        {children}
        {target && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 25 24.9997'
            fill='#fff'>
            <path d='m22.9166,12.4998v10.4166H2.08344V2.08342h10.41666V0H2.08344C.93781,0,0,.93749,0,2.08342v20.83318c0,1.1453.93781,2.0831,2.08344,2.0831h20.83316c1.1456,0,2.0834-.9378,2.0834-2.0834v-10.4166l-2.0834.0001Z' />
            <path d='m24.9997,8.33339l-.0009-7.29215c.0009-.57473-.466-1.04124-1.0407-1.04124h-7.2919v2.0828h4.7758l-8.9425,8.9437,1.4731,1.4734L22.9161,3.55774v4.77523h2.0834l.0002.00042Z' />
          </svg>
        )}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
