import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AIvz0KOvDFa4W8y6aVd6vg6aB7lHYAq6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
        .then(data => this.setState({
          reviews: data.results
      }))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}
