import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a05ecdba8f9144b0b29115e12aa78537';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
     
        this.state = {
          reviews: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(data => data.results)
            .then(data => this.setState({reviews: data}));   
    }
  
    render() {
      console.log(URL)
      return (
        <div className="latest-movie-reviews" >
          <MovieReviews reviews={this.state.reviews}/>
        </div>  
    )
  }
}

export default LatestMovieReviewsContainer;
