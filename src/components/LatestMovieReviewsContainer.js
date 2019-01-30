import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'vNh9aCGP62I1SF40h9PtcIaZgXAVCA28';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

  constructor() {
  	super();

  	this.state = {
  	  reviews: []
  	};
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
  	return (
  	  <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews:</h2>
  	    <MovieReviews reviews={this.state.reviews} />
  	  </div>
  	);
  }

}

export default LatestMovieReviewsContainer;

/*
// LatestMovieReviewsContainer container component specifications:
// LatestMovieReviewsContainer should have state
// LatestMovieReviewsContainer should have a state property "reviews"
// LatestMovieReviewsContainer should have top-level element with class "latest-movie-reviews"
// LatestMovieReviewsContainer should fetch data from the New York Times API
// To fetch data from the New York Times API, make a fetch() call to the URL
// https://api.nytimes.com/svc/movies/v2/reviews/all.json
// When making a fetch() call to this URL, you will need to request an API key. 
// Once you have the key, you will "sign" your requests by attaching the key to the URL like so:
// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your key here>
// LatestMovieReviewsContainer will fetch a list of the most recent reviews and display them
// LatestMovieReviewsContainer should render reviews after reviews state is updated
*/