// Code SearchableMovieReviewsContainer Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieReviews from './MovieReviews'
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  render () {
    return (
      <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    )
  }
}
