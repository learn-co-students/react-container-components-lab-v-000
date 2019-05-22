import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js';

const NYT_API_KEY = 'sAwXo8b1qHL8ZeLqUA9N8mSkv3ffGKip';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`


export default class SearchableMovieReviews extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
  let searchURL = '${URL}${this.state.searchTerm}'
    fetch('${searchURL}')
    .then(response => response.json())
    .then(response => this.setState({reviews: response.result}))
  }

  handleChange =event => {
    this.setState({
      searchTerm:event.target.value
    })
  }
  render() {
    return (
      <div className={'searchable-movie-reviews'}>
        <input
        type ="text"
        value ={this.state.value}
        onChange={this.handleChange}
         />
         searchTerm={this.state.searchTerm}
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
