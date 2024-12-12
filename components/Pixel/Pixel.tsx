"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { pixel } from "../../lib/pixel";

const Pixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
    pixel.pageview();
  }, [pathname, loaded]);

  return (
    <Script
      id="fb-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
      data-pixel-id={process.env.NEXT_PUBLIC_FB_PIXEL_ID}
    />
  );
};

export default Pixel;
