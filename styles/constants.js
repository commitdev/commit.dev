export const TABLET_LARGE_SIZE = '1023px'
export const TABLET_SMALL_SIZE = '677px'
export const MOBILE_SIZE = '449px'

export const MOBILE_ONLY = `@media only screen and (max-width: ${MOBILE_SIZE})`
export const TABLET_SMALL_ONLY = `@media only screen and (min-width: ${MOBILE_SIZE}) and (max-width: ${TABLET_SMALL_SIZE})`
export const TABLET_LARGE_ONLY = `@media only screen and (min-width: ${TABLET_SMALL_SIZE}) and (max-width: ${TABLET_LARGE_SIZE})`
export const TABLET_ONLY = `@media only screen and (min-width: ${MOBILE_SIZE}) and (max-width: ${TABLET_LARGE_SIZE})`
export const DESKTOP_ONLY = `@media only screen and (min-width: ${TABLET_LARGE_SIZE})`
export const MOBILE_AND_TABLET_SMALL = `@media only screen and (max-width: ${TABLET_SMALL_SIZE})`
export const MOBILE_AND_TABLET = `@media only screen and (max-width: ${TABLET_LARGE_SIZE})`
export const TABLET_AND_DESKTOP = `@media only screen and (min-width: ${MOBILE_SIZE})`
export const TABLET_LARGE_AND_DESKTOP = `@media only screen and (min-width: ${TABLET_SMALL_SIZE})`

export const COLORS = Object.freeze({
  pink: '#ff86c6'
})

const COLOR_VARIATIONS = Object.freeze({
  light: 'LIGHT',
  dark: 'DARK',
})

export { COLOR_VARIATIONS }
