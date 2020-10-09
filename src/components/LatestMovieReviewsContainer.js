import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'koxMHPDoawBp0cTEneUQ1N0upjIweo9q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

    class LatestMovieReviewsContainer extends React.Component {
        constructor() {
        super()
        
        this.state = {
            reviews: []
        };
        }
        
        componentDidMount() {
        fetch(URL)
          .then(response => response.json())
        //   .then(response => console.log(response.results))
          .then(reviewData => this.setState({ reviews: reviewData.results }))
        }
        
        render() {
            return (
                <div className="latest-movie-reviews">
                    {<MovieReviews movies={this.state.reviews} />}
                </div>     
            )         
        }
    }
            
export default LatestMovieReviewsContainer;