import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A4YfXRaIE2iyMKNjPeRyWetREEJJHRek';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        this.fetchApi()
    }

    fetchApi = () => {

        fetch(URL)
            .then(response => response.json())
            .then(({results}) => this.setState({reviews: results}));

        
    }

    render() {
        return (
            <div className="latest-movie-reviews">
            <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default LatestMovieReviewsContainer
