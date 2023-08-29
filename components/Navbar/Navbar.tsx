"use client";

import { useCart } from "@shopify/hydrogen-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import scrollToElement from "scroll-to-element";
import { useTheme } from "styled-components";
import { DisableScroll } from "../../app/(client)/DisableScroll";
import { easing } from "../../consts/animationConfig";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { CartToggleContext } from "../Cart/Cart";
import Burger from "../Icons/Burger";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import { Medium } from "../Typography/Medium";
import { Micro } from "../Typography/Micro";
import {
  BurgerWrapper,
  CartBadge,
  NavContact,
  NavLinkWrapper,
  NavLinks,
  StyledNavbar,
  navlinkVariants,
} from "./Styles/StyledNavbar";
import { useWindowSize } from "../../hooks/useWindowSize";
import { device } from "../../consts/breakpoints";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const theme = useTheme();
  const { setShowCart } = useContext(CartToggleContext);
  const { lines } = useCart();
  const searchParams = useSearchParams();
  const { directionDown, scrollPos } = useScrollDirection();
  const pathname = usePathname();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const { w } = useWindowSize();

  const navConfig = [
    {
      pageName: "Produkty",
      url: "/products",
    },
    {
      pageName: "Technologie",
      url: "/?s=technology",
    },
    {
      pageName: "Reference",
      url: "/?s=references",
    },
    {
      pageName: "Filozofie",
      url: "/?s=philosophy",
    },
  ];

  const requestedSection = searchParams.get("s");
  const isThemeLight = theme.type === "light";
  const hasBurger = w <= device.tabletPortrait;

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useLayoutEffect(() => {
    if (requestedSection) {
      const sectionElement = document.querySelector(`#${requestedSection}`);
      scrollToElement(sectionElement, { offset: 0 });
      // reset search params to allow multiple attempts to navigate to the same section
      router.push(pathname.split("?")[0]);
    }
  }, [requestedSection]);

  return (
    <>
      {expanded && <DisableScroll />}
      <StyledNavbar
        animate={{ y: directionDown ? "-100%" : "0%" }}
        transition={{ ease: easing }}
        className={scrollPos > 50 ? "with-bg" : ""}>
        <Link href={"/"}>
          <Logo fill={isThemeLight ? "black" : "white"} />
        </Link>
        <BurgerWrapper>
          <Burger
            stroke={isThemeLight ? "black" : "white"}
            isOpen={expanded}
            onClick={() => setExpanded((p) => !p)}
          />
        </BurgerWrapper>

        <NavLinks
          initial={false}
          animate={
            hasBurger ? (expanded ? "expanded" : "collapsed") : "expanded"
          }
          variants={navlinkVariants}>
          {navConfig.map(({ pageName, url }) => (
            <NavLinkWrapper key={url}>
              <Micro
                className={`uppercase 
                ${isThemeLight ? "black" : "white"}
                ${pathname === url ? "active" : ""}
                navlink`}>
                <Link href={url} className='no-underline'>
                  {pageName}
                </Link>
              </Micro>
            </NavLinkWrapper>
          ))}
          <NavLinkWrapper>
            <Micro
              className={`uppercase ${
                isThemeLight ? "black" : "white"
              } navlink`}>
              <Link href={`${pathname}?s=contact`} className='no-underline'>
                {"Kontakt"}
              </Link>
            </Micro>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <CartBadge
              onClick={() => {
                setExpanded(false);
                setShowCart(true);
              }}>
              {lines.length === 0 ? (
                <CartIcon fill={expanded ? "white" : "black"} />
              ) : (
                <Micro className='navlink'>{lines.length}</Micro>
              )}
            </CartBadge>
          </NavLinkWrapper>
          <NavContact>
            <NavLinkWrapper>
              <Medium
                className={`uppercase ${!isThemeLight ? "black" : "white"}`}>
                <Link className='no-underline' href={`mailto: info@f33t.com`}>
                  info@f33t.com
                </Link>
              </Medium>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <Medium
                className={`uppercase ${!isThemeLight ? "black" : "white"}`}>
                <Link className='no-underline' href={`tel: +420774987654`}>
                  +420 774 987 654
                </Link>
              </Medium>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <Medium
                className={`uppercase ${!isThemeLight ? "black" : "white"}`}>
                <Link
                  className='no-underline'
                  href={`https://www.instagram.com/f33t_official/`}
                  target='_blank'>
                  ig @f33t_official
                </Link>
              </Medium>
            </NavLinkWrapper>
          </NavContact>
        </NavLinks>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
