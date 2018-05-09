import React, { Component } from 'react';
import 'isomorphic-fetch';

// eslint-disable-next-line
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state ={
      searchTerm: '',
      reviews: []
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>

          <input
            type="text"
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        
        <p>Search</p>
            <MovieReviews reviews={this.state.reviews} />
        <p>end search </p>
        
      </div>
    )
  }
}



export default SearchableMovieReviewsContainer;