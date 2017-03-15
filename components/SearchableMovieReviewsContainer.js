const React = require('react');
const MovieReviews = require('./MovieReviews');
const { fetch } = require('whatwg-fetch');

const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="


class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(url + "query")
      .then(response => response.json())
      .then(jsonResp => this.setState({
        results: jsonResp.results
      }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

module.exports = SearchableMovieReviewsContainer;
