import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_API_KEY;
let searchTerm;
const URL = ' https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + `${searchTerm}`
            + `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor () {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = () => {

  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        {URL}
        <MovieReviews movies={this.state.movies} />
      </div>
    )
  }


}


// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

//
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
//
// fetch('//offline-news-api.herokuapp.com/stories')
// 	.then(function(response) {
// 		if (response.status >= 400) {
// 			throw new Error("Bad response from server");
// 		}
// 		return response.json();
// 	})
// 	.then(function(stories) {
// 		console.log(stories);
// 	});
