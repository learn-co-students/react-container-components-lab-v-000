import React from 'react';
import MovieReviews from './MovieReviews';
import SearchInput from './SearchInput';
const {fetch} = require('whatwg-fetch');

const NYT_API_KEY = '972307970e8d48edbaf69de1cb61872c'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
