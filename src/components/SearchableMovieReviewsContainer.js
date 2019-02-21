import React, { Component } from 'react';
//import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: 'none',
    }
    
    handleChange = (e) => this.setState({searchTerm: e.target.value})
    
    handleSubmit = (e) => {
        e.preventDefault()
        const NYT_API_KEY = 'Pbi5Hri4BEwtTYxr1Cc4GRnndv7L6gha';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`;
        fetch(URL)
        .then(res=>res.json())
        .then(json=>this.setState({reviews:json.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <h1>Search</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

