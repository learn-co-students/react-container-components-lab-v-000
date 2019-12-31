import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ''
	}

	fetchSearchedReviews = (query) => {
		fetch(`${URL}` + `&query=${query}`)
		.then(res => res.json())
		.then(movies => {
			this.setState({
				reviews: movies.results
			})
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.fetchSearchedReviews(this.state.searchTerm)
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<input id="search" name="searchTerm" type="text" onChange={e => this.setState({searchTerm: e.target.value})} value={this.state.searchTerm}/>
					</div>
					<div>
						<button type="submit">Find Reviews</button>
					</div>
				</form>
				{this.state.reviews !== [] ? <div><MovieReviews reviews={this.state.reviews} /></div> : null}
			</div>
		)
	}
}
