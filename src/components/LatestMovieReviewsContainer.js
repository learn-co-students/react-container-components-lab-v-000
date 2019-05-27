import React, { Component } from 'react';

import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


//my api key kwQSF4RBiwwr7AJJ4iyfULtaGGKAmljgkwQSF4RBiwwr7AJJ4iyfULtaGGKAmljg
// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super() 
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(response => this.setState({ reviews: response.results }))
  }
  
  render() {
    return(
        <div className="latest-movie-reviews">            
            <MovieReviews reviews={this.state.reviews} />
        </div>
    )
  }
}

export default LatestMovieReviewsContainer