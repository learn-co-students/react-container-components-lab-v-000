import React from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = '9a116d3ce946440fbe08d36060b5e301';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };

    this.submitFunction = this.submitFunction.bind(this)
  }

  getSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  submitFunction = (event) => {
    event.preventDefault();
    let search = BASE_URL + this.state.searchTerm
    fetch(search)
    .then(res => res.json())
    .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">        
      <form onSubmit={this.submitFunction}>
        <div>
          <label>
            Search
            <input type="search" value={this.state.searchTerm} onChange={this.getSearch} />
          </label>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;// Code SearchableMovieReviewsContainer Here