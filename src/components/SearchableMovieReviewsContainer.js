import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const API_KEY = 'f98593a095b44546bf4073744b540da0';
const Url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'


class SearchableMovieReviewsContainer extends Component {

  constructor() {
   super();

   this.state = {
     reviews:[],
     searchTerm: ''
   };

  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(Url + `api-key=${API_KEY}` + "&query=" + (this.state.searchTerm))

    .then(response => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
		  }
  		return response.json();
  	})
  	.then((response) => {
      this.setState({
        reviews: response.results
      })
    })
  }


render() {
  return(
        <div className= "searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onSearchChange} ></input>
            <button type="submit"> Submit </button>
          </form>
        </div>
  )
}

}
export default SearchableMovieReviewsContainer
