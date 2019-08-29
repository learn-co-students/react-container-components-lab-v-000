import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = ''

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?` 
            + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchSearchedReviews = (e) => {
    e.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then( resp => resp.json() )
    .then( resp => this.setState({ reviews: resp.results })
    )
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <h3>Search Reviews</h3>
        <form onSubmit={ this.fetchSearchedReviews }>
          <input
            type='text'
            onChange={(e) => {
							this.setState({
								searchTerm: e.target.value
							})
						}}
          />
          <button type='submit'>
            Find Reviews
          </button>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}