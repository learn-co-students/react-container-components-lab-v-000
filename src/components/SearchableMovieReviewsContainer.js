import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query={searchTerm}'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState(response.results))
}

  render(){
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    )
  }

}
