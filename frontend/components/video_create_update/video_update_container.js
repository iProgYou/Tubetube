import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { updateVideo, deleteVideo } from '../../actions/video_actions';

const mapSTP = (state,ownProps) => {
    let vidObj;

    if (state.entities.videos[ownProps.match.params.videoId]) {
        vidObj = Object.assign(
            state.entities.videos[ownProps.match.params.videoId],
            {videoFile: null, thumbnailFile: null})
    } else {
        vidObj = null;
    }

    return {
        formType: "Update Video",
        video: vidObj,
        currentUserId: state.session.id
    }
}

const mapDTP = dispatch => ({
    action: (formData,videoId) => dispatch(updateVideo(formData,videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapSTP,mapDTP)(VideoForm);