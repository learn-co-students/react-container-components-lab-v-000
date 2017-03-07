const React = require('react');
const MovieReviews = require('./MovieReviews');
const {fetch} = require('whatwg-fetch');

const NYT_KEY = '24e1f6717e184bb19f3e8c45fa52cebc';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +  `api-key=${NYT_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;