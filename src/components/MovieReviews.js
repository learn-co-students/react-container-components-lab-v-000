// Code MovieReviews Here

import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here



class MovieReviewsContainer extends Component {
   constructor(props) {
    super(props);
 
   
  }


 
  render() {
    return (
      <div className="review-list">
        
      </div>
    )
  }
}

MovieReviewsContainer.defaultProps = {
  reviews: ""
};


export default MovieReviewsContainer;
