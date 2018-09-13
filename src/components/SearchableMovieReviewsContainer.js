import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCH_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

// Both container components should be class components that maintain state.
// The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews.

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  fetchQuery = () => {
    fetch(SEARCH_URL)
      .then(response => response.json() )
      .then(fetchedQueryReviews => {
        this.setState({
          reviews: fetchedQueryReviews.results
        })
      });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchQuery();
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>      
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchTerm" /> 
            <input type="submit" name="submit" />
        </form>
        <h3>Search Results</h3>
        <MovieReviews reviews={this.state.reviews}/>      
      </div>
    );
  }
}

