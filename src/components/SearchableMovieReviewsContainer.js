import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'C8HisK0Zi6CBtJLZueaA7OB8xvnfvKDm';
const URL = ' https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>?api-key=${NYT_API_KEY}`;



// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsComponent extends Component {
  constructor() {
    super();


  state = {
    searchTerm: '',
    reviews: []
    };
  }

  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE)
  }

}






export default SearchableMovieReviewsContainer