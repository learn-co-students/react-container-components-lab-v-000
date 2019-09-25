import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cTNHUeB8GLZc28fAn0akz4OCj8UOQ3db';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='; 
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//


class SearchableMovieReviewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const search_url = URL + this.state.searchTerm + '&api-key=' + NYT_API_KEY;
    console.log(search_url);
    fetch(search_url)
      .then(res => res.json())
      .then(resp => {
        this.setState({
          reviews: resp.results
        })
      }
      );
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search: 
            <input type="text" name="search" onChange={ event => this.handleSearchChange(event) } value={this.state.search} />
          </label>
          <input type="submit" value="Search" />
      </form>
      <MovieReviews movies={this.state.reviews} />
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
