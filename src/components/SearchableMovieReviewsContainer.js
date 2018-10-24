import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '38d5b508c3164efda27f0c58b9bdc81b';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchTerm = this.state.searchTerm
    this.componentDidMount(searchTerm)
  }

  componentDidMount(searchTerm){
    fetch(`${URL}${searchTerm}&api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">

        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
        </form>

        <MovieReviews reviews={this.state.reviews}/>

      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
