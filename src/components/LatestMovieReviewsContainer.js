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
      // console.log(movies)
      this.setState({reviews: movies.results})
    })
}

  componentDidMount() {
  this.fetchMovies()
}

movieList = () => {
  // return this.state.reviews.map(movie => <MovieReviews movies={movie.display_title} reviews={movie.summary_short}/>)
}



render() {
  return (
    <div className="latest-movie-reviews">
    <MovieReviews movies={this.state.reviews} />
    <SearchableMovieReviewsContainer fetchMovies={this.fetchMovies} />
    </div>
  )
}
}

export default LatestMovieReviewsContainer;
