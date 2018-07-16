import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImgOverlay = styled.div `
    background: #30363352;
    color: #bcbebd;
    display: grid;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    text-transform: uppercase;
    transition: 0.2s;
    transform: translateY(150%);
    width: 100%;
`

const BeerImage = styled.img `
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px #000);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    margin-top: 10px;
    object-fit: cover;
    width: 100%;
`

const BeerItemStyled = styled.div`
    color: #000;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: auto;
    justify-items: center;
    overflow: hidden;
    text-align: center;
    &:hover ${ImgOverlay} {
        transform: translateY(0);
    }
`

const NameContainer = styled.figure`
    align-items: center;
    background: #bcbebd;
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 250px;
    z-index: 1;
`
const Name = styled.p`
    color: ${props => props.dark ? '#000' : '#fff'};
`

const LikeContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5px;
    width: 100px;
`

const Thumb = styled.img`
    cursor: pointer;
    transform: ${props => props.flip ? 'rotate(180deg)' : 'rotate(0deg)'};
    filter: ${props => props.invert ? 'invert(100%)' : 'invert(0)'};
    width: ${props => props.invert ? '1.3em' : '1em'};
    &:hover {
        transform: scale(1.1) ${props => props.flip ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`

const XContainer = styled.div`
    transform: rotate(45deg);
    width: 1em;
`

const XImg = styled.img`
    width: 100%;
`

const ImgOverlayInner = styled.div`
    align-items: center;
    align-self: center;
    background: #494949;
    border-radius: 10px;
    display: grid;
    filter: drop-shadow(0px 0px 3px rgba(225, 225, 225, 0.9));    
    justify-items: center;
    justify-self: center;
    min-height: 90px;
    padding: 11px;
`

const BtnContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 210px;
`

const ViewDelete = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
`

const Btn = styled.button `
    align-items: center;
    background: ${props => props.dark ? '#494949' : '#3ED863'};
    border-radius: 5px;
    color: #fff;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 0 6px;
    text-align: center;
    text-shadow: 1px 1px #3b4199;
    &:hover {
        background: ${props => props.delete ? "#ca4b4b" : '#3ED863'};
        box-shadow: 1px 1px #222;
        transform: scale(1.1);
    }
`
class BeerItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: ''
        }
    }
    
    componentDidMount() {
        this.setState({likes: this.props.details.likes})
    }

    componentWillReceiveProps() {
        this.setState({likes: this.props.details.likes})
    }

    render() {
        const { details, deleteBeer, handleChange, index, like, pint, plus, toggleOpen } = this.props
        return (
            <BeerItemStyled>
                <BeerImage src={pint}/>
                <NameContainer> 
                    <Name dark>{details.name}</Name>
                    <LikeContainer>
                        <Thumb src={like} alt="thumbs up like button" onClick={() => handleChange(index, details, 1)}/>
                        <p>{this.state.likes}</p>
                        <Thumb src={like} alt="thumbs down unlike button" onClick={() => handleChange(index, details, -1)} flip/>
                    </LikeContainer>
                    <Btn onClick={() => deleteBeer(details)} dark delete>
                        <p>delete</p>
                        <XContainer>
                            <XImg src={plus} alt="X delete beer button"/>
                        </XContainer>
                    </Btn>
                </NameContainer>
                <ImgOverlay>
                    <ImgOverlayInner>
                        <Name onClick={() => toggleOpen(index, details)}>{details.name}</Name>
                        <BtnContainer>
                            <LikeContainer>
                                <Thumb src={like} alt="thumbs up like button" onClick={() => handleChange(index, details, 1)} invert/>
                                <Thumb src={like} alt="thumbs down unlike button" onClick={() => handleChange(index, details, -1)} flip invert/>
                            </LikeContainer>
                            <ViewDelete>
                                <Btn type="button" onClick={() => toggleOpen(index, details)}>View Beer</Btn>
                                <Btn type="button" onClick={() => deleteBeer(details)} delete>
                                    <p>delete</p>
                                    <XContainer>
                                        <XImg src={plus} alt="X delete beer button"/>
                                    </XContainer>
                                </Btn>
                            </ViewDelete>
                        </BtnContainer>
                    </ImgOverlayInner>
                </ImgOverlay>
            </BeerItemStyled>
        )
    }
}

BeerItem.propTypes = {
    details: PropTypes.object ,
    deleteBeer: PropTypes.func,
    handleChange: PropTypes.func,
    index: PropTypes.string,
    like: PropTypes.string,
    pint: PropTypes.string,
    plus: PropTypes.string,
    toggleOpen: PropTypes.func
}

export default BeerItem



