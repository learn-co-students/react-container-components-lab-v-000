import React, { Component } from 'react';
//import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Pbi5Hri4BEwtTYxr1Cc4GRnndv7L6gha';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }
    
    componentDidMount(){
        fetch(URL)
        .then(res=>res.json())
        .then(json=>this.setState({reviews:json.results}))
    }

    render() {
        console.log(this.state)
        return (
            <div className='latest-movie-reviews'>
            <h1>Movies</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
