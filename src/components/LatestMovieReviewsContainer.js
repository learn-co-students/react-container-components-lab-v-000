import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DlDwKSmnYowC8lBTqv4GgfWZC1BFH3wi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state = {
      reviews:[]
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(response => response.json())
      .then(respJSON => this.setState({reviews:respJSON.results}))
  }

  render(){
    return <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  }
}

export default LatestMovieReviewsContainer
