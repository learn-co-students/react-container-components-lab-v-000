import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'a13a7a4cc105432a8a3aaef133fa8099';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.fetchLatestMovieReviews();
  }

  fetchLatestMovieReviews = () => {
    let url='https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + 
            `query=${this.state.searchTerm},api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(result => result.json())
      .then(reviews => this.setState({reviews}))
  }
  
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}