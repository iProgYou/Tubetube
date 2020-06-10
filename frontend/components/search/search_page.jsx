import React from 'react';
import styles from './search_page.module.css';
import SearchPageItem from './search_page_item';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos(this.props.match.params.searchQuery)
    }

    render() {
        if(this.props.searchedVideos === undefined) return null;
        const displaySearch = this.props.searchedVideos !== [] ? (
            <div className={styles.searchPageItemContainer}>
                <h2>Search Results</h2>
                {Object.values(this.props.searchedVideos).map(video => (
                    <SearchPageItem key={video.id} video={video}/>
                ))}
            </div>
        ) : (
            <h3>No results found, please update your search query</h3>
        )
        return(
            <div className={styles.searchPageIndexContainer}>
                {displaySearch}
            </div>
        )
    }
}

export default SearchPage;