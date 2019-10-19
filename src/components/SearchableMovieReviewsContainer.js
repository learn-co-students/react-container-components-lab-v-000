import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

let searchTerm = ''

// const NYT_API_KEY = 'mwYGSgztmKiAGVXPuh3ynNL5HXA6vf09';
let URL = '';

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSearch = (event) => {
    event.preventDefault();

    searchTerm = this.state.searchTerm
    URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=mwYGSgztmKiAGVXPuh3ynNL5HXA6vf09&query=' + searchTerm

    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  updateSearch = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
           <input onChange={this.updateSearch} value={this.state.searchTerm} />
           <button type="submit">Search</button>
         </form>

         {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Results:</h2>} 

         <MovieReviews reviews={this.state.reviews} />
      </div>
    )

  }

}
