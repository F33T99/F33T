"use client";

import { useCart } from "@shopify/hydrogen-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useLayoutEffect, useState } from "react";
import scrollToElement from "scroll-to-element";
import { useTheme } from "styled-components";
import { easing } from "../../consts/animationConfig";
import { device } from "../../consts/breakpoints";
import useSectionInView from "../../hooks/useSectionInView";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ThemeType } from "../../types/global";
import { CartToggleContext } from "../Cart/Cart";
import { DesktopNavbar } from "./DesktopNavbar";
import PhoneNavbar from "./PhoneNavbar";
import { StyledNavbar } from "./Styles/StyledNavbar";

interface Navbar2Props {}

export const navConfig = [
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

const Navbar2 = ({}: Navbar2Props) => {
  const pathname = usePathname();
  const { setShowCart } = useContext(CartToggleContext);
  const { w } = useWindowSize();
  const searchParams = useSearchParams();
  const { lines } = useCart();
  const [hideableNavbar, setHideableNavbar] = useState(false);
  const theme = useTheme();
  const [navbarTheme, setNavbarTheme] = useState<ThemeType>("light");
  const router = useRouter();

  const requestedSection = searchParams.get("s");
  useSectionInView("[data-hideable-navbar]", (isInView, el) => {
    setHideableNavbar(isInView);
  });

  useSectionInView(
    "[data-background-color]",
    (isInView, el) => {
      if (isInView && el.dataset.backgroundColor) {
        setNavbarTheme(el.dataset.backgroundColor as ThemeType);
        return;
      }
      const fallbackColor = theme.type === "light" ? "light" : "dark";
      setNavbarTheme(fallbackColor);
    },
    "1% 0% -90%",
    [pathname]
  );

  useLayoutEffect(() => {
    if (requestedSection) {
      const sectionElement = document.querySelector(`#${requestedSection}`);
      scrollToElement(sectionElement, { offset: 0 });
      // reset search params to allow multiple attempts to navigate to the same section
      router.push(pathname.split("?")[0]);
    }
  }, [requestedSection]);

  return (
    <StyledNavbar
      key={pathname}
      animate={{ y: hideableNavbar ? "-100%" : "0%" }}
      transition={{ ease: easing }}
    >
      {w <= device.tabletPortrait ? (
        <PhoneNavbar
          theme={navbarTheme}
          pathname={pathname}
          setShowCart={setShowCart}
          lines={lines}
        />
      ) : (
        <DesktopNavbar
          theme={navbarTheme}
          pathname={pathname}
          setShowCart={setShowCart}
          lines={lines}
        />
      )}
    </StyledNavbar>
  );
};

export default Navbar2;
