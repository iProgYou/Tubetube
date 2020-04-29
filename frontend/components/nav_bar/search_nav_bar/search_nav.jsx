import React from 'react';
import styles from './search_nav.module.css';
import { connect } from 'react-redux';

class SearchNav extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            searchInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
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
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    value={searchInput}
                />
                <button>Icon</button>
            </form>
        )
    }
}

// const mapDTP = dispatch => ({
//     submitSearch: searchInput => dispatch(search(searchInput));
// })

// export default connect(null,mapDTP)(SearchNav)

export default SearchNav;