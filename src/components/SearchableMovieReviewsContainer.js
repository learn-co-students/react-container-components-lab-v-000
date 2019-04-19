import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LKDXSZOu7ThG2VHL1W0aOGglyzI1KIxU';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
const END = `api-key=${NYT_API_KEY}`;
          //  const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
          //  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleChange = event => {
  this.setState({
  searchTerm : event.target.value
})
}

handleSubmit = event => {
event.preventDefault()
  fetch(`${URL}${this.state.searchTerm}${END}`)
    .then(response => response.json())
    .then(data => this.setState({ reviews: data.results }))
}


  render() {
    //className="searchable-movie-reviews"
    return (
      <div className="searchable-movie-reviews">
       <form onSubmit={this.handleSubmit}>
        <input
            id="search-input"
            type="text"
            onChange={this.handleChange}
         />
           <button type="submit">Submit</button>
        </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer;
