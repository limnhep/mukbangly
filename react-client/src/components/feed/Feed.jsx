import React, { Component } from 'react';
import styled from 'styled-components';
import icons from '../../icons/icons.js';

const Container = styled.div`
  margin-top: 50px;
  width: 514px;
  height: 714px;
  border-radius: 1px;
  overflow: hidden;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
  user-select: none;
`;
const ImagineContainer = styled.div`
  display: grid;
  grid-template-columns: 4% 4% 84% 4% 4%;
`;

const Next = styled.div`
  margin-top: 250px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  opacity: 0.7;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  &:hover {
    fill: #e6e6e6;
    background: darkgrey;
  };
  grid-column-start: 4;
`;

const Prev = styled.div`
  margin-top: 250px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  opacity: 0.7;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  &:hover {
    fill: #e6e6e6;
    background: darkgrey;
  };
  grid-column-start: 2;
`;

const RestaurantFrame = styled.div`
  display: flex;
  width: 514px;
  height: 65px;
  position: center;
  cursor: pointer;
`;

const RestaurantName = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  font-size: 13.5px;
  font-weight: 700;
`;

const RestaurantIcon = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  object-fit: cover;
  vertical-align: bottom;
  cursor: pointer;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 514px;
  height: 514px;
  border-radius: 1px;
  overflow: hidden;
  vertical-align: middle;
`;

const Heart = styled.span`
  position: relative;
  top: 5px;
  left: 8px;
  fill: white;
  stroke: black;
  stroke-width: 1.5;
  overflow: visible;
  transform: scale(0.8, 0.8);
`;

const NoHeart = styled.span`
  position: relative;
  top: 5px;
  left: 7px;
  fill: #f43939;
  stroke: black;
  stroke-width: 1.5;
  overflow: visible;
  transform: scale(0.8, 0.8);
`;

const Comment = styled.span`
  position: relative;
  left: 20px;
  cursor: pointer;
`;

const Share = styled.span`
  position: relative;
  left: 30px;
  cursor: pointer;
`;

const Description = styled.span`
  position: relative;
  left: 5px;
  top: 2px;
  font-size: 12px;
`;

const BusinessName = styled.span`
  font-weight: 550;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      length: 3,
      heart: false,
    }
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.resetImg = this.resetImg.bind(this);
  }

  prevImg() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    index < 1 ? index = 0 : index--;
    this.setState({
      activeIndex: index
    });
  }

  nextImg() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    index === length - 1 ? index = length - 1 : index++;
    this.setState({
      activeIndex: index
    });
  }

  resetImg() {
    this.setState({
      activeIndex: 0
    });
  }

  handleChange() {
    this.setState({
      heart: !this.state.heart
    });
  };

  render() {
    const { restaurant } = this.props;
    return (
      <Container>
        <RestaurantFrame>
          <RestaurantIcon src={restaurant.logo_url} /> <RestaurantName>{restaurant.business_name}</RestaurantName>
        </RestaurantFrame>
        <ImagineContainer>
          <Image src={restaurant.photo_url[this.state.activeIndex]} />
          <Prev>
            <span className="material-icons" onClick={() => { this.prevImg() }}>
              keyboard_arrow_left
            </span>
          </Prev>
          <Next>
            <span className="material-icons" onClick={() => { this.nextImg() }}>
              keyboard_arrow_right
            </span>
          </Next>
        </ImagineContainer>
        <div>
          <span onClick={() => { this.handleChange() }}>
            {this.state.heart ? <NoHeart><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d={icons.heartIcon} /></svg></NoHeart> : <Heart><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d={icons.heartIcon} /></svg></Heart>}
          </span>
          <Comment>
            <span className="material-icons">
              mode_comment
              </span>
          </Comment>
          <Share>
            <span className="material-icons">
              share
          </span>
          </Share>
          <div>
            <Description>
              <BusinessName>{restaurant.business_name}</BusinessName> {restaurant.photo_caption}
            </Description>
          </div>
        </div>
      </Container>
    )
  }
}

export default Feed;