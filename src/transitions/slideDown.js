import { injectGlobal, keyframes } from 'styled-components'

const transitionClassName = 'slideDown'
const duration = 2500

const moveToBottom = keyframes`
  from { transform: translateY(100%); }
`
const moveFromTop = keyframes`
  0% {transform: translateY(0%)}
  100% {transform: translateY(-100%)}
`

injectGlobal`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: absolute;
}
.${transitionClassName}-exit-active {
  animation: ${moveFromTop} ${duration}ms ease-in-out both;
  z-index: 1;
}
.${transitionClassName}-enter-active {
  animation: ${moveToBottom} ${duration}ms ease-in-out both;
  z-index: 2;
}
`

export default { transition: transitionClassName, duration }
