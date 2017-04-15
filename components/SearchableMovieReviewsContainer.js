const React = require('react')
const MovieReviews = require('./MovieReviews')

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


module.exports = SearchableMovieReviewsContainer
