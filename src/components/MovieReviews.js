// Code MovieReviews Here
import React from 'react'

class MovieReviews extends React.Component {

  renderMovie = (movie) => {
    return (
      <div className="review" key={movie.display_title}>
      <h3>{movie.display_title}</h3>
      <p>Author: {movie.byline}</p>
      <p>Review: {movie.summary_short}</p>
      <hr></hr>
    </div>
    )
  }

  render() {
    return (
      <div className="review-list">
      {this.props.reviews.map(this.renderMovie)}
      </div>
    )
  }
}
export default MovieReviews;