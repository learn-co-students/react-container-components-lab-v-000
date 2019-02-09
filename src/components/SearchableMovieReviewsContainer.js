import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = event => {
     event.preventDefault()
     fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then((reviews => this.setState({reviews: reviews.results})))
  }

  handleSearchInputChange = event => {
     this.setState({searchTerm: event.target.value})
  }

  render() {
     return (
        <div className="searchable-movie-reviews">
           <form onSubmit={this.handleSubmit}>
              <input
                 type="text"
                 onChange={this.handleSearchInputChange}
              />
           </form>
           <MovieReviews reviews={this.state.reviews} />
        </div>
     )
  }
}

export default SearchableMovieReviewsContainer;
