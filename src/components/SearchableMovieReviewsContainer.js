// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '00dd82078615417eb16c9e9d7710722e';

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();

    this.state = { reviews : [], searchTerm: "" };
  };

  handleChange = (e) => {
    this.setState({searchTerm : e.target.value})
  }

  handleClick = (e) => {
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h1>MOVIES!!!</h1>
        <div className='search-box'>
          <label> Search for more </label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
        <div className='results'>
        <h3> Results </h3>
        <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
