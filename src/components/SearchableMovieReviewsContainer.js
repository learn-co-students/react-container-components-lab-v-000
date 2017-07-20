import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  searchReviews(event) {
    event.preventDefault();
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }))
  }
  
  newTerm(term) {
    this.setState({searchTerm: term.target.value})
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchReviews}>
          <label id="value">Search term: </label>
          <input id="input" type="text" onchange={this.newTerm} />
          <button type="submit">Search reviews</button>
        </form>
        <div className="latest-movie-reviews">
          < MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
  )} 
  
}
export default SearchableMovieReviewsContainer