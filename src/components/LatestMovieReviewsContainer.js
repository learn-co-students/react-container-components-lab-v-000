import React, { Component } from 'react';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '13e5334fb16e4c3eb7559b1fa7ffd070';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();

  this.state = {
    reviews: []
    };
  }

componentDidMount(){
  fetch(URL)
    .then(resp => resp.json())
    .then((reviews => this.setState({reviews})))
}

render(){
  return (
    <div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }
}
export default LatestMovieReviewsContainer;
