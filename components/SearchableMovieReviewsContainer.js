import React from 'react';
import { Component } from 'react';
require('whatwg-fetch');

import SearchInput from './SearchInput';
import MovieReviews from './MovieReviews';

const NYT_API = 'a1302a3e261d4111a0d03583d69e4e9b';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: [],
    };
    this.processSubmit = this.processSubmit.bind(this);
    this.processChange = this.processChange.bind(this);
  }

  processSubmit(event) {
    event.preventDefault();
    fetch(URL + this.state.searchTerm).then(results => results.json())
      .then(results => this.setState({reviews: results.results}));
  }

  processChange(event) {
    this.setState({searchTerm: event.target.value});
  }


  render() {
    return(
      <div key="1" className='searchable-movie-reviews'>
        <SearchInput
          key={this.props.index}
          processSubmit={this.processSubmit}
          processChange={this.processChange}/>
        <MovieReviews key={this.props.index} reviews={this.state.reviews}/>
      </div>
    )
  }
}
