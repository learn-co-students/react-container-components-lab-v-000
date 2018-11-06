import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

  class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
  	    super()
  	    this.state = {
  	      reviews: [],
          searchTerm: ""
  	    };
  	  }

    getReviews = (event) => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
  	      .then(response => response.json())
  	      .then(data => this.setState({ reviews: data.results }))
  	  }

      handleChange = event => {
  	    event.persist()
  	    this.setState({
  	        searchTerm: event.target.value
  	    })
    	}

      render() {
  	    return (
        <div className="searchable-movie-reviews" >
        <form onSubmit={this.getReviews}>
          <input type="text" id="search" value={this.state.search}
         onChange={this.handleChange}/>
         </form>
          <MovieReviews reviews={this.state.reviews} />
        </div>

        )
  	  }


  }

  export default SearchableMovieReviewsContainer
