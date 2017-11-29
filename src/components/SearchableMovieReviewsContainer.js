import React, {Component} from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9c7b0ff21450474fb870ecb1fb46947e'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = event => this.setState({
    searchTerm: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
      .then(response => response.json)
      .then(response => this.setState({reviews: response.results})
    )
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='input'>Search Movie Reviews</label>
          <input id='input' type='text' onChange={this.handleChange}/>
          <button type='submit'>Search</button>
        </form>
      <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
