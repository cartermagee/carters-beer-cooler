import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import history from '../History'
import { slideUp } from '../transitions'

import BeerItem from './BeerItem'
import LightBox from './LightBox'

const AllBeersContainer = styled.section `
  background: url('${props => props.background}') center / cover no-repeat fixed;
  box-shadow: inset 0 0 10px #000;
  grid-auto-flow: dense;
  grid-auto-rows: 390px;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, 250px);
  overflow: scroll;
  padding: 2rem; 
`

const PlusIcon = styled.img`
  width: 200px;
`

const AddBeer = styled.button`
  height: 350px;
  width: 250px;
  &:hover ${PlusIcon} {
    filter: invert(86.7%) drop-shadow(0px 0px 4px #39D872);
  }
` 

class AllBeers extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.toggleClose = this.toggleClose.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.state = {
      background: '',
      folded: false,
      selected: {},
      index: 0
    }
  }
  
  componentWillMount() {
    this.setState({ background: this.props.background})
  }

  toggleOpen(i, beer) {
    const allBeerState = {...this.state}
    let selected = allBeerState.selected
    selected = beer
    let folded = allBeerState.folded
    folded = !folded
    const index = parseInt(i, 10)
    this.setState({ folded, selected, index })
  }

  toggleClose() {
    let folded = {...this.state.folded}
    folded = !folded
    this.setState({ folded })
  }

  handleChange(i, selected, like){
    const beer = this.props.beers[i]
    const updatedBeer = {
      ...beer,
      likes: selected.likes += like
    }
    this.props.updateLikes(i, updatedBeer)
  }
  
  render() {
    const { beers, deleteBeer, like, pint, plus, toggle } = this.props
    const {  background, index, folded, selected } = this.state
    const imageProps = {
      like: like,
      pint: pint,
      plus: plus
    }

    return (
      <section>
        <LightBox index={index} deleteBeer={deleteBeer} {...imageProps} handleChange={this.handleChange} folded={folded} selected={selected} toggleClose={this.toggleClose} toggleOpen={this.toggleOpen}/>
        <AllBeersContainer background={background}>
          {Object.keys(beers).map((key) => <BeerItem deleteBeer={deleteBeer} details={beers[key]} handleChange={this.handleChange} index={key} key={key} like={like} pint={pint} plus={plus} toggleOpen={this.toggleOpen}/>)}
          <AddBeer onClick={()=> {
                toggle(1)
                history.push({pathname: '/Add', state: slideUp})
              }} >
            <PlusIcon src={plus} alt="add beer icon"/>
          </AddBeer>
        </AllBeersContainer>
      </section>
    )
  }
}

AllBeers.propTypes = {
  background: PropTypes.string.isRequired,
  beers: PropTypes.any.isRequired,
  deleteBeer: PropTypes.func.isRequired,
  like: PropTypes.string.isRequired,
  pint: PropTypes.string.isRequired,
  plus: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
}

export default AllBeers