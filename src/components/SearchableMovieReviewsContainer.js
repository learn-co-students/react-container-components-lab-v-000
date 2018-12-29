import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = { searchTerm: '', reviews: [] }
    }
    

    onSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results }));
    }

    onChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <form onSubmit={ this.onSubmit }>
                Search Movie Reviews
                <input type="text" onChange={ this.onChange } />
                <button type="submit">Search</button>
            </form>
            <h2>Movie Review By Search:</h2>
            <MovieReviews reviews={ this.state.reviews } />
        </div>
        );
    }
}


export default SearchableMovieReviewsContainer;