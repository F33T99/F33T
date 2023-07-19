import {
  ColorValues,
  colors,
  ColorKeysArray,
  ColorKeys,
} from "../consts/colors";

export const addColorClasses = (
  css?: (colors: ColorValues, key: ColorKeys) => string,
  createNewClasses?: boolean
) => {
  const colorArray = Object.keys(colors) as ColorKeysArray;
  return colorArray.map((key: ColorKeys) => {
    return `
        &.${key} {
          color: ${colors[key]};
          ${
            typeof css === "function" && !createNewClasses
              ? css(colors[key], key)
              : ""
          }
        }
        ${
          createNewClasses && typeof css === "function"
            ? css(colors[key], key)
            : ""
        }
      `;
  });
};
