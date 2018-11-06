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
          search: ""
  	    };
  	  }

    getReviews = (data) => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}query=${data.search}`)
  	      .then(response => response.json())
  	      .then(reviews => this.setState({ reviews }))
  	  }

      handleChange = event => {
  	    event.persist()
  	    this.setState({
  	        [event.target.id]: event.target.value
  	    })
    	}

      render() {
  	    return (
        <div className="latest-movie-reviews" >
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
