import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xGVY0mWxaS0p3fxKy81ahp6AI9DiTJUt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(data => console.log(data))
      }

    render() {
        return (<div className="latest-movie-reviews">To do: render latest movie reviews here</div>)
    }
}