import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSearchInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const URL = BASE_URL + `${this.state.searchTerm}`;
        fetch(URL)
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results }))

    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <h3>Searchable Movie Reviews</h3>
                <form onSubmit={this.handleSubmit}>
                <input
                    id='search-input'
                    type="text"
                    onChange={this.handleSearchInputChange} />
                <button type="submit">Submit</button>
                </form>
                {this.state.reviews.length > 0 && <h3>Search Results:</h3>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}            