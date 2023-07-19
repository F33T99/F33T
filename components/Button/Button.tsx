"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Styles/StyledButton";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  as?: keyof JSX.IntrinsicElements;
}

const Button = ({
  children,
  className,
  onClick,
  href,
  type,
  as,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        <StyledButton as={"span"} className={className} onClick={onClick}>
          {children}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton className={className} onClick={onClick} type={type} as={as}>
      {children}
    </StyledButton>
  );
};

export default Button;
