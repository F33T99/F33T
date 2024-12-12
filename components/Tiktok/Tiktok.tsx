"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { tiktok } from "../../lib/tiktok";

const Tiktok = ({}) => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
    tiktok.pageview();
  }, [pathname, loaded]);

  return (
    <Script
      id="tiktok-pixel"
      src="/scripts/tiktok.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
      data-tiktok-pixel-id={process.env.NEXT_PUBLIC_TIKTOK_ID}
    />
  );
};

export default Tiktok;
