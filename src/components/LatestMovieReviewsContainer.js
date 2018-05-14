import React from 'react';
import 'isomorphic-fetch';
import ReviewList from './MovieReviews.js';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <p>Latest Reviews:</p>
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
