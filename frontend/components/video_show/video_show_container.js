import React from 'react';
import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo,fetchVideos } from "../../actions/video_actions";

const mapSTP = (state, ownProps) => {
    return {
        // relatedvideos: selectRelatedVideo(state,videoId),
        currentVideo: state.entities.videos[ownProps.match.params.videoId],
        hasEditPowers: state.entities.videos[ownProps.match.params.videoId].creatorId === state.session.id
    }
}

const mapDTP = dispatch => ({
    // fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mapSTP,mapDTP)(VideoShow);