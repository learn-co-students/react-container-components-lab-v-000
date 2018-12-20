import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
    }

   
    handleChange = (e) => {
      this.setState({searchTerm: e.target.value}, () => console.log(this.state.searchTerm))
    }

    handleSubmit = (e) => {
      e.preventDefault()
      let query = this.state.searchTerm
      let url = URL + `${query}`
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ reviews: data.results}, () => console.log("reviews state is:", this.state.reviews)))
    }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="search-container">
          <h2>Search Reviews:</h2>
          <form className="search-form" onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          <input type="submit" value="search"/>
          </form>
        </div>

        <div className="reviews-container">
          <h2> Results: </h2>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
        
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
