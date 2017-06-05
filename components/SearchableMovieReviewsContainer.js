import React from 'react'
import MovieReviews from './MovieReviews'
import SearchBox from './Search'
const { fetch } = require('whatwg-fetch')

const searchURL = (query) => {
  return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}`
}

const APIkey = ``

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      reviews: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value
    })
  }

  handleSubmit(e) {
    fetch(searchURL(this.state.searchString))
    .then( resp => this.setState({reviews: resp}) )
  }
  
  render() {
    return (
      <div className='searchable-movie-reviews'>
      <SearchBox onSubmit={this.handleSubmit} onChange={this.handleChange} />
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}