import React, { Component } from 'react';
import CommentList from '../comment/CommentList.jsx';
import axios from 'axios';
import styled from 'styled-components';
import icons from '../../icons/icons.js';

const Container = styled.div`
  margin-top: 50px;
  width: 514px;
  height: 690px;
  border-radius: 1px;
  overflow: hidden;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
  user-select: none;
`;

const ExpandContainer = styled.div`
  margin-top: 50px;
  width: 514px;
  height: 790px;
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
    background-image: linear-gradient(to right,#833ab4, #fd1d1d, #fcb045);
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
    background-image: linear-gradient(to right,#833ab4, #fd1d1d, #fcb045);
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
  left: 12px;
  top: 2px;
  font-size: 12px;
`;

const BusinessName = styled.span`
  font-weight: 550;
`;

const CommentSection = styled.span`
  font-size: 12px;
  font-weight: 400;
  position: relative;
  top: 10px;
  left: 11px;
  font-color: lightgrey;
`;

const PostCommentContainer = styled.div`
  position: relative;
  top: 20px;
  height: 50px;
  width: auto;
  box-sizing: border-box;
  border-radius: 1px;
  border-top: 0.5px solid #e6e6e6;
`;

const PostComment = styled.input`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 0.90rem;
  position: relative;
  left: 10px;
  color: #282828;
  height: 48px;
  width: 80%;
  border: none;
  outline: none;
  cursor: text;
  user-select: none;
`;

const PostButton = styled.input`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 0.85rem;
  position: relative;
  left: 10px;
  height: 48px;
  width: 15%;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  background-color: white;
  color: #ffa5a5;
`;


const NoPostButton = styled.input`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 0.85rem;
  position: relative;
  left: 10px;
  height: 48px;
  width: 15%;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  background-color: white;
  color: lightgrey;
`;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      length: 3,
      heart: false,
      commnet: false,
      userComments: [],
      postComment: '',
      commentId: ''
    }
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.resetImg = this.resetImg.bind(this);
    this.getUserComments = this.getUserComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.getLastCommentId = this.getLastCommentId.bind(this);
  }

  componentDidMount() {
    this.getUserComments(this.props.restaurant.homepage_id);
    this.getLastCommentId();
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
  }

  handleExpand() {
    this.setState({
      comment: !this.state.comment
    });
  }

  handleButton() {
    this.setState({
      commentId: this.state.commentId + 1
    })
  }

  handleComment(event) {
    this.setState({
      postComment: event.target.value
    })
  }

  handleSubmit(homepageId, event) {
    event.preventDefault();
    const { commentId } = this.state;
    axios.post(`/feed/${homepageId}/comments/${commentId}`, {
      user_comment: this.state.postComment,
      heart_comment: false,
      delete_comment: false,
      user_id: 72
    })
      .then(response => {
        const responseData = response.config.data.user_comment
        console.log(responseData)
        this.state.userComments.push({
          "user_name": "limyup",
          "user_comment": responseData
        })
        this.setState({
          userComments: this.state.userComments
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  getUserComments(homepageId) {
    axios.get(`/feed/${homepageId}/comments`)
      .then((response) => {
        this.setState({
          userComments: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getLastCommentId() {
    axios.get(`/lastCommentId`)
      .then((response) => {
        this.setState({
          commentId: response.data.comment_id + 1
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { restaurant } = this.props;
    const Wrapper = (
      <div>
        <RestaurantFrame>
          <RestaurantIcon src={restaurant.logo_url} /> <RestaurantName>{restaurant.business_name}</RestaurantName>
        </RestaurantFrame>
        <ImagineContainer>
          <Image src={restaurant.photo_url[this.state.activeIndex]} />
          {this.state.activeIndex === 0 ? null : <Prev>
            <span className="material-icons" onClick={() => { this.prevImg() }}>
              keyboard_arrow_left
        </span>
          </Prev>}
          {this.state.activeIndex === 2 ? null : <Next>
            <span className="material-icons" onClick={() => { this.nextImg() }}>
              keyboard_arrow_right
        </span>
          </Next>}
        </ImagineContainer>
        <div>
          <span onClick={() => { this.handleChange() }}>
            {this.state.heart ? <NoHeart><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d={icons.heartIcon} /></svg></NoHeart> : <Heart><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d={icons.heartIcon} /></svg></Heart>}
          </span>
          <Comment onClick={() => { this.handleExpand() }}>
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
        <div>
          {
            this.state.comment ?
              <div>
                <CommentSection>View all Comments:</CommentSection>
                <CommentList comments={this.state.userComments} />
                <PostCommentContainer>
                  {this.state.postComment.length === 0 ?
                    <form onSubmit={() => { event.preventDefault() }}>
                      <PostComment type="text" placeholder="Add a comment..." value={this.state.postComment} onChange={this.handleComment} />
                      <NoPostButton type="submit" value="Post" />
                    </form> :
                    <form onSubmit={() => { this.handleSubmit(restaurant.homepage_id, event) }}>
                      <PostComment type="text" placeholder="Add a comment..." value={this.state.postComment} onChange={this.handleComment} />
                      <PostButton type="submit" value="Post" onClick={() => { this.handleButton() }} />
                    </form>}
                </PostCommentContainer>
              </div> :
              null
          }
        </div>
      </div>
    );
    return (
      <div>
        {
          this.state.comment ?
            <ExpandContainer>
              {Wrapper}
            </ExpandContainer> :
            <Container>
              {Wrapper}
            </Container>
        }
      </div>
    )
  }
}

export default Feed;