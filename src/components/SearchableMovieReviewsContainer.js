import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



export default class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ''
	}

	handleForm = (event) => {
		event.preventDefault();
		this.doSearch(this.state.search)
	}

	doSearch(term) {
		let searchterm = term
		const NYT_API_KEY = 'E9yDGAwgfVOHWRGHqnrJT85QQGJBf7rZ';
		const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchterm}&`
            + `api-key=${NYT_API_KEY}`;
		fetch(URL)
		.then(response => response.json())
		.then(data => this.setState({ reviews: data.results}))
		// .then(data => console.log(data.results))
	}

	isPick = (movie) => {
		if (movie.critics_pick === 0) {
			return 'no'
		} else {
			return 'yes'
		}
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<h2>Search for Movie Reviews</h2>
					<form onSubmit={this.handleForm}>
						<input type="text" id="search" onChange={e => this.setState({searchTerm: e.target.value})} />
						<input type="submit" value="Search" />
					</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}