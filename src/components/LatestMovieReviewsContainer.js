import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ODQ42CiCKczLGDgHQqKcDiIVLoTgOaev';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(movieReviewData => this.setState({reviews: movieReviewData.results}))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Movie reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}