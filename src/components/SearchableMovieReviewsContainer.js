// Code SearchableMovieReviewsContainer Here

import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: [],
    }
  }

  handleSearchValue = (changeEvent) => {
    this.setState({
      searchTerm: changeEvent.target.value,
    })
  }

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    fetch(URL + '&query=' + this.state.searchTerm)
      .then((res) => {
        return res.json()
      }).then((json) => {
        this.setState({
          reviews: json.results,
        });
      });
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Keyword:
          <input type="text" onChange={this.handleSearchValue} value={this.state.searchTerm}/>
          <input type="submit" value="Search for Reviews"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
