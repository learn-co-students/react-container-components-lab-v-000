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
    .then(results => results.json())
    .then(reviews => {
      this.setState({reviews: reviews.results})
    })
  };

  componentDidMount(){
    this.fetchReviews();
  }

  render() {
    return (
        <div className="latest-movie-reviews">
          <h1>Latest reviews</h1>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
    );
  }
}

export default LatestMovieReviewsContainer;
