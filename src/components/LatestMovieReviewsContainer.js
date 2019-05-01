import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NhTPtsW94YXxZWp2UxvdnsppVaDJmNeq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		};
	}

	componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

export default LatestMovieReviewsContainer