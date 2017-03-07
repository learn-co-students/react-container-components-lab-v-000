const React = require('react');
const MovieReviews = require('./MovieReviews');
const {fetch} = require('whatwg-fetch');

const NYT_KEY = '24e1f6717e184bb19f3e8c45fa52cebc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +  `api-key=${NYT_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render () {
    return (
      <div className="latest-movie-reviews">
        <h1>The Latest Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;