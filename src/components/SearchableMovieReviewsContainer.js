// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '28f872e13cd54fb8af6272f519915996';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.runSearch = this.runSearch.bind(this)
    this.state = {
      reviews: [],
      searchTerm: "Scary"
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.runSearch();
  }

  runSearch = () => {
    fetch(URL+`&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then((movieReviews) => {
      this.setState({
        reviews: movieReviews.results,
      });
    });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
        <h1>Search Results</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}
