"use client";

import { ProductVariantConnection } from "@shopify/hydrogen-react/storefront-api-types";
import { useState } from "react";
import { Mini } from "../Typography/Mini";
import {
  StyledInsoleSizeVariants,
  VariantWrapper,
} from "./Styles/StyledInsoleSizeVariants";

interface InsoleSizeVariantsProps {
  variants: ProductVariantConnection;
  disableSelection?: boolean;
  onChange?: (id: number) => void;
}

const InsoleSizeVariants = ({
  variants,
  disableSelection = false,
  onChange = () => null,
}: InsoleSizeVariantsProps) => {
  const [selected, setSelection] = useState(0);

  return (
    <StyledInsoleSizeVariants>
      {variants.nodes.map(({ title, id, quantityAvailable }, i) => {
        const isAvaible = !!quantityAvailable;
        const isSelected = i === selected && !disableSelection;

        return (
          <VariantWrapper
            key={id}
            className={`
              ${isSelected ? "selected" : "not-selected"} 
              ${isAvaible ? "avaible" : "not-avaible"} 
              ${disableSelection ? "disabled" : "not-disabled"}
            `}
            onClick={() => {
              if (disableSelection || !isAvaible) return;
              setSelection(i);
              onChange(i);
            }}>
            <Mini className={`${isAvaible ? "black" : "gray500 line-through"}`}>
              {title}
            </Mini>
          </VariantWrapper>
        );
      })}
    </StyledInsoleSizeVariants>
  );
};

export default InsoleSizeVariants;
