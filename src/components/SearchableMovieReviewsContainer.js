import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  onSearchTermUpdate(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const URL = `${BASE_URL}&query=${encodeURIComponent(this.state.searchTerm)}`
    fetch(URL)
      .then((res) => res.json())
      .then(({results}) => {
        console.log(results);
        this.setState({reviews: results})
      })
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Searchable Movie Reviews</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label
            htmlFor="searchTerm"
          >
            Search:
          </label>
          <br/>
          <input 
            type="text" 
            name="searchTerm" 
            value={this.state.searchTerm} 
            onChange={(e) => this.onSearchTermUpdate(e)}
          />
          <input type="submit" value="Search"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;