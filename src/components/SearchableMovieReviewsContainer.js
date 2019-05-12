import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CAgnIJpJRDRzsFHADNQbjjYGx9i9gocc';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
     this.state = {
       searchTerm: "",
       reviews: []
     }
  }

  handleSearchInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    handleSubmit = event => {
      event.preventDefault();

      fetch(BASE_URL.concat(this.state.searchTerm))
        .then(response => response.json())
          .then(data => this.setState({ reviews: data.results }
          )
        , ()=>console.log(this.state.reviews))
    };

  render() {
    return (
        <div className='searchable-movie-reviews'>
          <h3> Search A Movie </h3>
            <form onSubmit= {this.handleSubmit}>
              <input type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleSearchInput}/>
              <br/>
              <button type="submit">Submit </button>
          </form>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }
  }

export default SearchableMovieReviewsContainer
