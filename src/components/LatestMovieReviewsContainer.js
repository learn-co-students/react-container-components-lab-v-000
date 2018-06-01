import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '3f4036d8e9f04c96aa1c352f5633e2cf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  componentDidMount(){
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
        })
      .then(data => this.setState({ reviews: data.results, isLoading: false }))
  }

  render() {
    const { reviews, isLoading, error } = this.state;
    return <div className="latest-movie-reviews">
            <MovieReviews reviews={reviews}/>
          </div>
  }
}
