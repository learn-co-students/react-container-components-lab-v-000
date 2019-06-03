import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

	state = {
		searchTerm: "",
		reviews: []
	}

	handleSubmit = () => {
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
			.then(res => res.json())
			.then(reviews => this.setState({ reviews }))
	}

	render(){
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.handleSubmit}>
					<input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.state.searchTerm}/>
				</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer
