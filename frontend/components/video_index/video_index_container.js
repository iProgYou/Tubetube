import VideoIndex from './video_index';
import { receiveVideos } from '../../actions/video_actions';
import { connect } from "react-redux";

const mapSTP = state => ({
    videos: state.entities.videos
})

const mapDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapSTP,mapDTP)(VideoIndex)