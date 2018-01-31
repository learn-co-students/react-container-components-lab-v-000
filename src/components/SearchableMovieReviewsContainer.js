import React, { Component } from 'react'; 
import 'isomorphic-fetch'; 
import MovieReviews from './MovieReviews';

let URL= "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<" 
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

export default class SearchableMovieReviews extends React.Component { 
    constructor() {
    super(); 
    
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }  
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      searchTerm: nextProps.searchTerm
    })
}
  
  componentWillMount() {
      URL += `${this.state.searchTerm}>api-key=${NYT_API_KEY}`
    fetch(URL)
      .then(response => response.json())
      .then((reviews => this.setState({ reviews: reviews.results })))
  } 
  
  render() { 
      return ( 
          <div className= "searchable-movie-reviews"> 
          <MovieReviews reviews= {this.state.reviews} />
          </div>
        );
  }
} 