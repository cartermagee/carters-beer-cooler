import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import history from '../History'
import { scale } from '../transitions'

const OverlayContainer = styled.section`
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    justify-items: center;
    transition: 0.6s;
    width: 100%;
`

const CoolerContainer = styled.section`
    align-items: center;
    background: url('${props => props.background}') center / cover no-repeat fixed;
    justify-items: center;
    overflow: hidden;
    width: 100%;
`

const CoolerInner = styled.button`
    align-items: center;
    background: none;
    display: grid;
    height: 300px;
    justify-items: center;
    width: 400px;
`

const CoolerImg = styled.img`
    width: 100%;
    &:hover {
        filter: drop-shadow(1px 1px 10px #3b4199);
    }
`

class Cooler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: ''
        }
    }
    componentWillMount() {
        this.setState({ background: this.props.background })
    }

  render() {
      const { open, toggle } = this.props
    return (
      <CoolerContainer background={this.state.background}>
        <OverlayContainer>
            <CoolerInner onClick={()=> {
              toggle(1)
              history.push({pathname: '/beers', state: scale})
            }}>
                <CoolerImg src={open}/>
                <h1>Welcome</h1>
                <h2>Click here to enter the cooler</h2>
            </CoolerInner>
        </OverlayContainer>
      </CoolerContainer>
    )
  }
}

Cooler.propTypes = {
    open: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Cooler

