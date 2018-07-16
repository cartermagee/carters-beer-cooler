import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import history from '../History'
import { slide } from '../transitions'
import { media } from '../style-utils'

const StyledNav = styled.aside`
  background: #222;
  height: 100vh;
  display: grid;
  grid-row-gap: 5px;
  grid-template-rows: 64px 5fr 1fr;
  z-index: 3;
  width: 140px;
  ${media.tablet`
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.5s transform ease;
    transform: ${props => props.fold ? 'translateX(-145px)' : 'translateX(0)'};
    `}

`
const MainNav = styled.nav`
  align-items: stretch;
  display: grid;
  font-size: 21px; 
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  justify-items: stretch;
`
const TitleContainer = styled.button`
  align-items: center;
  background: #333; 
  color: #3ED863 !important;
  display: grid;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: #39D872;
    color: #fff !important;      
  }
`

const Icon = styled.img`
    width: 50%;
`

const NavItem = styled.button`
  padding-top: 7px;
  &:hover {
    background: #39D872;
    text-shadow: 1px 1px #3b4199;
  }
  &:hover ${Icon} {
    filter: drop-shadow(1px 1px 1px #3b4199);
  }
  &.active {
    background: #494949;
    color: #39D872;
    font-weight: 600;
  }
`
class Nav extends Component {
  render() {
    const { active, cap, fold, plus, toggle } = this.props
    return (
      <StyledNav fold={fold}>
        <TitleContainer 
          onClick={()=> {
            toggle(0)
            history.push({pathname: '/', state: slide})
          }} role="button">
        carter's beer
        </TitleContainer>

        <MainNav>
          <NavItem 
            onClick={()=> {
              if (active !== 1) {
                toggle(1) 
                history.push({pathname: '/beers', state: slide})
              }
            }} 
            className={(active === 1) ? "active" : ""}>
            <Icon src={cap} alt="link to All Beers page"/>
            <li>All Beers</li>
          </NavItem>

          <NavItem 
            onClick={()=> {
              if (active !== 2) {
                toggle(2)
                history.push({pathname: '/add', state: slide})
              }
            }} 
            className={(active === 2) ? "active" : ""}>
            <Icon src={plus} alt="link to Add Beers page"/>
            <li>Add Beers</li>
          </NavItem>
        </MainNav>
      </StyledNav>
    )
  }
}

Nav.propTypes = {
  active: PropTypes.number.isRequired,
  cap: PropTypes.string.isRequired,
  fold: PropTypes.bool.isRequired,
  plus: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired

}

export default Nav
