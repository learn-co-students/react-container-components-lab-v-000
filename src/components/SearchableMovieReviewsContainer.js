import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = '289ac6c3f4844407a751768b9d25575f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;
            

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
    
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input id="search-input" type="text" onChange={this.handleSearchInputChange}/>
          <button type="submit">Submit</button>
        </form>
          <h1>Search Results:</h1>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;