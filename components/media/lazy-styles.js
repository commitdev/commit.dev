import { css } from 'styled-components'

const lazyStyles = css`
  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyloaded {
    opacity: 1;
    transition: opacity 500ms;
  }
`

export { lazyStyles }
