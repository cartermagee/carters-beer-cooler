import React, { Component } from 'react';
import styled from 'styled-components'
import history from '../History'
import { scale } from '../transitions'

const NotFoundStyled = styled.section`
  align-items: center;
  background: #fff;
  color: #000;
  display: grid;
  justify-items: center;
`
const BackContainer = styled.div`
    align-items: center;
    display: grid;
    justify-items: center;
`

const BackBtn = styled.button`
    background: #494949;
    border-radius: 5px;
    color: #fff;
    width: 150px;
`

class NotFound extends Component {
    render() {
        // const { toggle } = this.props
        return (
            <NotFoundStyled>
                <BackContainer>
                    <h1>Not Found</h1>
                    <h2>the page you are looking for doesn't exist</h2>
                    <BackBtn 
                        onClick={() => {
                            this.props.toggle(1)
                            history.push({ pathname: '/beers', state: scale })}}>back to safety</BackBtn>
                </BackContainer>
            </NotFoundStyled>
        )
    }
}

export default NotFound