import React from 'react';
import styles from './search_nav.module.css';
import { connect } from 'react-redux';
import { IoMdSearch } from 'react-icons/io';

class SearchNav extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            searchInput: ""
        }
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
                <form className={styles.searchContainer} onSubmit={e => handleSubmit(e)}>
                    <input 
                        className={`standardInput ${styles.searchInput}`}
                        type="text" 
                        onChange={this.handleChange()}
                        value={searchInput}
                        placeholder="Search"
                    />
                    <button className={`button ${styles.searchButton}`}>
                        <IoMdSearch
                            // size={25}
                        />
                    </button>
                </form>
            </div>
        )
    }
}

// const mapDTP = dispatch => ({
//     submitSearch: searchInput => dispatch(search(searchInput));
// })

// export default connect(null,mapDTP)(SearchNav)

export default SearchNav;