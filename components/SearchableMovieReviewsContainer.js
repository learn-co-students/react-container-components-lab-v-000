import React from 'react';
import MovieReviews from './MovieReviews'
const { fetch } = require('whatwg-fetch');
const SEARCHURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=b338b29158ca499bbbecd31876eb87a7"

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(ev) {
    this.setState({
      searchTerm: ev.target.value
    })
  }

  handleClick() {
    let searchTerm = this.state.searchTerm.split(" ").join("+")
    fetch(SEARCHURL + `&&query='${searchTerm}'`)
    .then(res => res.json())
    .then(response => this.setState({reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search Movie Title:</h3>
        <input type="text" name="movie-title" value={this.state.searchTerm} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
        <div className="search-result">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
