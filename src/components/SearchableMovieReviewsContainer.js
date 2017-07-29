import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '409815609f1f4430af9726dc2b354b7d';

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.storeMovies = this.storeMovies.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      reviews: [],
      searchTerm: "comedy"
    }
  }

  componentWillMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + `api-key=${NYT_API_KEY}` + `&query=${this.state.searchTerm}`

    fetch(url)
    .then(
      res => res.json()
    )
    .then(
      res => this.storeMovies(res)
    )
  }

  storeMovies(res) {
    this.setState({
      reviews: res.results
    })
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.fetchMovies();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Search
            <input type="text" value={this.state.search}
              onChange={this.handleInputChange} />
          </label>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
