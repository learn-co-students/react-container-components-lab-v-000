import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5Vmvqd6Et9TRZejfvXpbGKLEpw2GK4p8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({ reviews }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
            <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
    // render() {
    //     return < reviews={this.state.reviews} />
    // }
}



export default LatestMovieReviewsContainer