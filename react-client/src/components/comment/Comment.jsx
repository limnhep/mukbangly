import React, { Component } from 'react';
import styled from 'styled-components';
import icons from '../../icons/icons.js';

const EachComment = styled.div`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  top: 10px;
  font-size: 12px;
  position: relative;
  left: 12px;
  height: 15px;
  width: 480px;
  margin-top: 2px;
  margin-bottom: 2px;
  display: grid;
  grid-template-columns: 95% 5%;
`;

const UserName = styled.span`
  font-weight: 550;
`;

const UserSection = styled.span`
  grid-column-start: 1;
`;

const Heart = styled.span`
  position: relative;
  top: 5px;
  left: 8px;
  fill: white;
  stroke: black;
  stroke-width: 1.5;
  overflow: visible;
`;

const HeartComment = styled.span`
  grid-column-start: 2;
  position: relative;
  bottom: 10px;
  cursor: pointer;
`;

const NoHeart = styled.span`
  position: relative;
  top: 5px;
  left: 7px;
  fill: #f43939;
  stroke: black;
  stroke-width: 1.5;
  overflow: visible;
`;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: false,
      exit: false,
      heart: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      heart: !this.state.heart
    });
  }

  render() {
    const { comment } = this.props;
    return (
      <div>
        <EachComment>
          <UserSection><UserName>{comment.user_name}</UserName> {comment.user_comment.length >= 50 ? comment.user_comment.slice(0, 50) + '...' : comment.user_comment}</UserSection>
          <HeartComment onClick={() => { this.handleChange() }}>
            {this.state.heart ? <NoHeart><svg viewBox="0 0 50 20" height="18" width="18"><path d={icons.heartIcon} /></svg></NoHeart> : <Heart><svg viewBox="0 0 50 20" height="18" width="18"><path d={icons.heartIcon} /></svg></Heart>}
          </HeartComment>
        </EachComment>
      </div>
    )
  }
}

export default Comment;