import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wUMzDPepVIqzJ9RummLb70qRBkDHnLGv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return(
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer