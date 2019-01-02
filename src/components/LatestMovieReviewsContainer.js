import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '2263a46a1ebb4ec7afdfaba376704bd6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    
    state = ({reviews: []})
    


    componentDidMount(){
        fetch(URL)
            .then(response => response.json())
            .then(movieReviews => this.setState({ reviews: movieReviews.results}))           
    }



   render(){
       return (
        <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
        </div>
       )

   }
}