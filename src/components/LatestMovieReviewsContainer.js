import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Components {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    let reviews = fetchReviews();
    this.setState({reviews})
  }

  fetchReviews() {
    return fetch(URL).then(response=> {
      response.json()
    });
  }

  // latestReviews(reviews) {
  //   return reviews.filter(review=> review.publication_date.split('-')[0] == (new Date()).getFullYear())
  // }

  render() {
    return (
      <MovieReviews reviews={this.state.reviews} />
    )
  }
}

export default LatestMovieReviewsContainer
