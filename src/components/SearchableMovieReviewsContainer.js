import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          searchTerm: "",
          reviews: []
      };

  }

  handleInputChange = (e) => {
  this.setState({
    searchTerm: e.target.value
  })
}

handleSubmit = (e) => {
  const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
  const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
              + `api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`;
  e.preventDefault()

  fetch(URL)
  .then(response => {
      return response.json();
  })
  .then(data => {
    this.setState({
      reviews: data.results
    });
  });

}

  render() {

    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={ this.handleSubmit }>
        <input
          placeholder="Search for..."
          onChange={this.handleInputChange}
        />
        <button>Sumbit</button>
      </form>
      <h1>Searched Reviews</h1>
      <MovieReviews reviews={this.state.reviews} />
    </div>
    )

  }
}


export default SearchableMovieReviewsContainer;
