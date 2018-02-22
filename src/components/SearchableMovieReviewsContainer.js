import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '13e5334fb16e4c3eb7559b1fa7ffd070';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + '&query=';

// Code LatestMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();

  this.state = {
    reviews: [],
    searchTerm: ""
    };
  }

componentDidMount(){
  let searchURL = URL + this.state.searchTerm;
  fetch(searchURL)
    .then(resp => resp.json())
    .then((reviews => this.setState({reviews})))
}

render(){
  return (
    <div className="searchable-movie-reviews">
    <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
