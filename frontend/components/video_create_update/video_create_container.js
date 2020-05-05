import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from "../../actions/video_actions";

const mapSTP = state => ({
    formType: "Upload Video",
    video: {},
    currentUserId: state.session.id
})

const mapDTP = dispatch => ({
    action: video => dispatch(createVideo(video))
})

export default connect(mapSTP,mapDTP)(VideoForm);