import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'rgvbQr3yxrE5JGHHyN45O9KHEUtpQDze';
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

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        fetch(URL)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    reviews: json.results
                })
            })   
    }



    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>LatestMovieReviewsContainer</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer