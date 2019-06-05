import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'oPxVdolpExBC1utjG2SYf3GGi5VYPZw4';
const apiKey = `api-key=${NYT_API_KEY}`
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	state = {
		reviews: [],
		searchTerm: ''
	};
	// componentDidMount() {
	// }
	handleSubmit = (e) => {
		e.preventDefault();
		fetch(URL + this.state.searchTerm + apiKey).then((res) => res.json()).then((res) => this.setState({ reviews: res.results }));
	}
	render() {
		// reviews" and "searchTerm
		return <div className="searchable-movie-reviews">
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<label>
					Search:
						<input type="text" value={this.state.searchTerm} onChange={event => this.setState({ searchTerm: event.target.value })} />
				</label>
				<input type="submit" value="Submit" />
			</form>

			<MovieReviews props={this.state} reviews={this.state.reviews} />
		</div>;
	}
}
export default SearchableMovieReviewsContainer;
