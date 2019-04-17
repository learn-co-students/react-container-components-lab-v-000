import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dJaAEmKofdAkD5HsksAeBEcSOHBr8VVf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchMovieReviewsContainer extends Component {
  constructor(){
    super()


    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = event => {
   event.preventDefault()
   fetch(URL)
   .then(response => response.json())
   .then(reviews => this.setState({reviews: reviews.results}))
  }



  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
         <input type="text" id="searchTerms" value={this.state.searchTerms} onChange={this.handleChange}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchMovieReviewsContainer
