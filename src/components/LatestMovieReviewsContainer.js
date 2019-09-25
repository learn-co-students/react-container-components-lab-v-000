import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cTNHUeB8GLZc28fAn0akz4OCj8UOQ3db';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(response => {
      this.setState({
        reviews: response.results
       })
    }
    );
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
      <MovieReviews movies={this.state.reviews} />
      </div>
    );
  }

}

export default LatestMovieReviewsContainer;


