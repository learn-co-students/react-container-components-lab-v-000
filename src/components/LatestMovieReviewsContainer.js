import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '76ce291c1ab6487d84281d1a37c6555f';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component{
    state = {
        reviews: []
    }
    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
            .then(response => {
            this.setState({ reviews: response.results})
            })
    }
    render(){
        return(
            <div className="latest-movie-reviews">
            <h2>Latest Movie Reviews</h2>
                <MovieReviews reviews={this.state.reviews}/>
             </div>
        )
    }
}
