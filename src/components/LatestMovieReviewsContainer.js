import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '7pC8d2iDRSyEeIuw3ROxJn8Gk329B80k';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(`${URL}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
              reviews: data.results
            })            
        })
    }

    render() {
        return <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
            </div>
    }
}