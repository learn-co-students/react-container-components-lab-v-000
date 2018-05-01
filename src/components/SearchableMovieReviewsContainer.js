import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '023cf5d940ca414caf53ee138d59f027';
let searchTerm
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=` + searchTerm + `?api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: null
    }
  }

  componentWillUpdate(nextProps, nextState) {
    searchTerm = nextState.searchTerm
    fetch(URL).then(resp => resp.json()).then(reviews => this.setState({reviews: reviews.results}));
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
