import styled from 'styled-components'

const FadeOut = styled.div`
  display: inline-block;
  animation: ${(props) => (props.show ? 'none' : 'fadeOut 0.5s linear')};
  opacity: ${(props) => (props.show ? 1 : 0)};
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const FadeIn = styled.div`
  animation: fadeIn 0.5s linear;
  opacity: ${(props) => (props.show ? 1 : 0)};
  display: ${(props) => (props.show ? 'inline-block' : 'none')};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Fade = styled.div``

export { FadeIn, FadeOut }
