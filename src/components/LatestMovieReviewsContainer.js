import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	reviews: []
        }
    }

    ComponentDidMount() {
    	fetch(URL)
    	.then(resp => resp.jason())
    	.then(data => this.setState({reviews: data.results}))
    	.catch(err => console.log(err))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Movie Reviews:</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;

