import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



class SearchableMovieReviewsContainer extends React.Component {

  state = {
    searchTerm: "",
    reviews: []
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?&query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.setState ({
        reviews: data.results


      })
    })
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="search" value={this.state.searchTerm}
            onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>


        <MovieReviews  reviews={this.state.reviews}/>

      </div>
    )
  }


}
export default SearchableMovieReviewsContainer
