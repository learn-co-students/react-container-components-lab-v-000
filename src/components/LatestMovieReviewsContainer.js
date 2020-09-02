import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// fetch a list of the most recent reviews and display them.
// have a top-level wrapping element with class latest-movie-reviews.
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(movies => {this.setState({reviews: movies.results})})
        .catch(error => alert(error.message))
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default LatestMovieReviewsContainer