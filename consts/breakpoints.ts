export const device = {
  miniPhone: 400,
  phone: 600,
  tabletPortrait: 1024,
  tabletLandscape: 1200,
  smallNotebook: 1450,
  mediumNotebook: 1600,
  largeNotebook: 1920,
  monitor: 1921,
} as const;

export const breakpoint = {
  smallPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px) `,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px) `,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  mediumNotebook: `@media (max-width: ${device.mediumNotebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px) `,
} as const;
