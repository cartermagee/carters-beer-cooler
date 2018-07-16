import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const ChildDiv = styled.div`
  width: 100%;
  height: 100%;
`
const childFactoryCreator = (props) => child => React.cloneElement(child, props)

export default ({ transition = '', duration = 1500, pageKey, children }) => (
  <TransitionGroup
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition key={pageKey} timeout={duration}>
      <ChildDiv>{ children }</ChildDiv>
    </CSSTransition>
  </TransitionGroup>
)

export { default as slide } from './slide'
export { default as scale } from './scale'
export { default as slideUp } from './slideUp'
