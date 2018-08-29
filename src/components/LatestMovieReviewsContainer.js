import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '52acdbdfd7d64c7c8650da384b8f7c08';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Reviews:</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
