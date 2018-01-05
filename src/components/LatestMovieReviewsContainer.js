import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';
require('es6-promise').polyfill();

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
 class LatestMovieReviewsContainer extends Component {
   constructor() {
     super();

     this.state = {
       reviews: []
     };
   }

   componentWillMount() {
     fetch(URL)
       .then(function(response) {
         if (response.status >= 400) {
           throw new Error("Bad response from server");
         }
         return response.json();
       })
       .then( (movieReviews => this.setState( { reviews: movieReviews.results })));
     }

   render() {
     return (
       <div className='latest-movie-reviews'>
         <h2>Latest Movie Reviews</h2>
         <MovieReviews reviews={this.state.reviews} />
       </div>
     );
   }
 }

export default LatestMovieReviewsContainer;
