import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state={
            reviews: []
        }
    }
    render(){
        debugger;
        return(
        <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }
    fetchMovies = () =>{
        fetch(URL).then(response=>response.json()).then(movies=> this.setState({reviews: movies.results}))
    }
    componentDidMount(){
        {this.fetchMovies()}
    }
}