import React from 'react';

const CommentIndexItem = ({ comment }) => (
    <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
    </div>
);

export default CommentIndexItem;