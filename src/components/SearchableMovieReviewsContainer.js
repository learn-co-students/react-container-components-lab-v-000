import React, {Component} from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const apiUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  search = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  };

  updateSearchTerm = (event) => {
    event.preventDefault();
    const searchUrl = apiUrl.concat(this.state.searchTerm)
    fetch(searchUrl).then(res => res.json()).then(res => this.setState({ reviews: res.result }))
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.search}>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input type="text" id='search-input' onChange={this.updateSearchTerm} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;

