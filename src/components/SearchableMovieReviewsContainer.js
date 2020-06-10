import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ODQ42CiCKczLGDgHQqKcDiIVLoTgOaev';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(movieReviewData => this.setState({reviews: movieReviewData.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="searchTerm"
                        id="searchTerm"
                        onChange={this.handleChange}
                        value={this.state.searchTerm}
                    />
                    <button type="submit">Search Movie Reviews</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}