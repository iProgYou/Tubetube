import React from 'react';
import styles from './search_nav.module.css';
import { IoMdSearch } from 'react-icons/io';

class SearchNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange() {
        // console.log(this.state)
        return (e) => (
            this.setState({
                searchInput: e.target.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`search/${this.state.searchInput}`)
        // this.props.fetchVideos(this.state.searchInput)
        //     .then(() => this.props.history.push('search'))
        // this.props.submitSearch(this.state.searchInput)
        // Redirect here to search index
    }
    
    componentWillUnmount() {
        this.setState({
            searchInput: ""
        })
    }

    render() {

        const { searchInput } = this.state;
        return(
            <div>
                <form className={styles.searchContainer} onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        className={`standardInput ${styles.searchInput}`}
                        type="text" 
                        onChange={this.handleChange()}
                        value={searchInput}
                        placeholder="Search"
                    />
                    <button className={styles.searchButton}>
                        <IoMdSearch
                            size={23}
                        />
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchNav;