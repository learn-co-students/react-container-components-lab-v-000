import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          reviews: []
        };
    }
    
    // Function to get the latest movie reviews
    getLatestReviews = () => {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=faeaf284e2c74b9bb2f3f5f249169ce7')
            .then(response => {
                return response.json();
            })
            .then(reviews => {
                const reviewsList = reviews.results
                // console.log(reviewsList);
                this.setState({ reviews: reviewsList })
            });
    }

    // Get the reviews on mount
    componentDidMount() {
        this.getLatestReviews()
    }
    
    render() {
        return (
          <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
          </div>
        );
    }
}
