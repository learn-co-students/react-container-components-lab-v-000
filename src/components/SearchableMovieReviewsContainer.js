import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xGVY0mWxaS0p3fxKy81ahp6AI9DiTJUt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        };
    }
    
    render() {
        return (<div className="searchable-movie-reviews">To do: render searched movies here</div>)
    }
}