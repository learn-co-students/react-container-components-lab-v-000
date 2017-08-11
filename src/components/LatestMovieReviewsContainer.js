import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  fetchReviews = () => {
    fetch(URL)
      .then((res) => {
        if (res.status >= 400) {
          return new Error("Server gave bad response");
        }
        return res.json();
      })
      .then((reviews) => {
        this.updateReviews(reviews.results)
      });
  }

  updateReviews = (reviews) => {
    this.setState({
      reviews: reviews
    })
  }

  componentWillMount() {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
    );
  }
}

export default LatestMovieReviewsContainer
