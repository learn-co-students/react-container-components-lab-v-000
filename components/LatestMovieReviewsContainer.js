import React from 'react';
import MovieReviews from './MovieReviews';

const { fetch } = require('whatwg-fetch');

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  componentWillMount() {
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=";
    const key = "93217d2db55e4260842a3249811ef39d";

    fetch(url + key)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

