import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${"5b6ab10974ee47bb9592eac5f90138b9"}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then((r) => {
      return r.json()
    }).then((json) => {
      this.setState({ movies: json.results})
    })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.movies}/>
      </div>
    )
  }
}



export default LatestMovieReviewsContainer
