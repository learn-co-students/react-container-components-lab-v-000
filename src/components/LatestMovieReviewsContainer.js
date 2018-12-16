import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '2050855b6e6e427ea3b6383fabf8d6d8';
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
            .then(response => this.setState({ reviews: response.results })) 
    }

    render() {
        return (
            <div className="latest-movie-reviews" >
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;