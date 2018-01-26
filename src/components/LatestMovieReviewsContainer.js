import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = '85786c10060e41a2b3d2a1c890761b27';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
            .then(response => response.json())
            .then((reviews => this.setState({reviews: reviews.results})))
            //console.log(reviews)
    }

    render() {
        return (
        <div className="latest-movie-reviews">
         <MovieReviews reviews={this.state.reviews} />
         </div>
        )
    }


}
