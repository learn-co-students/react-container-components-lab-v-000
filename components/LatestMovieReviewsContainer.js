import React from 'react';
import MovieReviews from './MovieReviews'
const { fetch } = require('whatwg-fetch');

const APIURL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=b338b29158ca499bbbecd31876eb87a7'

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }
  componentWillMount() {
    fetch(APIURL)
    .then(res => res.json())
    .then(response => this.setState({reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
