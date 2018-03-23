// Code SearchableMovieReviewsContainer Here
import React from 'react'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6cf563c473654a21a73c2cb832395153';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
      super()
      
      this.state = {
        reviews: [],
        searchTerm: ''
      }
    }
    
    render() {
      return (
        <div className='searchable-movie-reviews'>
          <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
  }