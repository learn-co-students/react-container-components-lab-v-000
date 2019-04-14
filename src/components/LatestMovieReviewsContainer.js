import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eTkGu4j2O7eYgs95pWV4Y8p7JYtCYI1B';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

	state = {
		reviews: []
	}

	componentDidMount() {
		fetch(URL)
		.then(resp => resp.json())
		.then(reviews => {
			this.setState({
				reviews: reviews.results
			})
		})
	}

	render() {
		return (
			<div className="latest-movie-reviews">
			<h2>Latest Movie Reviews:</h2>
				<MovieReviews reviews={this.state.reviews} />
			</div>	
		)
	}

}

export default LatestMovieReviewsContainer

