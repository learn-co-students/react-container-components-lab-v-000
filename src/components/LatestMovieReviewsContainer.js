import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wsmWKAAsy4Qwj3zR2h8LE9hegDReGAwl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
		this.state = { reviews: [] }
  }
	
	componentDidMount = () => {
		fetch(URL)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server")
				}
				return response.json()
			})
			.then(function(movieJSON) {
				return movieJSON.results
			})
			.then(reviews => this.setState({reviews}))
			.catch(console.log)
	}

  render () {
    return (
			<div id="container">
					{ < MovieReviews reviews={this.state.reviews} /> }
			</div>
    )
  }
}

export default LatestMovieReviewsContainer 
