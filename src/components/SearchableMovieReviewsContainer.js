import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2050855b6e6e427ea3b6383fabf8d6d8';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results })) 
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <label>Input</label>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.query} />
                <input type="submit" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;