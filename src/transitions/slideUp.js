import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slideUp'
const duration = 1500

const moveFromBottom = keyframes`
  from { transform: translateY(100%); }
`
const moveToTop = keyframes`
  0% {transform: translateY(0%)}
  100% {transform: translateY(-100%)}
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: absolute;
}
.${transitionClassName}-exit-active {
  animation: ${moveToTop} ${duration}ms ease-in-out both;
  z-index: 1;
}
.${transitionClassName}-enter-active {
  animation: ${moveFromBottom} ${duration}ms ease-in-out both;
  z-index: 2;
}
`

export default { transition: transitionClassName, duration }
