import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from "../../actions/video_actions";

const mapSTP = () => ({
    formType: "Upload Video",
    video: {}
})

const mapDTP = dispatch => ({
    action: video => dispatch(createVideo(video))
})

export default connect(mapSTP,mapDTP)(VideoForm);