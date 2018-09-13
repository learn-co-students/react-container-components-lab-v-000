import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super() 
    this.state = {
      reviews: []
    }
  }
  
  componentDidMount = () => {
    fetch(URL)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      
      .then(fetchedRecentReviews => {
        this.setState({
          reviews: fetchedRecentReviews.results
        })
      });
  }
  
  // The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
  render() {
    return(
      <div className={'latest-movie-reviews'} >
        <h2>Latest Movies</h2>
        <MovieReviews reviews={this.state.reviews} />      
      </div>
    );
  }
}

export default LatestMovieReviewsContainer