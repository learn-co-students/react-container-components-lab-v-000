import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

  constructor (props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

fetchReviews = (search = 'cat') => {
  fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${search}`)
      .then(response => response.json())
      .then(data => {
          this.setState({
            reviews: data.results
          })
      })
    }



handleSubmit = event => {
  event.preventDefault()
  this.fetchReviews(this.state.searchTerm)
}

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Movie: <input type="text" id="moviename" value={this.state.searchTerm} onChange={this.handleChange}></input>
        <input type="submit" value="Submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
