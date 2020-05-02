import React from 'react';
import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from "../../actions/video_actions";

const mapSTP = (state, ownProps) => ({
    videos: state.entities.videos,
    // video: state.entities.videos[]
})

const mapDTP = dispatch => ({
    // fetchVideos = Dont need because they are already in state?
    fetchVideo = videoId = dispatch(fetchVideo(videoId))

})

export default connect(mapSTP,mapDTP)(VideoShow);