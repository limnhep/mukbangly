import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  z-index: 1000;
  top: 0.001px;
  display: flex;
  justify-content: center;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 60px;
  weight: auto;
  border-bottom: 0.5px solid #e6e6e6;
  background-color: white;
  position: sticky;
`;
const SearchBar = styled.div`
  justify-content: center;
  position: relative;
  top: 10px;
  height: 35px;
  width: 254.5px;
  color: rgb(34,34,34);
  background-color: rgb(247,247,247);
  padding: 6px 5px 5px 22px;
  border-radius: 5px;
  box-shadow: #e6e6e6 0px 0px 0px 1px inset;
  box-sizing: border-box;
`;

const Input = styled.input`
  text-align: center;
  font-size: 15px;
  color: grey;
  background-color: rgb(247,247,247);
  height: 20px;
  width: 200px;
  border: none;
  outline: none;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleEnter(event) {
    event.preventDefault()
    if (event.keyCode = 13) {
      this.props.searchRestaurant(this.state.value)
    }
  }

  render() {
    return (
      <NavBarContainer>
        <SearchBar>
          <form onSubmit={this.handleEnter}>
            <Input type="text" placeholder='Search' value={this.state.value} onChange={this.handleChange} />
          </form>
        </SearchBar>
      </NavBarContainer>
    )
  }
}

export default NavBar;