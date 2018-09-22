import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e2ad7aafde504592ae5e7dc3742597e4';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });
  // 
  // handleSubmit(event){
  //   event.preventDefault();
  //   fetch(BASE_URL.concat(this.state.searchTerm))
  //     .then(response => response.json())
  //     .then(response => this.setState({ reviews: response.results }));
  // }

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>

        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleSearchInputChange} />
          <input type="submit" value="submit"></input>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>

    );
  };
}

export default SearchableMovieReviewsContainer;
