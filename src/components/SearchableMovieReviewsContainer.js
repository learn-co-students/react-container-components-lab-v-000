import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pSO3u2s3shth3jcAahPpKn3raLYTPrTP';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: " "
    }
  }

  componentDidMount() {
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(response => this.setState({reviews: response.results}))
  }


  handleSearch = (e) => {
    e.preventDefault()
    this.setState({searchTerm: e.target.value})
  }

    render() {
      return(
        <div className="searchable-movie-reviews" onClick={this.handleSearchFetch}>
          <form>
            <input type="text" value={this.state.searchTerm} onChange={this.handleSearch}/>
          </form>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }


}

export default SearchableMovieReviewsContainer
