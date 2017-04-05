const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const MovieReviews = require('./MovieReviews');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({ reviews: json });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;
