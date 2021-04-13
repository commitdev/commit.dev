const TABLET_LARGE_PIXELS = 1024
const TABLET_SMALL_PIXELS = 677
const MOBILE_PIXELS = 449

export const TABLET_LARGE_SIZE = TABLET_LARGE_PIXELS + 'px'
export const TABLET_SMALL_SIZE = TABLET_SMALL_PIXELS + 'px'
export const MOBILE_SIZE = MOBILE_PIXELS + 'px'

// add 0.1 to min-widths to capture fractional widths between ranges
export const MOBILE_ONLY = `@media only screen and (max-width: ${MOBILE_PIXELS + 'px'})`
export const TABLET_SMALL_ONLY = `@media only screen and (min-width: ${MOBILE_PIXELS + 0.1 + 'px'}) and (max-width: ${TABLET_SMALL_PIXELS + 'px'})`
export const TABLET_LARGE_ONLY = `@media only screen and (min-width: ${TABLET_SMALL_PIXELS + 0.1 + 'px'}) and (max-width: ${TABLET_LARGE_PIXELS + 'px'})`
export const TABLET_ONLY = `@media only screen and (min-width: ${MOBILE_PIXELS + 0.1 + 'px'}) and (max-width: ${TABLET_LARGE_PIXELS + 'px'})`
export const DESKTOP_ONLY = `@media only screen and (min-width: ${TABLET_LARGE_PIXELS + 0.1 + 'px'})`
export const MOBILE_AND_TABLET_SMALL = `@media only screen and (max-width: ${TABLET_SMALL_PIXELS + 'px'})`
export const MOBILE_AND_TABLET = `@media only screen and (max-width: ${TABLET_LARGE_PIXELS + 'px'})`
export const TABLET_AND_DESKTOP = `@media only screen and (min-width: ${MOBILE_PIXELS + 0.1 + 'px'})`
export const TABLET_LARGE_AND_DESKTOP = `@media only screen and (min-width: ${TABLET_SMALL_PIXELS + 0.1 + 'px'})`

export const COLORS = Object.freeze({
  pink: '#ff86c6'
})

const COLOR_VARIATIONS = Object.freeze({
  light: 'LIGHT',
  dark: 'DARK',
})

export { COLOR_VARIATIONS }
