import React, { Component } from 'react';
import styled from 'styled-components';
import Story from './Story.jsx';

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
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
        <Story restaurant={restaurant} key={index} />
      )
    })
    return (
      <StoryContainer>
        <StoryBar>
          {storyComponents}
        </StoryBar>
      </StoryContainer>
    )
  }
}

export default StoryList;