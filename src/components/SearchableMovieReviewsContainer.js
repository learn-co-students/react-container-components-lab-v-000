import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'hLishxGlyIdfK4tG1PZvA0Xw3kGEWApk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state={
    reviews: [],
    searchTerm: ""
  }

  componentDidMount() {
    let url = URL + this.state.searchTerm
    fetch(url)
      .then(r=>r.json())
      .then((data) => {this.setState({reviews: data.results})})
  }

  render(){
    return (
      <div className="searchable-movie-reviews" >
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer;
