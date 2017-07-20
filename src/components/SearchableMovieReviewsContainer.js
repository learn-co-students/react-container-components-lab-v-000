import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviews: [],
      searchTerm: "hello"
    };
  }

  fetchNews = () => {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.jsonquery=' + this.state.searchTerm
              + `?api-key=e4407b9b99bf49dca641270c478891f3`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((reviews) => {
        this.updateReviews(reviews.results)
      });
  }
  
  updateReviews= (reviews) => {
    this.setState({
      reviews: reviews
    })
  }

  componentWillMount() {
    this.fetchNews()
  }
  
  render() {

    return (
      <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
    );
    
  }
}

export default SearchableMovieReviewsContainer;