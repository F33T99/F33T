"use client";

import classNames from "classnames";
import { Dispatch, useState } from "react";
import { DisableScroll } from "../../app/(client)/DisableScroll";
import { ThemeType } from "../../types/global";
import Burger from "../Icons/Burger";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Medium } from "../Typography/Medium";
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

interface PhoneNavbarProps {
  theme: ThemeType;
  pathname: string;
  setShowCart: Dispatch<boolean>;
  lines: any[];
}

const PhoneNavbar = ({
  theme,
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
            <Logo fill={theme ? "black" : "white"} />
          </Link>
        </RevealAnimation>
      </PhoneLogoWrapper>
      <BurgerWrapper>
        <RevealAnimation delay={0.3 * 2}>
          <CartBadge
            className={classNames({ expanded })}
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
        <RevealAnimation delay={0.3}>
          <Burger
            stroke={theme ? "black" : "white"}
            isOpen={expanded}
            onClick={() => setExpanded((p) => !p)}
          />
        </RevealAnimation>
      </BurgerWrapper>
      <NavDrawer
        initial={false}
        animate={expanded ? "expanded" : "collapsed"}
        variants={navlinkVariants}
      >
        <NavLinks>
          {navConfig.map(({ pageName, url }, i) => (
            <PhoneNavLinkWrapper key={i}>
              <Micro
                onClick={() => setExpanded(false)}
                as={"span"}
                className={classNames({
                  uppercase: true,
                  white: true,
                  active: pathname === url,
                  navlink: true,
                })}
              >
                <Link href={url} className='no-underline'>
                  {pageName}
                </Link>
              </Micro>
            </PhoneNavLinkWrapper>
          ))}
          <PhoneNavLinkWrapper>
            <Micro
              as={"span"}
              className={`uppercase ${"white"} navlink`}
              onClick={() => setExpanded(false)}
            >
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
                target='_blank'
              >
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
