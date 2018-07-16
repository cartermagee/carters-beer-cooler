import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'scale'
const duration = 1500

const ScaleOut = keyframes`
  0% {opacity: .9;}
  100% { opacity: 0; transform: translateX(-138px) translateZ(1000px); }
`
const ScaleIn = keyframes `
  0% {opacity: .1; transform: translateZ(-5000px) translateX(700px);}
  100% {transform: translateZ(0) translateX(0);}
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: absolute;
}
.${transitionClassName}-exit-active {
  animation: ${ScaleOut} ${duration}ms ease-in-out both;
  z-index: 1;
}
.${transitionClassName}-enter-active {
  animation: ${ScaleIn} ${duration}ms ease-in-out both;
  z-index: 2;
}
`

export default { transition: transitionClassName, duration }