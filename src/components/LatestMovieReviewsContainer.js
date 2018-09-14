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
                .then(reviews => {
                    let reviewsWithId = reviews.results.map((review, i) => {
                        return  {...review, id: i}
                    })
                    this.setState({reviews: reviewsWithId})
                })
            
    }

   

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <hr/>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            );
    }
}

export default LatestMovieReviewsContainer;