import React from 'react';
import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from "../../actions/video_actions";
import { fetchComments, createComment } from "../../actions/comment_actions";
import { getCommentsForVideo, getCommentsForVideoBeta, getRelatedVideos } from "../../reducers/selectors";

const mapSTP = (state, ownProps) => {
    let creatorId;
    let currentVideo;
    let commentSelect;
    let relatedVideoSelect;
    if (state.entities.videos[ownProps.match.params.videoId]) {
        let video = state.entities.videos[ownProps.match.params.videoId]
        creatorId = video.creatorId;
        currentVideo = video;
        // commentSelect = getCommentsForVideo(state,video.commentIds)
        commentSelect = getCommentsForVideoBeta(state,video.id)
        relatedVideoSelect = getRelatedVideos(state,video.relatedVideosIds)
    } else {
        creatorId = null;
        currentVideo = null;
        commentSelect = null;
        relatedVideoSelect = null;
    }


    return {
        // relatedvideos: selectRelatedVideo(state,videoId),
        currentVideo: currentVideo,
        hasEditPowers: creatorId === state.session.id,
        comments: commentSelect,
        currentUser: state.session.id,
        users: state.entities.users,
        relatedVideos: relatedVideoSelect
    }
}

const mapDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(createComment(comment))
})

export default connect(mapSTP,mapDTP)(VideoShow);