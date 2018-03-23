import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6cf563c473654a21a73c2cb832395153';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(movies => this.setState({ reviews: movies.results }))
    }

    render(){
        return (
            <div className='latest-movie-reviews'>            
                <MovieReviews movies={this.state.reviews}/>
            </div>
        )
    }
}
