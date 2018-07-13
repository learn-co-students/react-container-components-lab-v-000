// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
            // + `&api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  searchReviews = (e) => {
    e.preventDefault();
    const searchURL = `${URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(searchURL)
      .then(response => response.json)
      .then(reviews => this.setState({reviews: reviews.results}))

  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidMount = () => {
    const searchURL = `${URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(searchURL)
      .then(response => response.json)
      .then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <button type='submit' onClick={this.searchReviews.bind(this)} >Click</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}