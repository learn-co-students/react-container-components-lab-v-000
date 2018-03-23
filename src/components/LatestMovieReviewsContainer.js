import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '7e6f14db77e148fba9ed83eccc4ea656';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
  fetch(URL)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(response => this.setState({ reviews: response.results }));
  }

  render(){
    return (
        <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
          <MovieReviews
            reviews={this.state.reviews}
           />
        </div>
    )
  }


}




export default LatestMovieReviewsContainer;
