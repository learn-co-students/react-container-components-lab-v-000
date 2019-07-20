import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?&query=';

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
      }

      handleChange = (event) => {
        event.persist()
        this.setState({searchTerm: event.target.value})
      }

      fetchReviews = () => {
        console.log(`${URL}${this.state.searchTerm}`)
        fetch(`${URL}${this.state.searchTerm}`).then(resp => resp.json()).then(reviews => this.setState({reviews: reviews.results}))
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.fetchReviews()
      }

      render(){
        return <div className="searchable-movie-reviews"><h4>Search A Movie Review</h4><form onSubmit={this.handleSubmit}><input onChange={this.handleChange}type="text"></input><input type="submit"></input></form><MovieReviews reviews={this.state.reviews} text="Reviews Based on Search"/></div>
      }
      
}