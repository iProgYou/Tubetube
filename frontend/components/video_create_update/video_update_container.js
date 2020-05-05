import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { updateVideo, deleteVideo } from '../../actions/video_actions';

const mapSTP = (state,ownProps) => ({
    formType: "Update Video",
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUserId: state.session.id
})

const mapDTP = dispatch => ({
    action: (formData,videoId) => dispatch(updateVideo(formData,videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapSTP,mapDTP)(VideoForm);