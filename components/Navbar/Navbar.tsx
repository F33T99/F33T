"use client";

import { useCart } from "@shopify/hydrogen-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useLayoutEffect, useState } from "react";
import scrollToElement from "scroll-to-element";
import { useTheme } from "styled-components";
import { easing } from "../../consts/animationConfig";
import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
import { CartToggleContext } from "../Cart/Cart";
import { StyledNavbar } from "./Styles/StyledNavbar";
import { DesktopNavbar } from "./DesktopNavbar";
import PhoneNavbar from "./PhoneNavbar";

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
  const theme = useTheme();
  const { lines } = useCart();
  const [hideableNavbar, setHideableNavbar] = useState(false);
  const router = useRouter();

  const requestedSection = searchParams.get("s");
  const isThemeLight = theme.type === "light";

  useLayoutEffect(() => {
    const hideNavbarElements = document.querySelectorAll(
      "[data-hideable-navbar]"
    );

    if (hideNavbarElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          setHideableNavbar(entry.isIntersecting);
        }),
      { rootMargin: "-10% 0% -90% 0%" }
    );

    hideNavbarElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
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
    <StyledNavbar
      key={pathname}
      animate={{ y: hideableNavbar ? "-100%" : "0%" }}
      transition={{ ease: easing }}>
      {w <= device.tabletPortrait ? (
        <PhoneNavbar
          isThemeLight={isThemeLight}
          pathname={pathname}
          setShowCart={setShowCart}
          lines={lines}
        />
      ) : (
        <DesktopNavbar
          isThemeLight={isThemeLight}
          pathname={pathname}
          setShowCart={setShowCart}
          lines={lines}
        />
      )}
    </StyledNavbar>
  );
};

export default Navbar2;
