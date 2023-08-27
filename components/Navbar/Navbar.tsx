"use client";

import { useCart } from "@shopify/hydrogen-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import scrollToElement from "scroll-to-element";
import { useTheme } from "styled-components";
import { CartToggleContext } from "../Cart/Cart";
import CartIcon from "../Icons/CartIcon";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import { Micro } from "../Typography/Micro";
import { CartBadge, NavLinks, StyledNavbar } from "./Styles/StyledNavbar";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { easing } from "../../consts/animationConfig";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const theme = useTheme();
  const { setShowCart } = useContext(CartToggleContext);
  const { lines } = useCart();
  const params = useParams();
  const searchParams = useSearchParams();
  const { directionDown, scrollPos } = useScrollDirection();
  const pathname = usePathname();
  const router = useRouter();

  // const [expanded, setExpanded] = useState(false);

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

  useLayoutEffect(() => {
    // setExpanded(false);
    if (requestedSection) {
      const sectionElement = document.querySelector(`#${requestedSection}`);
      scrollToElement(sectionElement, { offset: 0 });
      // reset search params to allow multiple attempts to navigate to the same section
      router.push(pathname.split("?")[0]);
    }
  }, [requestedSection]);

  return (
    <StyledNavbar
      animate={{ y: directionDown ? "-100%" : "0%" }}
      transition={{ ease: easing }}
      className={scrollPos > 50 ? "with-bg" : ""}>
      <Link href={"/"}>
        <Logo fill={isThemeLight ? "black" : "white"} />
      </Link>
      <NavLinks>
        {navConfig.map(({ pageName, url }) => (
          <Micro
            className={`uppercase ${isThemeLight ? "black" : "white"}`}
            key={url}>
            <Link href={url} className='no-underline'>
              {pageName}
            </Link>
          </Micro>
        ))}
        <Micro className={`uppercase ${isThemeLight ? "black" : "white"}`}>
          <Link href={`${pathname}?s=contact`} className='no-underline'>
            {"Kontakt"}
          </Link>
        </Micro>
        <CartBadge onClick={() => setShowCart(true)}>
          {lines.length === 0 ? <CartIcon /> : <Micro>{lines.length}</Micro>}
        </CartBadge>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
