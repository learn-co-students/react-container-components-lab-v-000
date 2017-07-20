import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  changeBox = (value) => {
    this.setState({
      searchTerm: value
    })
  }

  componentWillMount = () => {
    fetch(URL)
      .then((response => this.setState({reviews: response})));
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
