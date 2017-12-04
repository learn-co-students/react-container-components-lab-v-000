import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '011d7ccf7cbd4b22962afcdab0c07332';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

   constructor() {
      super();

      this.state = {
         reviews: []
      }
   }

   componentWillMount() {
      fetch(URL)
         .then(response => response.json())
         .then((reviews => this.setState({reviews: reviews.results})))
   }

   render() {
      return (
         <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
         </div>
      )
   }
}

export default LatestMovieReviewsContainer;