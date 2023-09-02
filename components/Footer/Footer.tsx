"use client";

import { useTheme } from "styled-components";
import Link from "../Link/Link";
import { Large } from "../Typography/Large";
import { Nano } from "../Typography/Nano";
import { Small } from "../Typography/Small";
import { FooterLogo } from "./FooterLogo";
import {
  FooterAddress,
  FooterContacts,
  FooterEnd,
  FooterEshopLinks,
  FooterInstagram,
  FooterMiddle,
  FooterNavLinks,
  FooterOtherLinks,
  FooterTop,
  StyledFooter,
} from "./Styles/StyledFooter";
import { useWindowSize } from "../../hooks/useWindowSize";
import { device } from "../../consts/breakpoints";
import { FooterLogoPhone } from "./FooterLogoPhone";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const theme = useTheme();
  const isThemeLight = theme.type === "light";
  const fontColor = isThemeLight ? "black" : "white";
  const { w } = useWindowSize();

  return (
    <StyledFooter id={"contact"} data-hideable-navbar>
      {w <= device.phone ? (
        <FooterLogoPhone fill={isThemeLight ? "black" : "red400"} />
      ) : (
        <FooterLogo fill={isThemeLight ? "black" : "red400"} />
      )}
      <FooterTop>
        <Large className={`uppercase ${fontColor}`}>Every step counts</Large>

        <FooterNavLinks>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/products"}>
              Produkty
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/?s=technology"}>
              Technologie
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/?s=references"}>
              Reference
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/?s=philoshopy"}>
              Filozofie
            </Link>
          </Nano>
        </FooterNavLinks>
      </FooterTop>

      <FooterMiddle>
        <FooterContacts>
          <Small className={`uppercase ${fontColor}`}>
            <Link className='no-underline' href={`mailto: info@f33t.com`}>
              info@f33t.com
            </Link>
          </Small>
          <Small className={`uppercase ${fontColor}`}>
            <Link className='no-underline' href={`tel: +420774987654`}>
              +420 774 987 654
            </Link>
          </Small>
        </FooterContacts>

        <FooterInstagram>
          <Small className={`uppercase ${fontColor}`}>
            <Link
              className={`no-underline ${fontColor}`}
              href={"https://www.instagram.com/f33t_official/"}
              target='_blank'>
              ig @f33t_official
            </Link>
          </Small>
        </FooterInstagram>

        <FooterEshopLinks>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              FAQ
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              Velkoobchod
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              Péče o vložky
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              Výměna / Vrácení / Reklamace
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              Prodejci
            </Link>
          </Nano>
        </FooterEshopLinks>
      </FooterMiddle>

      <FooterEnd>
        <FooterOtherLinks>
          <Nano className={`uppercase ${fontColor}`}>
            <Link className='no-underline' href={"/"}>
              OBCHODNÍ PODMÍNKY
            </Link>
          </Nano>
          <Nano className={`uppercase ${fontColor}`}>
            <Link className={`no-underline`} href={"/"}>
              ZÁSADY ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ
            </Link>
          </Nano>
        </FooterOtherLinks>

        <FooterAddress>
          <Nano className={`uppercase ${`gray500`}`}>F33T s.r.o.</Nano>
          <Nano className={`uppercase ${`gray500`}`}>
            Random náměstí 24, Brno
          </Nano>
          <Nano className={`uppercase ${`gray500`}`}>IČO 01234567</Nano>
          <Nano className={`uppercase ${`gray500`}`}>DIČ CZ01234567</Nano>
        </FooterAddress>

        <Nano className={`uppercase ${`gray500`}`}>
          <Link
            className={`no-underline ${`gray500`}`}
            href={"https://steezy.studio/"}
            target='_blank'>
            steezy.studio
          </Link>
        </Nano>
      </FooterEnd>
    </StyledFooter>
  );
};

export default Footer;
