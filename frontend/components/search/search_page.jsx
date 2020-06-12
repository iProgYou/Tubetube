import React from 'react';
import styles from './search_page.module.css';
import SearchPageItem from './search_page_item';

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.search
        if (!this.props.searchedVideos || this.props.searchedVideos.length === 0) {
            // if the search returns nothing it will fetch videos twice, once in the navbar search and once here
            this.props.fetchVideos(this.props.match.params.searchQuery)
        }
    }

    // componentDidUpdate() {
    //     // this.props.fetchVideos(this.props.match.params.searchQuery)
    // }

    render() {
        if(!this.props.searchedVideos) return null;
        const displaySearch = this.props.searchedVideos.length !== 0 ? (
            <div className={styles.searchPageItemContainer}>
                <h2 className={styles.head}>Search Results</h2>
                {Object.values(this.props.searchedVideos).map(video => (
                    <SearchPageItem key={video.id} video={video}/>
                ))}
            </div>
        ) : (
            <div className={styles.searchPageItemContainer}>
                <h3 className={styles.head}>No results found, please update your search query</h3>
            </div>
        )
        return(
            <div className={styles.searchPageIndexContainer}>
                {displaySearch}
            </div>
        )
    }
}

export default SearchPage;