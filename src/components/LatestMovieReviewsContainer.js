import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL+"&order=by-publication-date")
        .then(response => response.json())
        .then((data) => {
       //     console.log("Fetch latest",data.results)
            this.setState({ reviews: data.results })
        })
        .catch((error) => console.error("Fetch Failed",error));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews header="Latest Reviews" reviews={this.state.reviews} />
            </div>
        )
    }
}