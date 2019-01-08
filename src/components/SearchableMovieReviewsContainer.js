import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  render() {
    return (
      <div className="searchable-movie-reviews">
        
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
