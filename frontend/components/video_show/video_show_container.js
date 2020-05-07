import React from 'react';
import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from "../../actions/video_actions";
import { fetchComments } from "../../actions/comment_actions";
import { getCommentsForVideo } from "../../reducers/selectors";

const mapSTP = (state, ownProps) => {
    let creatorId;
    let currentVideo;
    let commentSelect;
    if (state.entities.videos[ownProps.match.params.videoId]) {
        creatorId = state.entities.videos[ownProps.match.params.videoId].creatorId;
        currentVideo = state.entities.videos[ownProps.match.params.videoId];
        commentSelect = getCommentsForVideo(state,state.entities.videos[ownProps.match.params.videoId].commentIds)
    } else {
        creatorId = null;
        currentVideo = null;
        commentSelect = null;
    }

    return {
        // relatedvideos: selectRelatedVideo(state,videoId),
        currentVideo: currentVideo,
        hasEditPowers: creatorId === state.session.id,
        comments: commentSelect,
    }
}

const mapDTP = dispatch => ({
    // fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchComments: videoId => dispatch(fetchComments(videoId))
})

export default connect(mapSTP,mapDTP)(VideoShow);