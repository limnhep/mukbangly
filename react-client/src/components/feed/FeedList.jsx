import React, { Component } from 'react';
import styled from 'styled-components';
import Feed from './Feed.jsx';

const FeedListDiv = styled.div`
  display: grid;
  justify-content: center;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    const feedComponent = this.props.restaurants.map((restaurant, index) => {
      return (
        <Feed restaurant={restaurant} key={index} />
      )
    })
    return (
      <FeedListDiv>
        {feedComponent}
      </FeedListDiv>
    )
  }
}

export default FeedList;