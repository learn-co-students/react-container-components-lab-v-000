import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }


  handleInputChange = event => {this.setState({searchTerm: event.target.value})}

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
    .then(function(resp){
      if (resp.status >= 404){
        throw new Error('Nothing Found')
      }
      resp.json()
    }).then(reviews => this.setState({reviews: reviews.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search for Movie Reviews</label>
          <input
            type="text"
            onChange={this.handleInputChange}/>
          <button type='submit'>Search</button>
        </form>

      <MovieReviews reviews={this.state.reviews}/>
      
      </div>
    )
  }

}


export default SearchableMovieReviewsContainer;