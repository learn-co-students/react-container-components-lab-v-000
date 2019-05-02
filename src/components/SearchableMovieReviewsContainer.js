import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3aa8b1b7-cfa2-4892-affa-5624c248647a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    };

    handleInputChange = e => this.setState({ searchTerm: e.target.value });
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(movie => movie.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            });
        });
    };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Search for movie reviews"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleInputChange}
                    />
                    <input type="submit" />
                </form>
                { this.state.reviews.length > 0 ? <h2>Results for "{this.state.searchTerm}":</h2> : null }
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}