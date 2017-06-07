import React from 'react';
const { fetch } = require('whatwg-fetch');
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '955d636728d04cc4bac1eb955d059da8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            searchTerm: '',
            reviews: []
        };

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchInputChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.results }));
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search-input'>Search</label>
                    <input id='search-input' type="text" onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}