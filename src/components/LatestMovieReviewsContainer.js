import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '858dfffb46d548bc8afe44342b4c6b00';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

  constructor(){
    super()

    this.state ={
      reviews:[]
    }
  }

  componentDidMount(){
    this.fetchReviews()
  }

  fetchReviews= () => {
    fetch(URL)
    .then(response => {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
  })
   .then(response =>
     this.setState({
       reviews: response.results
     })
   );
 }



  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
