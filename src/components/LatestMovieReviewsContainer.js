import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'ba7a8806dfc54269998992a8a9c50375';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
    super();
 
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {

    fetch(URL)
      .then(response => response.json())
      //.then(data =>  console.log(data["results"]))
      //console.log(this.state.reviews)
      .then(data => this.setState({reviews: this.state.reviews.concat(data["results"])}))

  }  
  
//.then(reviews => this.setState( { reviews } ))
  render() {
    
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
       
      </div>
    )
  }

}

export default LatestMovieReviewsContainer