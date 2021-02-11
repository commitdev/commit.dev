import styled from 'styled-components'

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
`

const StyledLoader = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s linear;
  animation: rotate 1s infinite;
  position: fixed;
  margin-top: -75px;

  height: 75px;
  width: 75px;

  &:before,
  &:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 30px;
    width: 30px;
  }

  &:before {
    animation: ball1 1s infinite;
    background-color: #ff6ab9;
    box-shadow: 45px 0 0 #edc281;
    margin-bottom: 15px;
  }

  &:after {
    animation: ball2 1s infinite;
    background-color: #54ffff;
    box-shadow: 45px 0 0 #ffffff;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(0.8);
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(1.2);
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.8);
      -moz-transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 45px 0 0 #edc281;
    }
    50% {
      box-shadow: 0 0 0 #edc281;
      margin-bottom: 0;
      -webkit-transform: translate(22.5px, 22.5px);
      -moz-transform: translate(22.5px, 22.5px);
    }
    100% {
      box-shadow: 45px 0 0 #edc281;
      margin-bottom: 15px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 45px 0 0 #ffffff;
    }
    50% {
      box-shadow: 0 0 0 #ffffff;
      margin-top: -30px;
      -webkit-transform: translate(22.5px, 22.5px);
      -moz-transform: translate(22.5px, 22.5px);
    }
    100% {
      box-shadow: 45px 0 0 #ffffff;
      margin-top: 0;
    }
  }
`

const Loader = (props) => <StyledLoader {...props} />

export { Loader, LoaderContainer }
