import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }


  fetchReview = () => {
    fetch(URL)
    .then(reviews => this.setState({
      reviews
    }))
  }

  render () {
    const reviewList = this.state.reviews.map((review) => {
      <li>{review}</li>
    })
    
    return (
      <div className="latest-movie-reviews">
        <ul>{reviewList}</ul>
      </div>
    )
  }
}
