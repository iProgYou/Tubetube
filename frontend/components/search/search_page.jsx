import React from 'react';
import SearchPageItem from './search_page_item';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchVideos(this.props.match.params.searchQuery)
    }

    render() {
        if(this.props.searchedVideos === undefined) return null;
        debugger
        const displaySearch = this.props.searchedVideos !== [] ? (
            <div>
                <h2>Search Results</h2>
                {Object.values(this.props.searchedVideos).map(video => (
                    <SearchPageItem key={video.id} video={video}/>
                ))}
            </div>
        ) : (
            <div>
                <h3>No results found, please update your search query</h3>
            </div>
        )
        return(
            <div>
                {displaySearch}
            </div>
        )
    }
}

export default SearchPage;