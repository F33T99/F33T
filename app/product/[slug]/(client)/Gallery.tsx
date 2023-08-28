"use client";

import { Image } from "@shopify/hydrogen-react/storefront-api-types";
import { useState } from "react";
import Scrollbar from "../../../../components/Scrollbar/Scrollbar";
import { Medium } from "../../../../components/Typography/Medium";
import { device } from "../../../../consts/breakpoints";
import {
  GalleryImage,
  GalleryInner,
  ShowMore,
  ShowMoreButton,
  StyledGallery,
} from "./StyledGallery";

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [expanded, setExpanded] = useState(false);

  if (images.length === 0) return null;

  return (
    <StyledGallery className={expanded ? "expanded" : "collapsed"}>
      <Scrollbar
        scrollViewportWidthInterval={[device.tabletPortrait, Infinity]}>
        <GalleryInner>
          {images.map(({ url, width, height, altText }) => (
            <GalleryImage
              key={url}
              src={url}
              width={width}
              height={height}
              alt={altText}
            />
          ))}
        </GalleryInner>
      </Scrollbar>
      <ShowMore onClick={() => setExpanded((p) => !p)}>
        <ShowMoreButton>
          <Medium className='black max-width uppercase'>
            {expanded ? `Sbalit galerii` : `Rozbalit galerii`}
          </Medium>
        </ShowMoreButton>
      </ShowMore>
    </StyledGallery>
  );
};

export default Gallery;
