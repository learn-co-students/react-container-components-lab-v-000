import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
let searchTerm = ''
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}` + `&query=${searchTerm}`;

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
      super()

      this.state = {
        reviews: [],
        searchTerm: ''
      };
    }

    componentDidMount() {
      fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({ movies: reviews.results }))
    }


    render() {
      return (
      <div className="searchable-movie-reviews">Searched Movies:
         <MovieReviews reviews={this.state.reviews} />
      </div>
      );
    }
}
