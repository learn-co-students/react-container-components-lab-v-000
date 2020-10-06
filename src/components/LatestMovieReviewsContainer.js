import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
  }

  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchMovies()
    console.log("mounted")
  }

  fetchMovies = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState ({
        reviews: data.results
      })
      //debugger;
      console.log(data.results)
      console.log(data.results.length)

    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews  reviews={this.state.reviews}/>
      </div>

    )
  }
}
export default LatestMovieReviewsContainer
