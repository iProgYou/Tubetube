import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { updateVideo, deleteVideo } from '../../actions/video_actions';

const mapSTP = (state,ownProps) => ({
    formType: "Update Video",
    video: state.entities.videos[ownProps.match.params.videoId]

})

const mapDTP = dispatch => ({
    action: formData => dispatch(updateVideo(formData)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

export default connect(mapSTP,mapDTP)(VideoForm);