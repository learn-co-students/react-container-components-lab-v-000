'use strict'

import React from 'react';
import { fetch } from 'whatwg-fetch'
import MovieReviews from './MovieReviews.js';

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }//

    this.fetchMovieReviews = this.fetchMovieReviews.bind(this)
    this.url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json';
    this.api_key = '0d40badd897c439f8b57e2cd21ece61b';
  }

  fetchMovieReviews(){
    const url = this.url + '?api-key=' + this.api_key;
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
      .catch(ex => console.log('Parse failed.', ex) )
  }

  componentDidMount(){
    this.fetchMovieReviews();  
  }

  render(){
    const {reviews} = this.state;
    return(
      <div className="latest-movie-reviews">
        <h2>Latest</h2>
        <MovieReviews reviews={reviews}/>
      </div>
    );
  }
}