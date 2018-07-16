import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormWrapper = styled.section`
    align-items: center;
    background: url('${props => props.background}') center / cover no-repeat fixed;
    justify-items: center;
`

const Form = styled.form`
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    justify-items: center;
    padding: 10px;
    width: 400px;
`

const FormHeader = styled.h1`
    grid-column: 1/-1;
    grid-row: 1;
`

const FormLower = styled.div`
    display: flex;
    flex-direction: row;
    grid-column: 1/-1;
    grid-row: 2;
    justify-content: space-between;
    width: 280px;
`

const InputContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Input = styled.input `
    text-align: right;
    width: 200px;
`

const AddImg = styled.img`
    width: 100%;
`

const AddBtn = styled.button`
    background: none;
    border-radius: 5px;
    width: 3em;
    z-index: 3;
    &:hover ${AddImg} {
        filter: drop-shadow(0px 0px 4px #39D872);
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
    const { handleSubmit, plus } = this.props
    return (
      <FormWrapper background={this.state.background}>
          <Form id="addForm" onSubmit={handleSubmit}>
            <FormHeader>Add a Beer</FormHeader>
            <FormLower>
            <InputContainer> 
                <label htmlFor="username">Enter Beer Name</label>
                <Input type="text" name="name" placeholder="🍻😊🍻"/>
            </InputContainer>
            <AddBtn type="submit" form="addForm" value="submit">
                <AddImg src={plus} alt="add beer submit button"/>
            </AddBtn>
            </FormLower>
          </Form>
      </FormWrapper>
    )
  }
}

Cooler.propTypes = {
    background: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    plus: PropTypes.string.isRequired
}

export default Cooler
