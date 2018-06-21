import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const SEARCH_TERM = 'araby'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}&query=${SEARCH_TERM}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: 'araby'
    };
  }

  componentDidMount() {
    fetch(`${URL}`)
      .then(response => response.json())
      .then( returnedObject => {
        const reviews = returnedObject.results
        this.setState({ reviews })
      });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
