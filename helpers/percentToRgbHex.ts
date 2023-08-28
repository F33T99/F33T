export default function percentToRgbHex(percents: number): string {
  const rgbPercent = 255 * 0.01;
  return Math.round(rgbPercent * percents).toString(16);
}
