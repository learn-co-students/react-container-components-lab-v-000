import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
        + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
        state = {reviews: []  };

        componentDidMount() {
        fetch(URL)
            .then(results => results.json())
            .then(reviews => this.setState({reviews: reviews.results}))
            
    }

    listMovieReviews(){
        return this.state.reviews.map(movie => {
        return (
            <div >
                <h3>{movie.display_title}</h3> 
                {movie.summary_short}
            </div>
            )
        })
    }

    render() {
        // console.log(this.state.reviews);
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews returnedMovieReviews={this.listMovieReviews()} />
            </div>
            );
    }
}

export default LatestMovieReviewsContainer;