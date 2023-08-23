"use client";

import { useTheme } from "styled-components";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import { Micro } from "../Typography/Micro";
import { Mini } from "../Typography/Mini";
import { NavLinks, StyledNavbar } from "./Styles/StyledNavbar";

interface NavbarProps {}

const navConfig = [
  {
    pageName: "Produkty",
    url: "/products",
  },
  {
    pageName: "Technologie",
    url: "/?s=technologie",
  },
  {
    pageName: "Reference",
    url: "/?s=reference",
  },
  {
    pageName: "Filozofie",
    url: "/?s=filozofie",
  },
  {
    pageName: "Kontakt",
    url: "/?s=kontakt",
  },
];

const Navbar = ({}: NavbarProps) => {
  const theme = useTheme();
  return (
    <StyledNavbar>
      <Link href={"/"}>
        <Logo fill={theme.type === "light" ? "black" : "white"} />
      </Link>
      <NavLinks>
        {navConfig.map(({ pageName, url }) => (
          <Micro
            className={`uppercase ${
              theme.type === "light" ? "black" : "white"
            }`}
            key={url}>
            <Link href={url} className='no-underline'>
              {pageName}
            </Link>
          </Micro>
        ))}
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
