import { connect } from 'react-redux';
import SearchPage from './search_page';
import { nestSearchedVideos } from '../../reducers/selectors';

const mapSTP = state => {

    return{
        searchedVideos: nestSearchedVideos(state)
    }
}

const mapDTP = dispatch => {

    return {
        fetchVideos: searchQuery => dispatch(fetchVideos(searchQuery))
    }
}

export default connect(mapSTP,mapDTP)(SearchPage);