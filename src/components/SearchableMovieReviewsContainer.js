import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
//const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
          //  + `api-key=${NYT_API_KEY}`;

const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' 
                    + `api-key=${NYT_API_KEY}`
            

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super() 
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()     
    
    fetch(SEARCH_URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(response => this.setState({ reviews: response.results}))
  }


  render() {
    return(
      <div className="searchable-movie-reviews">
      <h2>Search Our Reviews</h2>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
      <button type="submit">Submit</button>
      </form>

      {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer