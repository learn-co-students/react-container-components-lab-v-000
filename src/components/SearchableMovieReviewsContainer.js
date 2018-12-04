import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=a05ecdba8f9144b0b29115e12aa78537';
const SEARCH = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
     
        this.state = {
          reviews: [],
          searchTerm: 'Happy'
        };
      }
  
    //componentDidMount() {
    //    let URL = SEARCH + NYT_API_KEY
    //    console.log(URL)
    //    fetch(URL)
    ////        .then(response => response.json())
     //       .then(data => data.results)
    //        .then(data => this.setState({reviews: data}));   
    //}

    handleChange = event => {
      this.setState({
        [event.target.searchTerm]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      let URL = SEARCH + NYT_API_KEY
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(data => data.results)
            .then(data => this.setState({reviews: data}));
    }

    render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
        </form>
        <div className="latest-movie-reviews" >
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>  
    )
  }
}

export default SearchableMovieReviewsContainer;
