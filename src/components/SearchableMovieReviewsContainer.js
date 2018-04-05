// Code SearchableMovieReviewsContainer Here
import React from 'react';

import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state ={
      reviews:[],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>')
    .then(res => res.json())
    .then(reviews => this.setState({reviews}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
