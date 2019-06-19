import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EhUOstEOAP5S73Gd3zrrTQSlbUGPGCBU';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;



class LatestMovieReviewsContainer extends Component {

  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  render(){
    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  componentDidMount(){
    this.fetchReviews()
  }

  fetchReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ reviews: data.results})
      })
  }
}

export default LatestMovieReviewsContainer;
