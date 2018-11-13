// first attempt 5/13/18
// import React, { Component } from 'react'
// import MovieReviews from './MovieReviews'
// import 'isomorphic-fetch';
//
// const NYT_API_KEY = '08218351351847e7b374e72029121099';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}&query=`
//
// class SearchableMovieReviewsContainer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchTerm: '',
//       reviews: []
//     }
//   }
//
//   handleChange = (e) => {
//     this.setState({
//       ...this.state,
//       searchTerm: e.target.value
//     })
//   }
//   // when the search is submitted, it performs the fetch and updates the state
//   handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(URL.concat(this.state.searchTerm))
//       .then(response => response.json())
//       .then(response => this.setState({reviews: response.results}))
//   }
//
//   render() {
//     return(
//       <div className="searchable-movie-reviews">
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
//           <button type="submit">Search</button>
//         </form>
//         <MovieReviews reviews={this.state.reviews} />
//       </div>
//     )
//   }
// }
//
// export default SearchableMovieReviewsContainer;

// second attempt 11/12/18
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '08218351351847e7b374e72029121099';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component{
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => this.setState({reviews: response.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
