// Code SearchableMovieReviewsContainer Here

import React from "react"
import MovieReviews from "./MovieReviews.js"
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleClick(term) {
    fetch(URL + term)
      .then(response => {
        return response.json()
      })
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <h1 className="searchable-movie-reviews">
        Search{" "}
        <form onSubmit="handleClick()">
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </h1>
    )
  }
}

export default SearchableMovieReviewsContainer
