

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch')

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=OeHIaCV61NAG70WTTbqpJcYO5QI8gSJM`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state={
      reviews:[]
    }
  }

componentDidMount(){
  fetch(URL).then(resp=>{
  return  resp.json()
  }).then(data=>{
    this.setState({
      reviews: data.results
    })
  })
}


  render(){

    return(
      <div className="latest-movie-reviews">
        <MovieReviews  reviews={this.state.reviews}/>

        {console.log(this.state.reviews)}

      </div>
    )
  }
}
