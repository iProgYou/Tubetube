export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'; 
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'; 
export const REMOVE_COMMENT = 'REMOVE_COMMENT'; 
import * as CommentAPIUtil from '../util/comment_util';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const fetchComments = videoId => dispatch => CommentAPIUtil.fetchComments(videoId)
    .then(payload => dispatch(receiveComments(payload)))

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
    .then(payload => dispatch(receiveComment(payload)))

export const deleteComment = comment => dispatch => CommentAPIUtil.deleteComment(comment)
    .then(() => dispatch(removeComment(comment)))