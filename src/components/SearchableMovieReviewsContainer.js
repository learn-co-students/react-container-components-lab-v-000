import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XuJsR2J84ZzB4h2bi4iExEaJMbN3aY2G';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

constructor() {
	super()

	this.state = {
		reviews : [],
		searchTerm: ""
	}
}

handleInput = (event) => {
	this.setState({searchTerm: event.target.value})
}

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  };

render() {
	return(
		<div className="searchable-movie-reviews">
		<h5>Search</h5>
		<form onSubmit={this.handleSubmit}>
			<input onChange={this.handleInput} type="text" value={this.state.searchTerm}/>
			<button type="submit">Submit</button>

		</form>
			<MovieReviews reviews={this.state.reviews}/>
		</div>
	)
}

}

export default SearchableMovieReviewsContainer
