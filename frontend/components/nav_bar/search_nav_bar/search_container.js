import { connect } from 'react-redux';
import SearchNav from './search_nav';
import { fetchVideos } from '../../../util/video_api_util';

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

export default connect(mapSTP,mapDTP)(SearchNav)