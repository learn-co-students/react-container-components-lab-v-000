import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
						+ `api-key=${NYT_API_KEY}` + '&query='

export default class SearchableMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			reviews: [],
			searchTerm: ""
		}

	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value })
	}

	fetchMovies = (e) => {
		e.preventDefault()

		fetch(URL.concat(this.state.searchTerm))
			.then(response => response.json())
				.then(data => this.setState({ reviews: data.results }))	


	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.fetchMovies}>
					<input type="text" onChange={this.handleChange}></input>
					<button type="submit">Submit</button>
				</form>
			<MovieReviews reviews={ this.state.reviews } />
			</div>
		)
	}
}