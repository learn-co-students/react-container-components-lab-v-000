import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



export default class SearchableMovieReviewsContainer extends Component{
  constructor() {
    super()

    const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`;

    this.state = {
      reviews: []
    }
  }

  render() {
    return(
      "hello from MovieReviewsSearch"
    )
  }
}
