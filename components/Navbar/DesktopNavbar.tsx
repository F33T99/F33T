"use client";
import classNames from "classnames";
import { Dispatch } from "react";
import { ThemeType } from "../../types/global";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Micro } from "../Typography/Micro";
import { navConfig } from "./Navbar";
import {
  CartBadge,
  CartLines,
  NavLinks,
  NavlinkWrapper,
} from "./Styles/StyledNavbar";

interface DesktopNavbarProps {
  theme: ThemeType;
  pathname: string;
  setShowCart: Dispatch<boolean>;
  lines: any[];
}
export function DesktopNavbar({
  theme,
  pathname,
  setShowCart,
  lines,
}: DesktopNavbarProps) {
  return (
    <>
      <RevealAnimation>
        <Link href={"/"}>
          <Logo fill={theme === "light" ? "white" : "black"} />
        </Link>
      </RevealAnimation>
      <NavLinks>
        {navConfig.map(({ pageName, url }, i) => (
          <RevealAnimation delay={i * 0.3} key={i}>
            <NavlinkWrapper className={classNames(theme)}>
              <Micro
                as={"span"}
                className={classNames(
                  {
                    uppercase: true,
                    active: pathname === url,
                    navlink: true,
                  },
                  theme === "light" ? "black" : "white"
                )}
              >
                <Link href={url} className='no-underline'>
                  {pageName}
                </Link>
              </Micro>
            </NavlinkWrapper>
          </RevealAnimation>
        ))}
        <RevealAnimation delay={navConfig.length * 0.3}>
          <NavlinkWrapper className={classNames(theme)}>
            <Micro
              as={"span"}
              className={classNames(
                {
                  uppercase: true,
                  navlink: true,
                },
                theme === "light" ? "black" : "white"
              )}
            >
              <Link href={`${pathname}?s=contact`} className='no-underline'>
                {"Kontakt"}
              </Link>
            </Micro>
          </NavlinkWrapper>
        </RevealAnimation>
        <RevealAnimation delay={(navConfig.length + 1) * 0.3}>
          <CartBadge
            className={classNames(theme)}
            onClick={() => {
              setShowCart(true);
            }}
          >
            {lines.length === 0 ? (
              <CartIcon fill={"white"} />
            ) : (
              <CartLines>{lines.length}</CartLines>
            )}
          </CartBadge>
        </RevealAnimation>
      </NavLinks>
    </>
  );
}
