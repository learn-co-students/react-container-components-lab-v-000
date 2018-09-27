import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

	state = {
		reviews: [],
		searchTerm: ''
	}

	fetchMoviereviews = (searchTerm) => {
		const newURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}api-key=${NYT_API_KEY}`
		fetch(newURL)
		.then(response => response.json())
		.then(data => {
			this.setState({
				reviews: data.results.map(review => review.display_title)
			})
		})	
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit = (event) => {
		this.fetchMoviereviews(this.state.searchTerm)
	}

	render() {
		return(
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
					<input type="submit" value="Submit"/>
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}

}

export default SearchableMovieReviewsContainer
