import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';

const mapSTP = () => ({
    formType: "Update Video",
})

const mapDTP = dispatch => ({

})

export default connect(mapSTP,mapDTP)(VideoForm);