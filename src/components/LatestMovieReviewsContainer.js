import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  // maybe i can adapt this 
  // componentDidMount() {
  //   fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
  //     .then(response => response.json())
  //     .then(bookData => this.setState({ books: bookData.books }))
  // }
  //

  render() {
    return(
      <div className="latest-movie-reviews"> hi</div>
    )
  }
}

export default LatestMovieReviewsContainer;
