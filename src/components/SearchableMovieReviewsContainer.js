import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;
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
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/' + `query=${this.state.searchTerm}.json/api-key=${NYT_API_KEY}`)
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

  componentDidMount() {
    fetch(SEARCH_URL)
    .then(response => response.json())
    .then(queriedReviews => {
      this.setState({
        reviews: queriedReviews.results
      })
    })
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>      
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchTerm" /> 
            <input type="submit" name="submit" />
        </form>

        <MovieReviews reviews={this.state.reviews}/>      
      </div>
    );
  }
}

