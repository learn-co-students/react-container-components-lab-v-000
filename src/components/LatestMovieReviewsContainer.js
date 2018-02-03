import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: ["Loading"]
    }
  }

  getMovies = () => {
    fetch(URL, {mode: 'cors'}).then(res => {
      return res.json()
    }).then(response => {
      this.setState({
        reviews: response.results,
      })
    })
  }

  componentWillMount = () => {
    this.getMovies();
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
