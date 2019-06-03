import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7aBKeWoydtBaARQgEVcQIeuzy3SMaTYv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: " "
  }

   handleSubmit = e => {
     e.preventDefault();
     fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(response => this.setState({ MovieReviews}))
   }

   handleChange = e => {
     this.setState({searchTerm: e.target.value})
   }

  render() {
   return (
     <div className="searchable-movie-reviews">
       <form onSubmit={this.handleSubmit}>
       <h1>Search Movie Reviews:</h1>
       <input type="text" onChange={this.handleChange}></input>
       </form>
       <MovieReviews reviews={this.state.reviews}/>
     </div>
   );
 }

}

export default SearchableMovieReviewsContainer;
