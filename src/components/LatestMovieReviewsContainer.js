import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6314468ca29e4164a5701a35174457e4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(response => this.setState({ reviews:response.results }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>All the latest reviews:</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;