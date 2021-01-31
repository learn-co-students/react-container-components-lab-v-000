import React, { Component } from 'react';
import 'isomorphic-fetch';
import Form from './Form';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'EEYQ8MPQrsMfbYXAML1Fo4yyjbSxdIvl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  componentDidMount() {
    // fetch(URL + this.state.searchTerm)
    // .then(response => response.json())
    // .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleChange = event => {
    console.log('event.target.name:', event.target.name);
    console.log('event.target.value:', event.target.value);
    
    this.setState({
      [event.target.name]: [event.target.value]
    })
    console.log('this.state:', this.state);
    
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { searchTerm: this.state.searchTerm }
    this.fetchReviews(formData);
  }

  fetchReviews() {
    fetch(URL + this.state.searchTerm)
    .then(response => response.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  } 
  
  render() {
    return(
      <div className="searchable-movie-reviews">
        <h2>Search for Reviews</h2>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={event => this.handleChange(event)}
          />
          <input 
            type="submit"
          />
        </form>

        < MovieReviews reviews={ this.state.reviews } />
      </div>)
  }
}

export default SearchableMovieReviewsContainer;