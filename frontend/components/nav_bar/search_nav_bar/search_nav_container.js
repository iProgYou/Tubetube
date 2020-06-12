import { connect } from 'react-redux';
import SearchNav from './search_nav';
import { fetchVideos } from '../../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mapSTP = state => {

    return {
        videos: state.entities.videos
    }
}

const mapDTP = dispatch => {
    return {
        fetchVideos: searchQuery => dispatch(fetchVideos(searchQuery)) 
    }
}

export default withRouter(connect(mapSTP,mapDTP)(SearchNav));