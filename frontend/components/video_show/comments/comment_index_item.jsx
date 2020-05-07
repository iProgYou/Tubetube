import React from 'react';
import styles from './comment.module.css';

const CommentIndexItem = ({ comment }) => (
    <div className={styles.comment}>
        <div className="biggerIcon">{comment.author[0].toUpperCase()}</div>
        <div className={styles.commentText}>
            <p className={styles.author}>{comment.author}</p>
            <p>{comment.body}</p>
        </div>
    </div>
);

export default CommentIndexItem;