import React, {Component} from 'react';

class Search extends Component {
    render() {       
        return(
        <form className="navbar-search">
            <input type="text" name="Search" className="navbar-search-input" placeholder="What you looking for..." />
            <i className="fas fa-search" />
        </form>

        )
    }
}
export default Search;