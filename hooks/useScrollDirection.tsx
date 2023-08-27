import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const initialState = {
    directionDown: false,
    scrollPos: 0,
  };
  const [direction, setDirection] = useState(initialState);

  let prevScrollPos = 0;
  const handleScroll = (e) => {
    if (window.scrollY < prevScrollPos || prevScrollPos < 0) {
      setDirection({ directionDown: false, scrollPos: prevScrollPos });
      prevScrollPos = window.scrollY;
      return;
    }

    // if URL has changed and page landed on the top then show navbar
    if (window.pageYOffset === 0) {
      setDirection(initialState);
      prevScrollPos = window.scrollY;
      return;
    }

    setDirection({ directionDown: true, scrollPos: prevScrollPos });

    prevScrollPos = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return direction;
};
