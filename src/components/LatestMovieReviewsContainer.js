import React, { Component } from 'react';
// import 'isomorphic-fetch';
import ApiManager from '../managers/NytApiManager'
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
        this.apiManager = new ApiManager()
    }

    componentDidMount(){
        this.apiManager.fetchMovieReviews()
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
        .catch(e => alert(e))
    }   

    render(){
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Movie Reviews</h2>
                <MovieReviews
                reviews={this.state.reviews}
            />
            </div>
            
        )
    }
}