// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?'+`api-key=${NYT_API_KEY}`+'&query='
fetch('http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=f98593a095b44546bf4073744b540da0&query=cheese').then(res=>res.json()).then(json=>console.log(json))

function fetchReviewSearch(){
  fetch('URL').then() 
}

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  addSearchTerm = (event)=>{
    this.setState({
      ...this.state,
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    fetch(`${URL}+${this.state.searchTerm}`).then(response=> {
      if (response.status >=400){
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(json=> {
      this.setState({
        reviews: json.results,
      })    
    })
  }  

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input 
                type='text'
                value={this.state.searchTerm}
                onChange={this.addSearchTerm}
              />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
