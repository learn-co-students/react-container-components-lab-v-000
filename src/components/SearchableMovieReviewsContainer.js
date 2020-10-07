import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

   this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleFetch = (event) =>{
    fetch(URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(reviews => this.setState({
      reviews: reviews.results
    }))
  }

  handleSearch = (event) =>
    this.setState({
      searchTerm: event.target.value
    })

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFetch}>
          <label>Search</label>
          <input type="text" name="searchTerm" placeholder="Search Term" onChange={this.handleSearch}/>
          <button type="submit" onClick={this.handleFetch}>Submit</button>
        </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
