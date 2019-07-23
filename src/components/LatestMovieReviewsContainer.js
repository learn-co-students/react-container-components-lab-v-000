import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const NYT_API_KEY = '3xXpsfmy0XPp9Ja5SJi3FuITulycZxqy';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {


  constructor() {
    super()
    this.state = {
    reviews: []
}
  }

  fetchMovies = () => {
  fetch(URL)
    .then(res => res.json())
    .then(movies => {
      this.setState({reviews: movies.results})
    })
}

  componentDidMount() {
  this.fetchMovies()
}



render() {
  return (
    <div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews} />
    </div>
  )
}
}

export default LatestMovieReviewsContainer;
