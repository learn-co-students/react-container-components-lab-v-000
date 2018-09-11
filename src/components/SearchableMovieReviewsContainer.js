// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '362c4a6151364cab9557ab6939ec47e6';

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/' + `query=${this.state.searchTerm}.json/api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then(reviews => this.setState({
      reviews
    }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
