import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';	

const NYT_API_KEY = '578de9b2745f429bbb8e33e47e041953';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [], 
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((json) => {
      this.setState({
        reviews: json.results
      })
    });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;