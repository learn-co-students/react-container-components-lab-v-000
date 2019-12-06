import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    this.mounted = false;
    fetch(URL + `query=${this.state.searchTerm}` + NYT_API_KEY)
      .then(resp => resp.json())
      .then(searchResults => {
        if (this.mounted) {
          this.setState({ ...this.state, reviews: searchResults.results })
        }
      })
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search for Movie Reviews
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;


