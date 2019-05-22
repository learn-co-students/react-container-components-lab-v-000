import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xhpc2iiwh9zxhJS1KUdMvk2yXHjWXRp3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
    fetch(URL)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(data => {
            // console.log(data.results);
            this.setState({
                reviews: data.results
            })
        })
    }

}

export default LatestMovieReviewsContainer