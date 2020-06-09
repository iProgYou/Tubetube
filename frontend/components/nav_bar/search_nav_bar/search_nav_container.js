import { connect } from 'react-redux';
import SearchNav from './search_nav';
import { fetchVideos } from '../../../util/video_api_util';
import { withRouter } from 'react-router-dom';

const mapSTP = state => {

    return {
        videos: state.entities.videos
    }
}



export default withRouter(connect(mapSTP,null)(SearchNav));