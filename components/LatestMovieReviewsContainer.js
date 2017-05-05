'use strict';

const React = require('react');
const { fetch } = require('whatwg-fetch');
const MovieReviews = require('./MovieReviews');

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=8b680b3733f14091bb77f382ea8592c5')
      .then(r => r.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
