import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise'
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = { reviews: [] }


  componentDidMount = () => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const reviews = data.results
        console.log(reviews)
        this.setState({ reviews: reviews })
      })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} header="Latest Reviews"/>
      </div>
    )
  }
}
