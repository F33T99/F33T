"use client";

import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import { Mini } from "../Typography/Mini";
import { NavLinks, StyledNavbar } from "./Styles/StyledNavbar";

interface NavbarProps {}

const navConfig = [
  {
    pageName: "Produkty",
    url: "/?s=produkty",
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
  return (
    <StyledNavbar>
      <Link href={"/"}>
        <Logo />
      </Link>
      <NavLinks>
        {navConfig.map(({ pageName, url }) => (
          <Mini className='uppercase' key={url}>
            <Link href={"/"} className='no-underline'>
              {pageName}
            </Link>
          </Mini>
        ))}
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
