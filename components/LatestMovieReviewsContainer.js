const React = require('react');
const { fetch } = require('whatwg-fetch');
const MovieReviews = require('./MovieReviews');

const url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json"

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(jsonResp => this.setState({
        results: jsonResp.results
      }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;
