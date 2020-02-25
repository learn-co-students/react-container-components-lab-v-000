import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(results => this.setState({reviews: results.results}))
    }

    handleFormChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="search-bar" placeholder="Enter Keyword" onSubmit={this.handleFormSubmit} >
                    <input onChange={this.handleFormChange} value={this.state.searchTerm}></input>
                </form>
                <h2>Search Results:</h2>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}