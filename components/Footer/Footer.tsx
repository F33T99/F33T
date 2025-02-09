"use client";

import { useTheme } from "styled-components";
import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
import Link from "../Link/Link";
import { Large } from "../Typography/Large";
import { Nano } from "../Typography/Nano";
import { Small } from "../Typography/Small";
import { FooterLogo } from "./FooterLogo";
import { FooterLogoPhone } from "./FooterLogoPhone";
import {
  FooterAddress,
  FooterContacts,
  FooterEnd,
  FooterInstagram,
  FooterMiddle,
  FooterNavLinks,
  FooterOtherLinks,
  FooterTop,
  StyledFooter,
} from "./Styles/StyledFooter";

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
        <Large className={`uppercase ${fontColor}`} as={"h2"}>
          Every step counts
        </Large>

        <FooterNavLinks>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className="no-underline" href={"/products"}>
              Produkty
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className="no-underline" href={"/?s=technology"}>
              Technologie
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className="no-underline" href={"/?s=references"}>
              Reference
            </Link>
          </Nano>
          <Nano className={`uppercase tar ${fontColor}`}>
            <Link className="no-underline" href={"/?s=philosophy"}>
              Filozofie
            </Link>
          </Nano>
        </FooterNavLinks>
      </FooterTop>

      <FooterMiddle>
        <FooterContacts>
          <Small className={`uppercase ${fontColor}`} as={"h3"}>
            <Link className="no-underline" href={`mailto: info@f33t.cz`}>
              info@f33t.cz
            </Link>
          </Small>
          <Small className={`uppercase ${fontColor}`} as={"h3"}>
            <Link className="no-underline" href={`tel: +420735282783`}>
              +420 735 282 783
            </Link>
          </Small>
        </FooterContacts>

        <FooterInstagram>
          <Small className={`uppercase ${fontColor}`}>
            <Link
              className={`no-underline ${fontColor}`}
              href={"https://www.instagram.com/f33t_official/"}
              target="_blank"
            >
              ig @f33t_official
            </Link>
          </Small>
        </FooterInstagram>

        {/* <FooterEshopLinks> */}
        {/*   <Nano className={`uppercase tar ${fontColor}`}> */}
        {/*     <Link className='no-underline' href={"/"}> */}
        {/*       FAQ */}
        {/*     </Link> */}
        {/*   </Nano> */}
        {/*   <Nano className={`uppercase tar ${fontColor}`}> */}
        {/*     <Link className='no-underline' href={"/"}> */}
        {/*       Péče o vložky */}
        {/*     </Link> */}
        {/*   </Nano> */}
        {/*   <Nano className={`uppercase tar ${fontColor}`}> */}
        {/*     <Link className='no-underline' href={"/"}> */}
        {/*       Výměna / Vrácení / Reklamace */}
        {/*     </Link> */}
        {/*   </Nano> */}
        {/* </FooterEshopLinks> */}
      </FooterMiddle>

      <FooterEnd>
        <FooterOtherLinks>
          <Nano className={`uppercase ${fontColor}`}>
            <Link
              target="_blank"
              className="no-underline"
              href={"/files/f33t_obchodni_podminky.pdf"}
            >
              OBCHODNÍ PODMÍNKY
            </Link>
          </Nano>
          <Nano className={`uppercase ${fontColor}`}>
            <Link
              target="_blank"
              className={`no-underline`}
              href={
                "/files/f33t_pravidla_zpracovani_ a_ochrany_osobnich_udaju.pdf"
              }
            >
              ZÁSADY ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ
            </Link>
          </Nano>
        </FooterOtherLinks>

        <FooterAddress>
          <Nano className={`uppercase ${`gray500`}`}>FootCorp s.r.o</Nano>
          <Nano className={`uppercase ${`gray500`}`}>
            Pražákova 1008/69, Štýřice, Brno
          </Nano>
          <Nano className={`uppercase ${`gray500`}`}>IČO 10915087</Nano>
          <Nano className={`uppercase ${`gray500`}`}>DIČ CZ10915087</Nano>
        </FooterAddress>

        <Nano className={`uppercase gray500`}>
          <Link
            className={`no-underline gray500`}
            href={"https://steezy.studio/"}
            target="_blank"
          >
            steezy.studio
          </Link>
        </Nano>
      </FooterEnd>
    </StyledFooter>
  );
};

export default Footer;
