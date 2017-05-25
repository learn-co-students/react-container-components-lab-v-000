'use strict'

import React from 'react'
import 'whatwg-fetch'
import MovieReviews from './MovieReviews'
import SearchField from './SearchField'

const NYT_API_KEY = 'fd55e4f22960412fb09b2b8c889c184c'
const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({
      query: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    fetch(url.concat(this.state.query))
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }))
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>
        <SearchField
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
