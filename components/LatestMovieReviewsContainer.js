import React from 'react'
import MovieReviews from './MovieReviews'
const { fetch } = require('whatwg-fetch');

export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=b9f8c663fcea4cb9b3e6b727df32963f")
      .then((res) => res.json())
      .then((json) =>
        this.setState({reviews: json.results.map(result => result.summary_short)})
      )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
