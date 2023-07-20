"use client";

import { Large } from "../Typography/Large";
import { Nano } from "../Typography/Nano";
import { FooterLogo } from "./Styles/FooterLogo";
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
import { Small } from "../Typography/Small";
import Link from "../Link/Link";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <StyledFooter>
      <FooterLogo />
      <FooterTop>
        <Large className='uppercase'>Every step counts</Large>

        <FooterNavLinks>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Produkty
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Technologie
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Reference
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Filozofie
            </Link>
          </Nano>
        </FooterNavLinks>
      </FooterTop>

      <FooterMiddle>
        <FooterContacts>
          <Small className='uppercase'>
            <Link className='no-underline' href={`mailto: info@f33t.com`}>
              info@f33t.com
            </Link>
          </Small>
          <Small className='uppercase'>
            <Link className='no-underline' href={`tel: +420774987654`}>
              +420 774 987 654
            </Link>
          </Small>
        </FooterContacts>

        <FooterInstagram>
          <Small className='uppercase'>
            <Link
              className='no-underline'
              href={"https://www.instagram.com/f33t_official/"}
              target='_blank'>
              ig @f33t
            </Link>
          </Small>
        </FooterInstagram>

        <FooterEshopLinks>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              FAQ
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Velkoobchod
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Péče o vložky
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Výměna / Vrácení / Reklamace
            </Link>
          </Nano>
          <Nano className='uppercase tar'>
            <Link className='no-underline' href={"/"}>
              Prodejci
            </Link>
          </Nano>
        </FooterEshopLinks>
      </FooterMiddle>

      <FooterEnd>
        <FooterAddress>
          <Nano className='uppercase'>F33T s.r.o.</Nano>
          <Nano className='uppercase'>Random náměstí 24, Brno</Nano>
          <Nano className='uppercase'>IČO 01234567</Nano>
          <Nano className='uppercase'>DIČ CZ01234567</Nano>
        </FooterAddress>

        <FooterOtherLinks>
          <Nano className='uppercase'>
            <Link className='no-underline' href={"/"}>
              OBCHODNÍ PODMÍNKY
            </Link>
          </Nano>
          <Nano className='uppercase'>
            <Link className='no-underline' href={"/"}>
              ZÁSADY ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ
            </Link>
          </Nano>
        </FooterOtherLinks>

        <Nano className='uppercase'>
          <Link
            className='no-underline'
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
