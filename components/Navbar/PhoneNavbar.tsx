"use client";

import { Dispatch, useState } from "react";
import Burger from "../Icons/Burger";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Micro } from "../Typography/Micro";
import { navConfig } from "./Navbar";
import {
  BurgerWrapper,
  CartBadge,
  CartLines,
  NavContact,
  NavDrawer,
  NavLinks,
  PhoneLogoWrapper,
  PhoneNavLinkWrapper,
  navlinkVariants,
} from "./Styles/StyledNavbar";
import { DisableScroll } from "../../app/(client)/DisableScroll";
import { Medium } from "../Typography/Medium";

interface PhoneNavbarProps {
  isThemeLight: boolean;
  pathname: string;
  setShowCart: Dispatch<boolean>;
  lines: any[];
}

const PhoneNavbar = ({
  isThemeLight,
  pathname,
  setShowCart,
  lines,
}: PhoneNavbarProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded && <DisableScroll />}
      <PhoneLogoWrapper>
        <RevealAnimation>
          <Link href={"/"}>
            <Logo fill={isThemeLight ? "black" : "white"} />
          </Link>
        </RevealAnimation>
      </PhoneLogoWrapper>
      <BurgerWrapper>
        <RevealAnimation delay={0.3 * 2}>
          <CartBadge
            className={expanded ? "light" : isThemeLight ? "light" : "dark"}
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
        <RevealAnimation delay={0.3}>
          <Burger
            stroke={isThemeLight ? "black" : "white"}
            isOpen={expanded}
            onClick={() => setExpanded((p) => !p)}
          />
        </RevealAnimation>
      </BurgerWrapper>
      <NavDrawer
        initial={false}
        animate={expanded ? "expanded" : "collapsed"}
        variants={navlinkVariants}>
        <NavLinks>
          {navConfig.map(({ pageName, url }, i) => (
            <PhoneNavLinkWrapper key={i}>
              <Micro
                as={"span"}
                className={`uppercase white
                            ${pathname === url ? "active" : ""}
                            navlink`}>
                <Link href={url} className='no-underline'>
                  {pageName}
                </Link>
              </Micro>
            </PhoneNavLinkWrapper>
          ))}
          <PhoneNavLinkWrapper>
            <Micro as={"span"} className={`uppercase ${"white"} navlink`}>
              <Link href={`${pathname}?s=contact`} className='no-underline'>
                {"Kontakt"}
              </Link>
            </Micro>
          </PhoneNavLinkWrapper>
        </NavLinks>
        <NavContact>
          <PhoneNavLinkWrapper>
            <Medium className={`uppercase black`}>
              <Link className='no-underline' href={`mailto: info@f33t.com`}>
                info@f33t.com
              </Link>
            </Medium>
          </PhoneNavLinkWrapper>
          <PhoneNavLinkWrapper>
            <Medium className={`uppercase black`}>
              <Link className='no-underline' href={`tel: +420774987654`}>
                +420 774 987 654
              </Link>
            </Medium>
          </PhoneNavLinkWrapper>
          <PhoneNavLinkWrapper>
            <Medium className={`uppercase black`}>
              <Link
                className={`no-underline black`}
                href={`https://www.instagram.com/f33t_official/`}
                target='_blank'>
                ig @f33t_official
              </Link>
            </Medium>
          </PhoneNavLinkWrapper>
        </NavContact>
      </NavDrawer>
    </>
  );
};

export default PhoneNavbar;
