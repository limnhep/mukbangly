import React, { Component } from 'react';
import styled from 'styled-components';
import Story from './Story.jsx';

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const StoryBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  top: 25px;
  height: 118px;
  width: 1272.5px;
  color: rgb(34,34,34);
  background-color: white;
  border-radius: 1px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

const StoryBarMini = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  top: 25px;
  height: 118px;
  width: 636.25px;
  color: rgb(34,34,34);
  background-color: white;
  border-radius: 1px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  render() {
    const { restaurants } = this.props;
    const storyComponents = restaurants.map((restaurant, index) => {
      return (
        <Story restaurant={restaurant} key={index} restaurants={this.props.restaurants} />
      )
    })
    return (
      <StoryContainer>
        {this.props.restaurants.length < 4 ?
          <StoryBarMini>
            {storyComponents}
          </StoryBarMini> :
          <StoryBar>
            {storyComponents}
          </StoryBar>}
        {/* <StoryBar>
          {storyComponents}
        </StoryBar> */}
      </StoryContainer>
    )
  }
}

export default StoryList;