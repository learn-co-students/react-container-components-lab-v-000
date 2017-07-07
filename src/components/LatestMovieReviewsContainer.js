import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.fetchLatestMovieReviews();
  }

  fetchLatestMovieReviews = () => {
    let url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json' +
              'api-key=a13a7a4cc105432a8a3aaef133fa8099'

    fetch(url)
      .then(result => result.json())
      .then(reviews => this.setState({reviews}))
  }
  
  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
