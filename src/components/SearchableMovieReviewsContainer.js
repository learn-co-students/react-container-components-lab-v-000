// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: "Romance",
    };
  }

  componentDidMount() {
    let searchURL = URL + `?api-key=${NYT_API_KEY}&query=` + this.state.searchTerm;
    console.log(searchURL);
    fetch(searchURL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: {reviews} }));
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews.results} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
