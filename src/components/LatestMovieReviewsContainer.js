import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    };

    // we use a lifecycle function -- componentDidMount() -- to then make the API call
    componentDidMount() {
        fetch(URL)
        .then(movies => movies.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            });
        });
    };

    // then, we render the containing div and utilize the presentation component
    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Movie Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    };
}

export default LatestMovieReviewsContainer
