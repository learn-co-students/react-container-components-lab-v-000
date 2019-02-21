import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'iNjeXaX1mAnhCod8Dv0OGFFtjJwu8jJ70';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: '' 
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results}))
    }

    handleSearchChange = event => this.setState({ searchTerm: event.target.value })

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews</label>
                    <input
                        id='search-input'
                        type="text"
                        onChange={this.handleSearchChange} />
                    <button type="submit">Submit</button>
                </form>
                { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer;