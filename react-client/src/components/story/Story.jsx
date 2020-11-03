import React, { Component } from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  justify-content: center;
`;

const UserIcon = styled.img`
  height: 80px;
  width: 80px;
  margin: 8px;
  object-fit: cover;
  vertical-align: bottom;
  cursor: pointer;
  border-radius: 50%;
`;

const RestaurantName = styled.span`
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 2px;
  font-size: 12.5px;
  font-weight: 500;
`;

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    const { restaurant } = this.props;
    return (
      <StoryContainer>
        <UserIcon src={restaurant.logo_url} />
        <RestaurantName>
          {restaurant.business_name.length > 10 ? restaurant.business_name.slice(0, 10) + '...' : restaurant.business_name}
        </RestaurantName>
      </StoryContainer>
    )
  }
}


export default Story;