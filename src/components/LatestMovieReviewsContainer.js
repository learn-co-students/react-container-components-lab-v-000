import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZuCtXhJchtq0rObDIRk9CNocmao4kVAA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
+ `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }


  fetchMovies(){
    fetch(URL)
      .then(res => res.json())
      .then(movies => this.setState({reviews: movies.results}) )
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        {this.state.reviews.map((review, index) => 
          <MovieReviews key={index} display_title={review.display_title} byline={review.byline} summary_short={review.summary_short} headline={review.headline}/>  
        )}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer



