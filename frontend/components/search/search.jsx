import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            loggedIn: this.props.loggedIn
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
        this.props.getSearchResults(e.target.value)
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        let results
        if (this.props.results.length && this.state.value !== '') {
            results = this.props.results.map(result => {
                return (
                    <li className="result-li" key={result.id}>
                        <Link to={`/teams/${result.id}`} style={{ textDecoration: 'none', color: 'black' }} id="search-link"> 
                            <div id="search-result-team">{result.name}</div>
                        </Link>
                    </li>
                )
            })
        }

        if (this.props.results.length === 0 && this.state.value !== '') {
            return (
                <div>
                    <form className="search-form">
                        <input onClick={this.handleClick}
                            onChange={this.handleSearch}
                            type="search" placeholder="Search by team"
                            className="search-input"
                            value={this.state.value} />
                    </form>
                    <ul>
                        <li className="result-li">
                            No results found
                        </li>
                    </ul>
                </div>
            )
        }

        return (
            <div className="default-searchbar-div">
                <form className="search-form">
                    <input onClick={this.handleClick}
                        onChange={this.handleSearch}
                        type="search" placeholder="Search by team"
                        className="search-input"
                        value={this.state.value} />
                </form>
                <ul className="result-drop-ul">
                    {results}
                </ul>
            </div>
        )
    }
}

export default Search;