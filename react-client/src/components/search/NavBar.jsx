import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  z-index: 1000;
  top: 0.001px;
  display: grid;
  grid-template-columns: 5% 10% 50% 20% 5%;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  height: 66px;
  weight: auto;
  /* border-bottom: 0.5px solid #e6e6e6; */
  background-color: white;
  position: sticky;
`;

const Search = styled.div`
  position: relative;
  right: 2px;
  color: #282828;
  grid-column-start: 4;
  align-items: center;
  display: grid;
  font-size: 0.85rem;
  justify-content: right;
  cursor: pointer;
  user-select: none;
  /* font-variant-caps: petite-caps; */
  &:hover {
    color: #833ab4;
    font-weight: 700;
  }
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const SearchBar = styled.div`
  z-index: 100;
  height: 45px;
  width: 100%;
  color: #282828;
  box-sizing: border-box;
  grid-column-start: 2;
  /* font-variant-caps: small-caps; */
`;

const Close = styled.span`
  height: 12px;
  width: 12px;
  grid-column-start: 1;
  text-align: right;
  align-self: center;
  position: relative;
`;
const Input = styled.input`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  position: relative;
  right: 10px;
  text-align: right;
  font-size: 0.85rem;
  color: #282828;
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  cursor: text;
  font-style: oblique;
  /* font-variant-caps: petite-caps; */
`;

const Explore = styled.div`
  color: #282828;
  grid-column-start: 1;
  align-items: center;
  display: grid;
  font-size: 0.85rem;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  /* font-variant-caps: petite-caps; */
  &:hover {
    color: #833ab4;
    font-weight: 700;
  }
`;

const LiveStream = styled.div`
  color: #282828;
  grid-column-start: 2;
  align-items: center;
  display: grid;
  font-size: 0.85rem;
  justify-content: left;
  cursor: pointer;
  user-select: none;
  /* font-variant-caps: petite-caps; */
  &:hover {
    color: #833ab4;
    font-weight: 700;
  }
`;

const Brand = styled.div`
  position: relative;
  left: 150px;
  grid-column-start: 3;
  align-self: center;
  justify-self: center;
  font-size: 3rem;
  /* font-variant-caps: small-caps; */
  font-style: oblique;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: #833ab4;
  }
`;

const Slogan = styled.span`
  font-size: 0.85rem;
  &:hover {
    color: #833ab4;
  }
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSearch: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(event) {
    const { isSearch } = this.state;
    this.setState({
      isSearch: !isSearch
    })
  }

  render() {
    console.log(this.state.isSearch)
    return (
      <NavBarContainer>
        <Explore>
          Explore
        </Explore>
        <LiveStream>
          Mukbang
        </LiveStream>
        <Brand>
          mukbangly
          <Slogan>
            #BlackLivesMatter
          </Slogan>
        </Brand>
        {this.state.isSearch ?
          <SearchContainer>
            <span className="material-icons" onSubmit={this.handleClick} onClick={this.handleClick}>
              close
            </span>
            <SearchBar>
              <form onSubmit={this.handleEnter}>
                <Input type="text" placeholder='Search for mukbangs' value={this.state.value} onChange={this.handleChange} />
              </form>
            </SearchBar>
          </SearchContainer>
          : <Search onClick={this.handleClick} >
            Search
          </Search>
        }
      </NavBarContainer>
    )
  }
}

export default NavBar;

