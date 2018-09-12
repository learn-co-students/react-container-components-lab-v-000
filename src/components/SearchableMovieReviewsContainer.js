import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Both container components should be class components that maintain state.
// The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews.

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  fetchQuery = () => {
    fetch(URL)
      .then(response => response.json() )
      .then(fetchedQueryReviews => {
        let updatedQueryReviews = fetchedQueryReviews.results.map(result => result.summary_short)
        this.setState({
          reviews: updatedQueryReviews
        })
      });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchQuery();
  }

  render() {
    return(
      <div className={'searchable-movie-reviews'}>
      {/* // QUERIED MOVIES HERE */}
      <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" /> 
          <input type="submit" name="submit" />
        </form>
      <MovieReviews movieArray={this.state.reviews}/>      
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer