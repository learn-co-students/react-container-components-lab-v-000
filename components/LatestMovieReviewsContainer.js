const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + 'api-key=fda304e4de3646db8988f9decac69e30'

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL).then(res => this.setState({ reviews: JSON.parse(res) }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;