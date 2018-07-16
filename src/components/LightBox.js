import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Lightbox = styled.section`
    align-items: center;
    background: rgba(0,0,0,0.6);
    display: ${props => props.folded === true ? 'grid': 'none'};
    height: 100%;
    justify-items: center;
    position: fixed;
    width: 100%;
    z-index: 2;
`

const Dummy = styled.div`
    align-items: center;
    cursor: pointer;
    height: 100%;
    justify-items: center;
    position: fixed;
    width: 100%;
    z-index: 3;
`

const LightBoxInner = styled.div`
    color: #000;
    display: grid;
    justify-items: center;
    grid-template-columns: 1;
    grid-template-rows: auto;
    text-align: center;
    z-index: 4;
`
const Image = styled.img `
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px #000);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    margin-top: 10px;
    object-fit: cover;
    width: 100%;
`

const NameContainer = styled.figure `
    align-items: center;
    background: #bcbebd;
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 250px;
    z-index: 1;
`

const Name = styled.h1 `
    color: #222;
`

const LikeContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
`

const Thumb = styled.img `
    cursor: pointer;
    filter: ${props => props.invert ? 'invert(100%)' : 'invert(0)'};
    transform: ${props => props.flip ? 'rotate(180deg)' : 'rotate(0deg)'};
    width: 18px;
`

const CloseBtn = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 60px;
    right: 60px;
    transform: rotate(45deg);
`

const Img = styled.img`
    width: 100%;
`

const Btn = styled.button`
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

const XContainer = styled.div`
    transform: rotate(45deg);
    width: 1em;
`

const XImg = styled.img`
    width: 100%;
`


class LightBox extends Component {
  render() {
      const { index, deleteBeer, handleChange, like, folded, pint, plus, selected, toggleClose } = this.props
        return (
            <Lightbox folded={folded}>
                <Dummy onClick={toggleClose}>
                    <CloseBtn>
                        <Img src={plus}/>
                    </CloseBtn>
                </Dummy>
                <LightBoxInner>
                    <Image src={pint}/>
                    <NameContainer> 
                        <Name>{selected.name}</Name>
                        <LikeContainer>
                            <Thumb src={like} onClick={() => handleChange(index, selected, 1)}/>
                            <p>{selected.likes}</p>
                            <Thumb src={like} onClick={() => handleChange(index, selected, -1)} flip/>
                        </LikeContainer>
                        <Btn onClick={() => {
                            toggleClose() 
                            deleteBeer(selected)
                            }} dark delete>
                            <p>delete</p>
                            <XContainer>
                                <XImg src={plus} />
                            </XContainer>
                        </Btn>
                    </NameContainer>
                </LightBoxInner>
            </Lightbox>
        )
    }
}

LightBox.propTypes = {
    index: PropTypes.number.isRequired, 
    deleteBeer: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    like: PropTypes.string.isRequired,
    folded: PropTypes.bool.isRequired,
    pint: PropTypes.string.isRequired,
    plus: PropTypes.string.isRequired,
    selected: PropTypes.object.isRequired,
    toggleClose: PropTypes.func.isRequired
}

export default LightBox