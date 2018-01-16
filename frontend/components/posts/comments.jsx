import React from 'react';

const Comments = ({ postId, users, posts, comments }) => {
  const postComments = posts[postId].comments.map((commentId) => {
    const comment = comments[commentId];
    const authorId = comment.author_id;

    return (
      <div className="comment"
        key={ commentId }>
        <img src={ users[authorId].image_url }/>
        <p>
          { comment.body }
        </p>
      </div>
    )
  });

  return (
    <div className="comments">
      { postComments }
    </div>
  );
};

export default Comments;