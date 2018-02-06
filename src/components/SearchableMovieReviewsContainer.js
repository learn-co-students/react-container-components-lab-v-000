import React, { Component } from 'react';
import MovieReview from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }


  render() {
    
    return (
      <div className="searchable-movie-reviews"><MovieReview reviews={this.state.reviews} /></div>
    );
  }
}

export default LatestMovieReviewsContainer;