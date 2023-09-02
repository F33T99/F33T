"use client";
import { Dispatch } from "react";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Micro } from "../Typography/Micro";
import { navConfig } from "./Navbar";
import { NavLinks, CartBadge, CartLines } from "./Styles/StyledNavbar";

interface DesktopNavbarProps {
  isThemeLight: boolean;
  pathname: string;
  setShowCart: Dispatch<boolean>;
  lines: any[];
}
export function DesktopNavbar({
  isThemeLight,
  pathname,
  setShowCart,
  lines,
}: DesktopNavbarProps) {
  return (
    <>
      <RevealAnimation>
        <Link href={"/"}>
          <Logo fill={isThemeLight ? "black" : "white"} />
        </Link>
      </RevealAnimation>
      <NavLinks>
        {navConfig.map(({ pageName, url }, i) => (
          <RevealAnimation delay={i * 0.3} key={i}>
            <Micro
              as={"span"}
              className={`uppercase 
                ${isThemeLight ? "black" : "white"}
                ${pathname === url ? "active" : ""}
                navlink`}>
              <Link href={url} className='no-underline'>
                {pageName}
              </Link>
            </Micro>
          </RevealAnimation>
        ))}
        <RevealAnimation delay={navConfig.length * 0.3}>
          <Micro
            as={"span"}
            className={`uppercase ${isThemeLight ? "black" : "white"} navlink`}>
            <Link href={`${pathname}?s=contact`} className='no-underline'>
              {"Kontakt"}
            </Link>
          </Micro>
        </RevealAnimation>
        <RevealAnimation delay={(navConfig.length + 1) * 0.3}>
          <CartBadge
            className={isThemeLight ? "light" : "dark"}
            onClick={() => {
              setShowCart(true);
            }}>
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
