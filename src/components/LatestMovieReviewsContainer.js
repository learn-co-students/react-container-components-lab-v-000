import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SU1uu7HLQl8i2TX1VTxT2G6uyGuqjtJB'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({
        reviews: reviews.results
      }))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


