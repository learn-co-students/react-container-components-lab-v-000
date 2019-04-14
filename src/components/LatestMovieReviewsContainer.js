import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XuJsR2J84ZzB4h2bi4iExEaJMbN3aY2G';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

constructor() {
	super()

	this.state = {
		reviews : []
	}
}


getReviews = () => {
	fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({ reviews: response.results }))
}

componentDidMount() {
	{this.getReviews()}
}

render() {
	return(
		<div className="latest-movie-reviews">
			<MovieReviews reviews={this.state.reviews}/>
		</div>
	)
}


}

export default LatestMovieReviewsContainer;
