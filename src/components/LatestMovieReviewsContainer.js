import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xLbNyTY2gyRl1cfZEqjs18qqX8GR2hZ0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        }
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>NYT Movie Reviews - the latest ones!</h2>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
}

export default LatestMovieReviewsContainer