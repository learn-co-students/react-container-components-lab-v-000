import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  state = {
     searchTerm: '',
     reviews: []
   }

   handleSearch = event =>
      this.setState({ searchTerm: event.target.value });
   handleSubmit = event => {
     event.preventDefault()
       fetch(URL)
       .then(response => response.json())
       .then(reviews => this.setState({ reviews }))
     }

   render() {
     return (
       <div className="searchable-movie-reviews">
         <form onSubmit={this.handleSubmit}>
           <input type="text" value={this.state.searchTerm} onChange={this.handleSearch} />
           <button type="submit">Submit</button>
         </form>

      <h2>Movie Reviews:</h2>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;
