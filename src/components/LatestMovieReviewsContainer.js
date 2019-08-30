import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'yLrsGilEW5yVpGGNye5vEOO1784luAvQ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  state = {
      reviews: []
  }

  fetchApi = () => {

    fetch(URL)
        .then(response => response.json())
        .then(({results}) => this.setState({reviews: results}));


}

render() {
    return (
        <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    )
}

}

export default LatestMovieReviewsContainer
