import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5eb83e79a1a44ba0adf77fb775683676';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }


  componentWillMount() {
    fetch(URL)
    .then(response => response.json())
    .then(reviews => {
      this.setState( {reviews: reviews.results} )
      })
    }


  render() {
    return <div className='latest-movie-reviews'  >
      <MovieReviews className='review-list' reviews={this.state.reviews} />
    </div>
  }


}
