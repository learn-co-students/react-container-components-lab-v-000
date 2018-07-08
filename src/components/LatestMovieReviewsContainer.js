import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${"5b6ab10974ee47bb9592eac5f90138b9"}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then((r) => {
      return r.json()
    }).then((json) => {
      this.setState({ reviews: json.results})
    })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}



export default LatestMovieReviewsContainer
