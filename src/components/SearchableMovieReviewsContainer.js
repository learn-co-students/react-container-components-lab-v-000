// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = '011d7ccf7cbd4b22962afcdab0c07332';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
   constructor() {
      super();

      this.state = {
         reviews: [],
         searchTerm: ''
      }
   }

   handleSubmit = event => {
      event.preventDefault()
      fetch(URL+ this.state.searchTerm)
         .then(response => response.json())
         .then((reviews => this.setState({reviews: reviews.results})))
   }

   handleSearchInputChange = event => {
      this.setState({searchTerm: event.target.value})
   }

   render() {
      return (
         <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
               <input 
                  type="text"
                  onChange={this.handleSearchInputChange}
               />
            </form>
            <MovieReviews reviews={this.state.reviews} />
         </div>
      )
   }
}

export default SearchableMovieReviewsContainer;