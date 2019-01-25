import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZTTbGrPV1BvM1S2GNfsRGFVaIJvHIlJt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `query=${this.state.searchTerm}&` + `api-key=${NYT_API_KEY}`)
            .then(response => response.json())
            .then(reviews => this.setState({ reviews: reviews.results }))
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)} className="searchable-movie-reviews">
                <input type="text" name="searchTerm" value={this.state.search} onChange={this.handleChange} />
                <input type="submit" />
                <MovieReviews reviews={this.state.reviews} />
            </form>
        )
    }
}

export default SearchableMovieReviewsContainer;