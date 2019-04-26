import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'save';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${'cwymQtTVUAIc693vr88h054gFitvhxfC'}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		};
	}

	componentDidMount() {
		fetch(URL).then((res) => res.json()).then((data) =>
			this.setState({
				reviews: data.results
			})
		);
	}

	handleClick = () => {
		this.setState({
			called: true
		});
	};

	render() {
		return (
			<div className="latest-movie-reviews">
				<h2>The Latest Reviews:</h2>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		);
	}
}

export default LatestMovieReviewsContainer;
