import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_URL_KEY = `?api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends React.Component {
	constructor() {
		super();

		this.state = {
			reviews: [],
			searchTerm: '',
		}
	}

	componentWillMount() {
		fetch(URL + this.state.searchTerm + API_URL_KEY)
			.then(response => response.json())
			.then(reviews => this.setState({ reviews }));
	}

	render() {

		return (
			<div className="searchable-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		);
	}
}

export default SearchableMovieReviews;