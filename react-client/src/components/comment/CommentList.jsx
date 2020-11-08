import React from 'react';
import Comment from './Comment.jsx';
import styled from 'styled-components';

const CommentContainer = styled.div`
  position: relative;
  top: 12px;
  overflow-y: auto;
  height: 75px;
  width: auto;
`;

const CommentList = (props) => {

  const commentComponent = props.comments.map((comment, index) => {
    return (
      <Comment comment={comment} key={index} />
    )
  })

  return (
    <CommentContainer>
      {commentComponent}
    </CommentContainer>
  )
}

export default CommentList;