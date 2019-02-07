import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GDjk3Fw6tOGdg5ryAmjgwFNeAA0VJrnA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
        + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }

    }

        render(){
            return(
                <div className="latest-movie-reviews">
                 {/* <button onClick={this.fetchMovies}></button> */}
                 < MovieReviews reviews={this.state.reviews} />
                </div>
            )
        }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(movies => {
            this.setState({
                reviews: movies.results
            })
        })
    }
}

export default LatestMovieReviewsContainer;