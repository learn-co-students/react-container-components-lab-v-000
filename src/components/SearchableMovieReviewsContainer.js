import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JtgeFqITmrg1uMylpuUYKlGma76QkTSp';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: '',
  }

  componentDidMount() {
    let searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `api-key=${NYT_API_KEY}`;
    if (this.state.searchTerm !== '') {
      searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm + `&api-key=${NYT_API_KEY}`;
    }
    fetch(searchURL).then(response => response.json()).then(reviews => this.setState({ reviews: reviews.results }) )
  }


  handleSubmit = (event) => {
    event.preventDefault()
    let searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `api-key=${NYT_API_KEY}`;
    if (this.state.searchTerm !== '') {
      searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm + `&api-key=${NYT_API_KEY}`;
    }
    fetch(searchURL).then(response => response.json()).then(reviews => this.setState({ reviews: reviews.results }) )
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
