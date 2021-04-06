import styled from 'styled-components'

const MediaContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;

  object,
  iframe,
  video,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    /* stylelint-disable-next-line */
    font-family: 'object-fit: cover';
    object-fit: cover;
    transform: translate3d(0, 0, 0);
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &.lazyloaded {
      transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 500ms;
    }
  }
`

export { MediaContainer }
