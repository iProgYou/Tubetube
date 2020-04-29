import React from 'react';
import styles from './search_nav.module.css';

class SearchNav extends React.Component {
    constructor(props) {
        this.state = {
            searchInput: ""
        }
    }

    handleChange() {
        return (e) => (
            this.setState({
                searchInput: e.target.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitSearch(this.state.searchInput)
        // Redirect here to search index
    }

    render() {

        const { searchInput } = this.state;
        return(
            <form onSubmit={submitSearch}>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={searchInput}
                />
                <button>Icon</button>
            </form>
        )
    }
}

export default SearchNav;