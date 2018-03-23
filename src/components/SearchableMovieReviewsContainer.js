import React from 'react'
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '7e6f14db77e148fba9ed83eccc4ea656';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
  }

}

handleSubmit = event => {
  event.preventDefault()

  fetch(URL.concat(this.state.searchTerm))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(response => this.setState({ reviews: response.results }));
}

handleSearchInputChange = input => {
  this.setState({
    searchTerm: input.target.value
  })
}
  render(){
    return (
      <div
      className="searchable-movie-reviews">
      <form
        onSubmit={this.handleSubmit}
      >
        <input
              id='search-input'
              type="text"
              style={{width: 400}} 
              onChange={this.handleSearchInputChange}> 
        </input>
      <button type="Submit" >Submit</button>
      </form>
      <MovieReviews reviews={this.state.reviews}  />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;