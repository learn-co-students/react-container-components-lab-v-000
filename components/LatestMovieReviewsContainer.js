import React from 'react';
import { Component } from 'react';
const {fetch} = require('whatwg-fetch');

import MovieReviews from './MovieReviews';

const NYT_API = 'a1302a3e261d4111a0d03583d69e4e9b';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  componentWillMount() {
    fetch(URL).then(res => res.json()).then(res => this.setState({ reviews: res.results}));
  }

  render() {
    return(
      <div key="1" className='latest-movie-reviews'>
        <MovieReviews key={this.props.index} reviews={this.state.reviews}/>
      </div>
    )
  }
}
