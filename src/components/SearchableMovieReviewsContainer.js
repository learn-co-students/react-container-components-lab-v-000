import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '858dfffb46d548bc8afe44342b4c6b00';
const URL ='https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;
            ;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super()

    this.state ={
      searchTerm: '',
      reviews: []
    }
  }

  fetchQueryReview = (searchTerm) => {
    fetch(URL + `${searchTerm}`)
      .then(res=> res.json())
      .then(data =>
      this.setState({
        reviews: data.results
      })
    )
  }

  handleChange= (event) => {
    event.persist();
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit= (event) => {
    event.preventDefault()
    this.fetchQueryReview(this.state.searchTerm);
  }

    render() {
      return(

        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search Term:
        <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
        </form>

        <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }

}
