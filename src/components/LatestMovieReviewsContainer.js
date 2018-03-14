import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
	constructor(){
		super()

    // start with empty array before fetching reviews
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
    // get reviews and set state with response
		fetch(`${URL}`)
  		.then(res => res.json())
  		.then(reviews => this.setState({reviews}));
	}

	render(){
		return(
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default LatestMovieReviewsContainer
