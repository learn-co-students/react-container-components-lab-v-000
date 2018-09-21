import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4d950ac5cb534c81990eeadb53224f0c';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }
    
    getReviews = event => {
        event.preventDefault()
        console.log('fired')
        fetch(URL)
        .then(
            resp => resp.json())
        .then(data => 
            this.setState({
                reviews: data.results
            })
        )
    }
    
    componentDidMount() {
        fetch(URL)
        .then(
            resp => resp.json())
        .then(data => 
            this.setState({
                reviews: data.results
            })
        )
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                <button onClick={this.getReviews}>click for reent reviews</button>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            )
    }
}

export default LatestMovieReviewsContainer